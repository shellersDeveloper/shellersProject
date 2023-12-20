class createSchema{
    constructor(adminFeedBackConnection,mongoose)
    {
        this.schema = mongoose.Schema;
        this.user_admin = new this.schema({
            User_id:{
                type:String,
                required:true
            },
            registered:{
                type:Boolean,
                required:true
            },
            verifiedPayment:{
                type:Boolean,
                required:true
            },
        })
        this.user_admin = adminFeedBackConnection.model('users',this.user_admin);
    }
}

module.exports = createSchema