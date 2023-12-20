
class setAutoClose{
    constructor(element,menu,checkbox)
    {
        this.element = element
        this.menu = menu
        this.bool1 = false;
        this.bool2 = false
        this.checkbox = checkbox === undefined ? null : checkbox;
        setAutoClose.run(this)
    }
    static run(params)
    {
        const {checkbox,menu,element} = params;
        let {bool1,bool2} = params

        menu.addEventListener('click', e =>{
            bool1 = true;
        })

        element.addEventListener('mouseout', e =>{
            bool2 = true
        })
        element.addEventListener('mouseover', e =>{
            bool2 = false
        })
        document.body.addEventListener('click', e =>{
            switch(true)
            {
                case bool1 && bool2:
                    bool1 = false;
                    bool2 = false;
                    checkbox.checked = false

            }
        })
    }
}

export default setAutoClose