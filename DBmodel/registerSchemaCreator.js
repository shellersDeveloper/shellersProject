class createSchema{
    constructor(registrationConnection,mongoose)
    {
        this.schema = mongoose.Schema;
        this.page1 = new this.schema({
            OrganisationName:{
                type:String,
                required:false
            },
            ProposedTeamName:{
                type:String,
                required:false
            },
            proposedJerseycolour:{
                type:String,
                required:false
            },
            TeamCoach:{
                type:String,
                required:false
            },
            OrganisationEmail:{
                type:String,
                required:false
            },
            User_id:{
                type:String,
                required:true
            }
        })
        this.page1 = registrationConnection.model('register1',this.page1);

        this.page2 = new this.schema({
            data:{
                type:Object,
                required:true
            },
            User_id:{
                type:String,
                required:true
            }
        })
        this.page2 = registrationConnection.model('register2',this.page2)

        this.page3 = new this.schema({
            staffId:{
                type:Object,
                required:true
            },
            mergedState:{
                type:Boolean,
                required:true
            },
            User_id:{
                type:String,
                required:true
            }
        })
        this.page3 = registrationConnection.model('register3',this.page3)

        this.page4 = new this.schema({
            EReciept:{
                type:String,
                required:true
            },
            User_id:{
                type:String,
                required:true
            }
        })
        this.page4 = registrationConnection.model('register4',this.page4);
        this.bufferStaffData = new this.schema({
            buf1:{
                type:Array,
                binary:true
            },
            buf2:{
                type:Array,
                binary:true
            },
            buf3:{
                type:Array,
                binary:true
            },
            buf4:{
                type:Array,
                binary:true
            },
            buf5:{
                type:Array,
                binary:true
            },
            buf6:{
                type:Array,
                binary:true
            },
            buf7:{
                type:Array,
                binary:true
            },
            buf8:{
                type:Array,
                binary:true
            },
            buf9:{
                type:Array,
                binary:true
            },
            buf10:{
                type:Array,
                binary:true
            },
            User_id:{
                type:String,
                required:true
            }
        })
        this.bufferStaffData = registrationConnection.model('bufferStaffData',this.bufferStaffData)

        this.bufferRData = new this.schema({
            buf1:{
                type:Array,
                binary:true
            },
            User_id:{
                type:String,
                required:true
            }
        })
        this.bufferRData = registrationConnection.model('bufferRData',this.bufferRData)
    }
}

module.exports = createSchema