class createPopUp{
    constructor(parent)
    {
        this.parent = parent
        this.element = document.createElement('div');
        this.element.classList.add('pageStyling');
        this.element.classList.add('three_d_style');
        this.element.classList.add('popUp');
        this.element.innerHTML = 'ensure to fill all input'
        this.parent.appendChild(this.element);
        this.toggleReverse = () =>{
            this.element.style.transform = 'translateX(-50%) translateY(-120%)'
        }
        this.toggle = () =>{
            this.tog_bool = true;
            this.element.style.transform = 'translateX(-50%) translateY(0%)';
            this.timeOut = setTimeout(() => {
                this.toggleReverse();
                clearTimeout(this.timeOut)
            }, 5000);
        }
    }
}

export default createPopUp