const auth = (object,path,fs) =>{
    let {name,text} = object;
    let pathToTemp = path.join(__dirname,'../temp/temp.json');
    let duplicateAuth = false
    try{
        const query = fs.readFileSync(pathToTemp);
        duplicateAuth = JSON.parse(query).some(val =>{return val[`${name}`].toLowerCase() === text.toLowerCase()});
    }catch(err)
    {
        console.log('file doesnt exit')
    }
    return duplicateAuth
}

module.exports = auth;