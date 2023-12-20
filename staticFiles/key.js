class keys{
    constructor(num,bool)
    {
        this.genkeys = new Object()
        this.looping = () =>{
            for(let i = 0; i < num; i++)
            {
                this.genkeys[`${i}`] = false
            }
            switch(true)
            {
                case bool:
                    this.genkeys['e'] = false;
                    this.genkeys['p'] = false
                    this.genkeys['Pp'] = false
            }
        }
        this.looping()
    }
}

export default keys