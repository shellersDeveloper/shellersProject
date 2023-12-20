class connectWs{
    constructor(wss,clientPackage,path,fs,moduleRegisterCreator,moduleAdminFeedBack)
    {
        this.data = null;
        this.waitStateObject = {
            label:null,
            blobSData:[],
            blobRData:[]
        }
        wss.on('connection', ws =>{
            ws.on('message', data =>{
                this.runWebsocket = () =>{
                    switch(true)
                    {
                        case this.data.title === 'signUpAuth':
                            const auth = require(path.join(__dirname,'../peripheralFolders/signupAuth.js'))
                            switch(true)
                            {
                                case auth(this.data.content,path,fs):
                                    const packagerT = new clientPackage('websocketAuth',true,this.data.content.name);
                                    ws.send(JSON.stringify(packagerT))
                                break;
                                default:
                                    const packagerF = new clientPackage('websocketAuth',false,this.data.content.name);
                                    ws.send(JSON.stringify(packagerF))
                            }
                        break;
                        case this.data.title === 'RegPagePackage':

                        async function saveDb(data)
                        {
                            Object.keys(data.object).forEach((val,idx) =>{
                            let intermediate = new Object();
                            let refined = data.object[`${val}`];
                            Object.keys(refined).forEach(param =>{
                                let mainData = refined[`${param}`];
                                mainData = typeof mainData === 'string' ? mainData.toLowerCase() : mainData
                                intermediate[`${param}`] = mainData;
                            })
                            switch(true)
                            {
                                case idx === 2:
                                    intermediate.mergedState = data.mergedState
                            }
                            intermediate['User_id'] = data['User_id'].toLowerCase();
                            console.log(val)

                            moduleRegisterCreator[`${val}`].findOneAndUpdate({'User_id':data['User_id'].toLowerCase()},{$set:intermediate},{new:true}).then(data =>{
                                switch(true)
                                {
                                    case data === null:
                                        create();
                                    break;
                                    default:
                                        ws.send(
                                            JSON.stringify(
                                                new clientPackage('saveState','your data has been updated and saved')
                                            )
                                        )
                                }
                            }).catch(err =>{
                                console.log(err)
                            })

                                async function create()
                                {
                                    try{
                                    let result = await moduleRegisterCreator[`${val}`].create(intermediate)
                                    ws.send(
                                        JSON.stringify(
                                            new clientPackage('saveState','your data has been created and saved')
                                        )
                                    )
                                    }catch(err){    
                                        console.log(err)
                                    }
                                }
                            })
                        }

                        async function recordRegistration(data)
                        {
                            moduleAdminFeedBack.user_admin.findOneAndUpdate({'User_id':data['User_id'].toLowerCase()},{$set:{
                                registered:true
                            }},{new:true}).then(data =>{
                                switch(true)
                                {
                                    case data === null:
                                        create();
                                    break;
                                    default:
                                        console.log('document has been created')
                                }
                            }).catch(err =>{
                                console.log(err)
                            })

                            async function create()
                            {
                                try{
                                    let result = await moduleAdminFeedBack.user_admin.create({
                                        User_id:data.User_id,
                                        registered:true,
                                        verifiedPayment:false
                                    })
                                    console.log('document has been created')
                                }catch(err){
                                    console.log('could not create document because',err.name)
                                }
                            }
                        }   

                            switch(true)
                            {
                                case this.data.purpose === 'saveData':
                                    saveDb(this.data);
                                break;
                                case this.data.purpose === 'saveData_register':
                                    saveDb(this.data);
                                    recordRegistration(this.data)
                                break
                                case this.data.purpose === 'queryUserData':
                                        fetchUserData(this.data);
                                        async function fetchUserData(data)
                                        {
                                            const interObject = new Object()
                                            for(let i = 0;i < data.object.length; i++)
                                            {
                                                let fetchData = await moduleRegisterCreator[`${data.object[i]}`].find({User_id:data.User_id}).exec();
                                                fetchData = fetchData.length === 0 ? {}:fetchData[0]
                                                interObject[`${data.object[i]}`] = fetchData
                                            }//(title,data,category);
                                            
                                            try{
                                                fs.readFile(path.join(__dirname,'../tempImgStore/tempStaff.json'),(err,st_data) =>{
                                                    if(err)console.log(err);
                                                    else{
                                                        let staffId = JSON.parse(st_data.toString());
                                                        let User_id = data.User_id;
                                                        interObject['staffs'] = staffId[User_id];
                                                        fs.readFile(path.join(__dirname,'../tempImgStore/tempRe.json'),(err,re_data) =>{
                                                                let reciept = JSON.parse(re_data.toString());
                                                                let User_id = data.User_id;
                                                                interObject['reciept'] = reciept[User_id];
                                                                let packaged = new clientPackage('fetchedData',interObject,User_id);
                                                                ws.send(JSON.stringify(packaged))
                                                        })
                                                    }
                                                })
                                            }catch(err)
                                            {
                                                console.log(err)
                                            }
                                        }
                                break;
                            }
                        break;
                        case this.data.title === 'adminQuery':
                            switch(true)
                            {
                                case this.data.purpose === 'payments':
                                    fetch_id()
                                    async function fetch_id()
                                    {
                                        try{
                                            moduleAdminFeedBack.user_admin.find().select('User_id -_id').exec().then(data =>{
                                                retrieveNameAndUpload(data)
                                            }).catch(err =>{
                                                console.log(err)
                                            })
                                            
                                            async function retrieveNameAndUpload(resultData)
                                            {
                                                const organisationPackage = new Object()
                                                for(let i = 0; i < resultData.length; i++)
                                                {
                                                    try{
                                                        organisationPackage[`${resultData[i].User_id}`] = {}
                                                        let names = await moduleRegisterCreator.page1.find({User_id:resultData[i].User_id}).select('OrganisationName -_id').exec();
                                                        organisationPackage[`${resultData[i].User_id}`]['OrganisationName'] = names[0].OrganisationName
                                                        
                                                        let readData = fs.readFileSync(path.join(__dirname,'../tempImgStore/tempRe.json'));
                                                        let newReadData = JSON.parse(readData.toString());
                                                        organisationPackage[`${resultData[i].User_id}`]['reciept'] = newReadData[`${resultData[`${i}`].User_id}`]
                                                    }catch(err)
                                                    {
                                                        console.log(err)
                                                    }
                                                }
                                                // console.log(organisationPackage)
                                                ws.send(JSON.stringify(new clientPackage('companyReciept',organisationPackage,'payments')))
                                            }
                                        }catch(err)
                                        {
                                            console.log(err)
                                        }
                                    }
                                break;
                                case this.data.purpose === 'retriveregInfo':
                                    try{
                                        moduleAdminFeedBack.user_admin.find().select('User_id -_id').exec().then(data =>{
                                            retrieveNameAndUpload(data)
                                        }).catch(err =>{
                                            console.log(err)
                                        })
                                        
                                        async function retrieveNameAndUpload(resultData)
                                        {
                                            const organisationPackage = new Object()
                                            for(let i = 0; i < resultData.length; i++)
                                            {
                                                try{
                                                    organisationPackage[`${resultData[i].User_id}`] = {}
                                                    let names = await moduleRegisterCreator.page1.find({User_id:resultData[i].User_id}).select('OrganisationName OrganisationEmail ProposedTeamName proposedJerseycolour TeamCoach -_id').exec();
                                                    organisationPackage[`${resultData[i].User_id}`]['name'] = names[0].OrganisationName
                                                    organisationPackage[`${resultData[i].User_id}`]['Email'] = names[0].OrganisationEmail
                                                    organisationPackage[`${resultData[i].User_id}`]['ProposedTeamName'] = names[0].ProposedTeamName
                                                    organisationPackage[`${resultData[i].User_id}`]['proposedJerseycolour'] = names[0].proposedJerseycolour;
                                                    organisationPackage[`${resultData[i].User_id}`]['TeamCoach'] = names[0].TeamCoach
                                                    let players = await moduleRegisterCreator.page2.find({User_id:resultData[i].User_id}).select(' -_id').exec();
                                                    organisationPackage[`${resultData[i].User_id}`]['players'] = players[0].data
                                                }catch(err)
                                                {
                                                    console.log(err)
                                                }
                                            }
                                            // console.log(organisationPackage)
                                            ws.send(JSON.stringify(new clientPackage('playersInfo',organisationPackage,'players')))
                                        }
                                    }catch(err)
                                    {
                                        console.log(err)
                                    }
                                break;
                                case this.data.purpose === 'downloadUploads':
                                    try{
                                        moduleAdminFeedBack.user_admin.find().select('User_id -_id').exec().then(data =>{
                                            retrieveNameAndUpload(data)
                                        }).catch(err =>{
                                            console.log(err)
                                        })
                                        
                                        async function retrieveNameAndUpload(resultData)
                                        {
                                            const organisationPackage = new Object()
                                            for(let i = 0; i < resultData.length; i++)
                                            {
                                                try{
                                                    organisationPackage[`${resultData[i].User_id}`] = {}
                                                    let names = await moduleRegisterCreator.page1.find({User_id:resultData[i].User_id}).select('OrganisationName -_id').exec();
                                                    organisationPackage[`${resultData[i].User_id}`]['organisationName'] = names[0].OrganisationName
                                                    
                                                    let readData = fs.readFileSync(path.join(__dirname,'../tempImgStore/tempStaff.json'));
                                                        let newReadData = JSON.parse(readData.toString());
                                                        organisationPackage[`${resultData[i].User_id}`]['reciept'] = newReadData[`${resultData[`${i}`].User_id}`]
                                                }catch(err)
                                                {
                                                    console.log(err)
                                                }
                                            }
                                            ws.send(JSON.stringify(new clientPackage('downloadable',organisationPackage,'staff')))
                                        }
                                    }catch(err)
                                    {
                                        console.log(err)
                                    }
                            }
                        break;
                        case this.data.title === 'dashboard':
                            try{
                                moduleAdminFeedBack.user_admin.find().select('User_id -_id').exec().then(data =>{
                                    retrieveNameAndUpload(data)
                                }).catch(err =>{
                                    console.log(err)
                                })
                                
                                async function retrieveNameAndUpload(resultData)
                                {
                                    const organisationPackage = new Object()
                                    for(let i = 0; i < resultData.length; i++)
                                    {
                                        try{
                                            organisationPackage[`${resultData[i].User_id}`] = {}
                                            let names = await moduleRegisterCreator.page1.find({User_id:resultData[i].User_id}).select('OrganisationName ProposedTeamName -_id').exec();
                                            organisationPackage[`${resultData[i].User_id}`]['name'] = names[0].OrganisationName
                                            organisationPackage[`${resultData[i].User_id}`]['ProposedTeamName'] = names[0].ProposedTeamName
                                            let players = await moduleRegisterCreator.page2.find({User_id:resultData[i].User_id}).exec();
                                            organisationPackage[`${resultData[i].User_id}`]['player'] = players[0]
                                        }catch(err)
                                        {
                                            console.log(err)
                                        }
                                    }
                                    ws.send(JSON.stringify(new clientPackage('players',organisationPackage,'dashboard')))
                                }
                            }catch(err)
                            {
                                console.log(err)
                            }
                    }
                }
                this.storeBinary = (binaryPack,User_id) =>{
                    try{
                        read()
                        async function read(){
                            let fsRead = fs.readFileSync(path.join(__dirname,'../tempImgStore/tempStaff.json'));
                            let newfsRead = JSON.parse(fsRead.toString());
                            newfsRead[`${User_id}`] = binaryPack.blobSData

                            fs.writeFile(path.join(__dirname,'../tempImgStore/tempStaff.json'),JSON.stringify(newfsRead),(err) =>{
                                if(err)console.log(err)
                                else {
                                    console.log('saved successfully');
                                    let fsRead2 = fs.readFileSync(path.join(__dirname,'../tempImgStore/tempRe.json'));
                                    let newfsRead2 = JSON.parse(fsRead2.toString());
                                    newfsRead2[`${User_id}`] = binaryPack.blobRData

                                    fs.writeFile(path.join(__dirname,'../tempImgStore/tempRe.json'),JSON.stringify(newfsRead2),(err) =>{
                                        if(err) console.log(err)
                                        else console.log('saved')
                                    })
                                }
                            })
                        }   
                    }catch(err)
                    {
                        console.log(err)
                    }

                    
                }
                try{
                    this.data = JSON.parse(data.toString());
                    switch(true)
                    {
                        case this.data.waitState === true:
                            this.waitStateObject.label = this.data;
                        break;
                        case this.data.state === 'staff':
                            this.waitStateObject.blobSData = this.data.data
                        break;
                        case this.data.state === 're':
                            this.waitStateObject.blobRData = this.data.data
                            this.data = this.waitStateObject.label;
                            // console.log(this.waitStateObject)
                            this.runWebsocket();
                            this.storeBinary(this.waitStateObject,this.waitStateObject.label.User_id);
                            // this.storeBinary(this.waitStateObject.blobRData,this.waitStateObject.label.User_id,'bufferRData')
                            this.waitStateObject = {
                                label:null,
                                blobSData:[],
                                blobRData:[]
                            }
                        break;
                        default:
                            this.runWebsocket();
                    }
                }catch(err)
                {
                    console.log(err)
                }
            })
        })
    }
}

module.exports = connectWs