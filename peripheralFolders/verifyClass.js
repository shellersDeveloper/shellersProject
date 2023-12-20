class verifyDb{
    constructor(Db,ref,array)
    {
        this.Db = Db;
        this.ref = ref;
        this.array = array;
        this.tempBool = new Array();
        this.Db.forEach(val =>{
            let nextArray = val;
            let temp = this.array.every(param =>{return nextArray[`${param}`] === ref[`${param}`]});
            this.tempBool.push(temp)
        })
        this.result = this.tempBool.some(val =>{return val === true})
    }
}

module.exports = verifyDb