// const express = require('express');
// const router = express.Router();


class routerClass{
    constructor(express,path,urlencoded,mongoose,wss,createSchemaSignUp,createSchemaregister,createSchemaadminFeedBack,server,port)
    {
        this.express = express;
        this.fs = require('fs')
        this.mongoose = mongoose
        this.router = express.Router();
        this.path = path;
        this.urlencoded = urlencoded;
        this.createSchemaSignUp = createSchemaSignUp;
        this.createSchemaregister = createSchemaregister;
        this.createSchemaadminFeedBack = createSchemaadminFeedBack
        this.wss = wss;
        this.verifyDb = require('./verifyClass.js')
        this.id_generator = require('./generateID.js')
        this.signUpMongoose = () =>{
            try{
                this.signUpConnection = mongoose.createConnection(process.env.signUpdatabaseUrl,{
                    useUnifiedTopology:true,
                    useNewUrlParser:true
                })
            }catch(err)
            {
                console.error(err)
            }   
        }
        this.signUpMongoose()
        this.registrationMongoose = () =>{
            try{
                this.registrationConnection = mongoose.createConnection(process.env.registrationdatabaseUrl,{
                    useUnifiedTopology:true,
                    useNewUrlParser:true
                })
            }catch(err)
            {
                console.error(err)
            }   
        }
        this.adminFeedBackMongoose = () =>{
            try{
                this.adminFeedBackConnection = mongoose.createConnection(process.env.adminFeedBackdatabaseUrl,{
                    useUnifiedTopology:true,
                    useNewUrlParser:true
                })
            }catch(err)
            {
                console.error(err)
            }   
        }
        this.connectWs = require('../connect/connectWs.js');
        this.clientPackage = class createClientPackage{
            constructor(title,data,category){
                this.object = {
                    title:title,
                    content:{
                        data:data,
                        category:category
                    }
                }
            }
        }
        this.auth = require(path.join(__dirname,'/signupAuth.js'))

        this.signUpConnection.once('connected', () =>{
            this.moduleSignUpCreator = new this.createSchemaSignUp(this.signUpConnection,mongoose)
            console.log('connection successful');
            this.registrationMongoose();

            this.registrationConnection.once('connected', () =>{
                this.moduleRegisterCreator = new this.createSchemaregister(this.registrationConnection,mongoose)
                console.log('register connection successful');
                this.adminFeedBackMongoose();

                this.adminFeedBackConnection.once('connected', () =>{
                    this.moduleAdminFeedBack = new this.createSchemaadminFeedBack(this.adminFeedBackConnection,mongoose);
                    console.log('adminfeedBack connection successful');
                    server.listen(port, () =>{
                        console.log('server is listening at port 9000')
                    })
                    new this.connectWs(this.wss,this.clientPackage,this.path,this.fs,this.moduleRegisterCreator,this.moduleAdminFeedBack)
                })

            })

            this.clearCache = () =>{
                this.fs.writeFile(path.join(__dirname,'../temp/temp.json'),JSON.stringify('{}'),(err) =>{
                    if(err)console.log(err)
                    else console.log('cache cleared sucessful')
                })
            }
            this.clearCache()

            routerClass.run(this)
        })

        // this.moduleSignUpCreator = null
        // this.signUpConnection.on('error', err =>{
        //     console.log(err,'this is the error')
        // })
    }
    static run(param)
    {
        const {router,express,path,urlencoded,signUpConnection,connectWebsocket,wss,moduleSignUpCreator,connectWs,clientPackage,fs,auth,verifyDb,id_generator} = param;
        let {createSchema} = param;

        
        router.get('/signUp', (req,res) =>{
            // const mongooseConnectionState = signUpConnection.connection.readyState;
            const writeDataToTemp = (data) =>{
                let pathToTemp = path.join(__dirname,'../temp/temp.json');
                fs.writeFile(pathToTemp,JSON.stringify(data), err =>{
                    if(err) console.error(err)
                })
            }
            const queryDataAuth = () =>{
                moduleSignUpCreator.userSignUp.find({},'-_id email pass1')
                .exec()
                .then(data =>{
                    writeDataToTemp(data)
                    res.sendFile(path.join(__dirname,'../staticFiles/page5/index.html'));
                }).catch(err =>{
                    res.send('failed to connect db');
                    console.log(err)
                })
            }
            queryDataAuth()
        })
        .post('/userSignUpData',urlencoded,(req,res) =>{
            const {fullName,phoneNumber,email,pass1,pass2} = req.body;

            const writeDataToTempPost = (data) =>{
                let pathToTemp = path.join(__dirname,'../temp/temp.json');
                fs.writeFile(pathToTemp,JSON.stringify(data), err =>{
                    if(err) console.error(err)
                })
            }

            const queryDataAuth = (unique_id) =>{
                moduleSignUpCreator.userSignUp.find({},'-_id email pass1')
                .exec()
                .then(data =>{
                    writeDataToTempPost(data);
                    res.render(path.join(__dirname,'../staticFiles/page4Reg/index.ejs'),{unique_id:unique_id});
                }).catch(err =>{
                    res.send('failed to connect db');
                    console.log(err)
                })
            }

            const saveDb = async (unique_id) =>{
                let result = await moduleSignUpCreator.userSignUp.create({
                    fullName:fullName.toLowerCase(),
                    phoneNumber:phoneNumber.toLowerCase(),
                    email:email.toLowerCase(),
                    pass1:pass1.toLowerCase(),
                    unique_id:unique_id.toLowerCase()
                })
                queryDataAuth(unique_id)
            }
            
            const emailPasswordVerification = () =>{
                let array = [auth({name:'email',text:req.body.email},path,fs),auth({name:'pass1',text:req.body.pass1},path,fs)];
                let bool = array.some(val =>{return val === false})
                return bool
            }
            switch(true)
            {
                case emailPasswordVerification():
                    saveDb(new id_generator(req.body.email,req.body.pass1).id[0]);
                break;
                default:
                    res.send('account creation failed')
            }
        })
        .get('/', (req,res) =>{
            res.sendFile(path.join(__dirname,'../staticFiles/page1/index.html'))
        })
        .get('/signLog', (req,res) =>{
            res.sendFile(path.join(__dirname,'../staticFiles/page2/index.html'))
        })
        .get('/loginPage', (req,res) =>{
            res.sendFile(path.join(__dirname,'../staticFiles/page3/index.html'));
        })
        .post('/verifyAccount',urlencoded, (req,res) =>{

            const verifyUserAccount = (data) =>{
                let keys = ['email','pass1','unique_id']
                let bool = new verifyDb(data,req.body,keys).result;
                switch(true)
                {
                    case bool:
                        res.render(path.join(__dirname,'../staticFiles/page4Reg/index.ejs'),{unique_id:req.body.unique_id});
                    break;
                    default:
                        res.sendFile(path.join(__dirname,'../staticFiles/page6/index.html'));
                }
            }

            const queryDataAuth = () =>{
                moduleSignUpCreator.userSignUp.find({},'-_id email pass1 unique_id')
                .exec()
                .then(data =>{
                    req.body.unique_id = new id_generator(req.body.email,req.body.pass1).id[0]
                    verifyUserAccount(data)
                }).catch(err =>{
                    res.send('failed to connect db');
                    console.log(err)
                })
            }
            queryDataAuth()
        })
        .get('/adminPage', (req,res) =>{
            res.sendFile(path.join(__dirname,'../staticFiles/admin/admin.html'))
        })
        .get('/dashboard', (req,res) =>{
            res.sendFile(path.join(__dirname,'../staticFiles/dashboard/index.html'))
        })
        .get('/downloadPdf', (req,res) =>{
            res.download(path.join(__dirname,'../resources/handbook.pdf'))
        })
        .get('/adminRequest', (req,res) =>{
            res.sendFile(path.join(__dirname,'../staticFiles/adminRequest/index.html'))
        })
        .post('/adminConfirmation',urlencoded, (req,res) =>{
                switch(true)
                {
                    case req.body.token.toLowerCase() === 'shellersadmin':
                        res.sendFile(path.join(__dirname,'../staticFiles/admin/admin.html'));
                    break;
                    default:
                        res.sendFile(path.join(__dirname,'../staticFiles/page1/index.html'))
                }
        })
    }
}


module.exports = routerClass;