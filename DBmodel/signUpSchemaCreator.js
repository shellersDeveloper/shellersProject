class createSchema{
    constructor(signUpConnection,mongoose)
    {
        this.schema = mongoose.Schema;
        this.userSignUp = new this.schema({
            fullName:{
                type:String,
                required:true
            },
            phoneNumber:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            pass1:{
                type:String,
                required:true
            },
            unique_id:{
                type:String,
                required:true
            }
        })
        this.userSignUp = signUpConnection.model('user',this.userSignUp)
    }
}

module.exports = createSchema