const connect = async () =>{
    try{
        await mongoose.connect(`mongodb+srv://devbatsystudios:phill2004@cluster0.marysmm.mongodb.net/${playerObject['organisationName']}?retryWrites=true&w=majority`,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log('connection sucessful')
    }catch(err){
        console.error(err)
    }
}

// connect();

mongoose.connection.once('open', () =>{
    const moduleCreator = new schema(mongoose);
    //  FETCHING DATA FROM DB
    moduleCreator.player.find()
    .then(data =>{
        console.log(data)
    }).catch(err =>{
        console.log(err)
    })
    // WRITING DATA TO DATABASE
    const func = async (val) =>{
        let result = await moduleCreator.player.create({
            profileInfo:playerObject
        });
        console.log(result)
    }

    array.forEach(val =>{
        func(val)
    })
})