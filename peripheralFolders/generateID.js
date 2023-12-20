class id_generator{
    constructor(email,password)
    {
        this.email = email;
        this.password = password;
        this.id = new Array()
        id_generator.run(this)
    }
    static run(params)
    {
        const {email,password,id} = params;

        id.push(email.slice(0,5)+password.slice(0,2)+email.slice(5,email.length)+password.slice(2,password.length))
    }
}

module.exports = id_generator