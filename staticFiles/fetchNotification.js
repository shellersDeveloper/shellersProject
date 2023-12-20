class createFetch{
    constructor()
    {
        this.element = document.createElement('div');
        document.querySelector('.container').appendChild(this.element);
        this.element.classList.add('fetch');
        this.img = document.createElement('img');
        this.img.src = 'img/ball.gif';
        this.element.appendChild(this.img)
        this.pop = () =>{
            this.element.style.display = 'none'
        }
    }
}

export default createFetch