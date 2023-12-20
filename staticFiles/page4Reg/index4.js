const svgLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/> </svg>`;
const svgRight = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/> </svg>`;

const svgAddBtn = `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 487.77 487.77" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M487.77,243.877C487.77,109.402,378.368,0,243.887,0C109.402,0,0,109.402,0,243.877 C0,378.361,109.402,487.77,243.887,487.77C378.368,487.77,487.77,378.361,487.77,243.877z M74.754,243.877 c0-93.251,75.872-169.124,169.133-169.124c93.256,0,169.128,75.872,169.128,169.124c0,93.262-75.872,169.139-169.128,169.139 C150.626,413.016,74.754,337.141,74.754,243.877z"></path> <path d="M282.414,282.372h53.027c21.79,0,39.445-17.592,39.445-39.373c0-20.965-17.001-37.898-37.967-37.898h-54.507v-52.783 c0-21.79-17.583-39.447-39.373-39.447c-20.965,0-37.893,16.992-37.893,37.963v54.267h-54.3c-20.976,0-38.181,17.077-38.181,38.047 v1.474c0,20.971,17.205,37.749,38.181,37.749h54.3v54.549c0,20.977,17.028,37.938,38.004,37.938h1.463 c20.976,0,37.798-16.961,37.798-37.938v-54.548H282.414z"></path> </g> </g> </g></svg>`

const svgUpload = `<svg height="50%" width="50%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.317 35.317" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#030104;" d="M26.969,12.34c-0.748,0-1.492,0.105-2.221,0.309c-0.898-3.725-4.209-6.366-8.102-6.366 c-3.716,0-7.015,2.523-8.023,6.064c-0.092-0.002-0.185-0.007-0.277-0.007C3.746,12.34,0,16.088,0,20.685 c0,4.604,3.746,8.348,8.346,8.348h18.623c4.602,0,8.348-3.744,8.348-8.348C35.316,16.088,31.57,12.34,26.969,12.34z M26.969,27.894 H8.346c-3.973,0-7.209-3.234-7.209-7.209c0-3.973,3.236-7.203,7.209-7.203c0.223,0,0.443,0.012,0.662,0.033l0.5,0.045l0.107-0.488 c0.723-3.275,3.68-5.648,7.031-5.648c3.553,0,6.541,2.545,7.105,6.053l0.109,0.68l0.648-0.236c0.803-0.291,1.633-0.438,2.459-0.438 c3.975,0,7.207,3.23,7.207,7.203C34.176,24.66,30.943,27.894,26.969,27.894z"></path> <path style="fill:#030104;" d="M22.398,15.363c-0.217-0.217-0.574-0.217-0.787,0l-6.578,6.576l-3.389-3.406 c-0.217-0.221-0.57-0.221-0.789,0l-1.188,1.182c-0.219,0.215-0.219,0.574,0,0.793l4.967,4.994c0.215,0.217,0.568,0.217,0.789,0 l8.162-8.162c0.223-0.217,0.223-0.574,0-0.791L22.398,15.363z"></path> </g> </g></svg> Click to upload staff ID`;

const svgCheck = `<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M3 10a7 7 0 019.307-6.611 1 1 0 00.658-1.889 9 9 0 105.98 7.501 1 1 0 00-1.988.22A7 7 0 113 10zm14.75-5.338a1 1 0 00-1.5-1.324l-6.435 7.28-3.183-2.593a1 1 0 00-1.264 1.55l3.929 3.2a1 1 0 001.38-.113l7.072-8z"></path> </g></svg>`

const svgExit = `<svg fill="#000000" width="20px" height="20px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"></path><path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"></path></g></svg>`;

const svgUploadRecieptIcon = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.2106 2.25 12.4114 2.33852 12.5535 2.49392L16.5535 6.86892C16.833 7.17462 16.8118 7.64902 16.5061 7.92852C16.2004 8.20802 15.726 8.18678 15.4465 7.88108L12.75 4.9318V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V4.9318L8.55353 7.88108C8.27403 8.18678 7.79963 8.20802 7.49393 7.92852C7.18823 7.64902 7.16698 7.17462 7.44648 6.86892L11.4465 2.49392C11.5886 2.33852 11.7894 2.25 12 2.25Z" fill="#1C274C"></path> </g></svg>`;

const svgReceiptExit = `<svg fill="#000000" width="50px" height="50px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"></path><path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"></path></g></svg>`;

const notUploadReciptIcon = ``;

const svgSave = `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 407.096 407.096" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M402.115,84.008L323.088,4.981C319.899,1.792,315.574,0,311.063,0H17.005C7.613,0,0,7.614,0,17.005v373.086 c0,9.392,7.613,17.005,17.005,17.005h373.086c9.392,0,17.005-7.613,17.005-17.005V96.032 C407.096,91.523,405.305,87.197,402.115,84.008z M300.664,163.567H67.129V38.862h233.535V163.567z"></path> <path d="M214.051,148.16h43.08c3.131,0,5.668-2.538,5.668-5.669V59.584c0-3.13-2.537-5.668-5.668-5.668h-43.08 c-3.131,0-5.668,2.538-5.668,5.668v82.907C208.383,145.622,210.92,148.16,214.051,148.16z"></path> </g> </g> </g></svg> save`;

const svgSubmit = `<svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve" width="20px" height="20px" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;} </style> <line class="st0" x1="16" y1="20" x2="16" y2="4"></line> <polyline class="st0" points="12,8 16,4 20,8 "></polyline> <polyline class="st0" points="9,13 3,16.5 3,21.5 16,29 29,21.5 29,16.5 23,13 "></polyline> </g></svg> submit`

const svgPrint = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V11C20.6569 11 22 12.3431 22 14V18C22 19.6569 20.6569 21 19 21H5C3.34314 21 2 19.6569 2 18V14C2 12.3431 3.34315 11 5 11V5ZM5 13C4.44772 13 4 13.4477 4 14V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V14C20 13.4477 19.5523 13 19 13V15C19 15.5523 18.5523 16 18 16H6C5.44772 16 5 15.5523 5 15V13ZM7 6V12V14H17V12V6H7ZM9 9C9 8.44772 9.44772 8 10 8H14C14.5523 8 15 8.44772 15 9C15 9.55228 14.5523 10 14 10H10C9.44772 10 9 9.55228 9 9ZM9 12C9 11.4477 9.44772 11 10 11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H10C9.44772 13 9 12.5523 9 12Z" fill="#000000"></path> </g></svg>`;

const backbtn = document.querySelector('.backbtn')
backbtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10 21.308L0.692001 12L10 2.69199L11.063 3.75599L2.82 12L11.064 20.244L10 21.308Z" fill="black"/>
</svg>`;
const selectiveDiv = document.createElement('div');
selectiveDiv.classList.add('selective_div')
let uploadReference = [];
let uploadsIndividualData = new Object();
let uploadsMergedData = {'mergedData':[]};
const recieptUploadData = {'data':''}
let changedBool = false;
let referenceDb = uploadsIndividualData;
let popElem = null;
let fetchPop = null
class addSvgIcon{
    constructor()
    {
        this.svgSave = document.querySelector('.saveProgress');
        this.svgSave.innerHTML = svgSave
        this.svgLeft = document.querySelector('.leftIcon');
        this.svgLeft.innerHTML = svgLeft;
        this.svgRight = document.querySelector('.rightIcon');
        this.svgRight.innerHTML = svgRight;
        this.svgAddBtn = document.querySelector('.addPlayers');
        this.svgAddBtn.innerHTML = svgAddBtn;
        this.svgUpload = document.querySelector('.uploadBox');
        this.svgUpload.innerHTML = svgUpload;
        this.svgMergedIcon = document.querySelectorAll('.similarUpload')[1].querySelector('span');
        this.svgSubmit = document.querySelector('.submit');
        this.svgSubmit.innerHTML = svgSubmit;
        this.svgPrint = document.querySelector('.print');
        this.svgPrint.innerHTML = svgPrint
        this.svgMergedIcon.innerHTML = svgExit;
        this.svgRecieptUpload = document.querySelector('.uploadRecSec');
        this.svgRecieptUpload.innerHTML = 'upload the reciept of payment'
    }
}

new addSvgIcon()

class createProgressBar{
    constructor(num)
    {
        this.parent = document.querySelector('.progressBar');
        this.bulb_style = [
            ['min-height','18px'],
            ['min-width','18px'],
            ['borderRadius','50%'],
            ['border','1px solid #000'],
            ['display','flex'],
            ['justifyContent','center'],
            ['alignItems','center'],
            ['color','#fff'],
            ['fontSize','10px'],
            ['fontWeight','100'],
            ['transition','background linear .3s']
        ]
        this.layer_style = [
            ['height','100%'],
            ['background','#000'],
            ['position','absolute'],
            ['left','0'],
            ['top','0']
        ]
        this.bar_style = [
            ['height','2px'],
            ['width','100%'],
            ['position','relative'],
            // ['border','1px solid #fff'],
        ]
        this.appendStyle = (style,element) =>{
            style.forEach(val => {
                    element.style[`${val[0]}`] = val[1]
            });
        }
        this.progressObject = {
            'bulbs':new Array(),
            'bars':new Array
        }
        const create_divs = () =>{
            for(let i = 0; i < num ; i++)
            {
                let bulb = document.createElement('div');
                this.progressObject.bulbs.push(bulb);
                this.appendStyle(this.bulb_style,bulb)
                bulb.innerHTML = i+1
                this.parent.appendChild(bulb)
                switch(true)
                {
                    case i+1 < num:
                        let bar = document.createElement('div');
                        let layer = document.createElement('div');
                        bar.appendChild(layer)
                        this.progressObject.bars.push(bar);
                        this.appendStyle(this.bar_style,bar);
                        this.appendStyle(this.layer_style,layer)
                        this.parent.appendChild(bar)
                }
                switch(true)
                {
                    case i === 0:
                        bulb.style.background = '#000'
                }
            }
        }
        create_divs()
    }
}


const renderRegPage = (number) =>{
    const pages = document.querySelectorAll('.regPage');

            pages.forEach((val,idx) =>{
                switch(true){
                    case number-1 === idx:
                        val.style.display = 'flex';
                    break;
                    default:
                        val.style.display = 'none';
                }
            })
}

const progress = new createProgressBar(4);
const bulbs = progress.progressObject.bulbs;
const bars = progress.progressObject.bars;


    const start = () =>
    {
        let animeNumber = 0;
        let width_count = 0;
        let svgLeft = document.querySelector('.leftIcon');
        let svgRight = document.querySelector('.rightIcon');
        let left = null;
        let animationSpeed = 5
        let animating = false;
        let pageWatch = 1;
        renderRegPage(pageWatch)

        const animate = () =>{
            function regulateAdder()
            {
                switch(true)
                {
                    case pageWatch === 2:
                        document.querySelector('.addPlayers').style.display = 'block';
                    break;
                    default:
                        document.querySelector('.addPlayers').style.display = 'none';
                }
            }
            function frameAnimation()
            {
                let id = requestAnimationFrame(frameAnimation);
                animating = true
                bars[animeNumber].childNodes[0].style.width = `${width_count}%`
                switch(true)
                {
                    case !left:
                        width_count+=animationSpeed
                        switch(true)
                        {
                            case width_count > 100:
                                cancelAnimationFrame(id);
                                bars[animeNumber].childNodes[0].style.width = '100%';
                                bulbs[animeNumber+1].style.background = '#000'
                                animeNumber++;
                                animating = false;
                                renderRegPage(pageWatch);
                                regulateAdder()
                            break
                        }
                    break;
                    case left:
                        width_count-=animationSpeed
                        switch(true)
                        {
                            case width_count < -1:
                                cancelAnimationFrame(id);
                                bars[animeNumber].childNodes[0].style.width = '0%';
                                animating = false;
                                renderRegPage(pageWatch);
                                regulateAdder()
                                break 
                        }
                }
            }
            frameAnimation()
        }

        svgLeft.addEventListener('click', e =>{
            left = true
            switch(true)
            {
                case animeNumber > 0 && !animating:
                    pageWatch--
                    animeNumber--;
                    width_count = 100;
                    animate();
                    bulbs[animeNumber+1].style.background = 'transparent';
                    // renderRegPage(pageWatch)
            }
        })

        svgRight.addEventListener('click', e =>{
            left = false;
            switch(true)
            {
                case animeNumber <= bars.length-1 && !animating:
                    pageWatch++;
                    width_count = 0;
                    animate();
            }
        })
    }
    start();


    const createUploadElements = () =>{
        let numbers = document.querySelectorAll('.player')
        const element1 = document.createElement('div');
        element1.classList.add('player_upload');
        const p = document.createElement('p');
        p.innerHTML = `player ${numbers.length}`;
        element1.appendChild(p)
        const span = document.createElement('span');
        span.innerHTML = svgExit
        element1.appendChild(span);
        document.querySelector('.upload_confirmation').appendChild(element1);

        uploadReference = [element1,numbers.length];
        // console.log(uploadReference)

        element1.addEventListener('click', e =>{
            let index = Array.from(document.querySelectorAll('.player_upload')).indexOf(e.target)
            uploadReference = [e.target,index+1];
            e.target.appendChild(selectiveDiv)//check if the parent already has the div
        })
    }

    const createDataSpace = () =>{
        let numbers = document.querySelectorAll('.player')
        uploadsIndividualData[`${numbers.length}`] = '';
        // console.log(uploadsIndividualData)
    }

    class createPlayersModule{
        constructor(playerNo ,scroll)
        {
            this.playerNo = playerNo;
            this.mini_inputs = 3;
            this.mini_input_array = ['player Name','player Number','player Role'];
            this.elem1Class = ['box']
            this.parent = document.querySelector('.regPage2');
            this.scroll = scroll;
            createPlayersModule.createPlayers(this)
        }
        static createPlayers(params)
        {
            const {playerNo,mini_inputs,parent,mini_input_array,elem1Class,scroll} = params;
            const createMiniElem = (parent) =>{
                for(let j = 0; j < mini_inputs; j++)
                {
                    const Elem1 = document.createElement('div');
                    const span = document.createElement('span');
                    span.innerHTML = mini_input_array[j];
                    Elem1.appendChild(span);
                    const input = document.createElement('input');
                    input.setAttribute('type','text')
                    input.setAttribute('required','true')
                    Elem1.appendChild(input);
                    elem1Class.forEach(val =>{
                        Elem1.classList.add(`${val}`)
                    })
                    parent.appendChild(Elem1)
                }
            }
            const createElements = () =>
            {
                for(let i = 0; i < playerNo;i++)
                {
                    const playerElem = document.createElement('div');
                    playerElem.classList.add('player');
                    const numbering = document.createElement('p');
                    numbering.classList.add('playerNumber');
                    playerElem.appendChild(numbering)
                    // const playerIcon = document.createElement('div');
                    // playerIcon.classList.add('playerIcon');
                    // playerElem.appendChild(playerIcon);
                    // const label = document.createElement('label')
                    // label.setAttribute('for',`uploadImage${i}`)
                    // label.textContent = 'upload image';
                    // label.classList.add('three_d_style');
                    // label.classList.add('icon');
                    // playerElem.appendChild(label)
                    // const uploadInput = document.createElement('input')
                    // uploadInput.setAttribute('type','file');
                    // uploadInput.setAttribute('id',`uploadImage${i}`);
                    // playerElem.appendChild(uploadInput)
                    createMiniElem(playerElem)
                    parent.appendChild(playerElem);
                    switch(true)
                    {
                        case scroll:
                            playerElem.scrollIntoView()
                    }

                    let numbers = document.querySelectorAll('.player').length
                    numbering.innerHTML = numbers;

                    createUploadElements();
                    createDataSpace()
                }
            }
            createElements()
        }
    }
    new createPlayersModule(7);

    document.querySelector('.addPlayers').addEventListener('click', e =>{
        let numbers = document.querySelectorAll('.player')
        switch(true)
        {
            case numbers.length < 10:
                new createPlayersModule(1,true)
        }
    });

    document.getElementById('upload_page').addEventListener('change', e =>{
        const reader = new FileReader;
        reader.addEventListener('load', event =>{
            let profileImage = event.target.result;
            switch(true)
            {
                case changedBool:
                    uploadsMergedData.mergedData = [profileImage];
                    document.querySelectorAll('.similarUpload')[1].querySelector('span').innerHTML = svgCheck;
                    // console.log(uploadsMergedData)
                break;
                default:
                    uploadsIndividualData[`${uploadReference[1]}`] = profileImage
                    uploadReference[0].querySelector('span').innerHTML = svgCheck;
                    // console.log(uploadsIndividualData)

            }
            // e.target.parentElement.querySelector('.playerIcon').style.backgroundImage = `url(${profileImage})`
            // console.log(e.target)
        })
        reader.readAsDataURL(e.target.files[0])
    })

    document.getElementById('checkMerge').addEventListener('change', e =>{
        changedBool = changedBool === false ? true : false;
        switch(true)
        {
            case changedBool:
                document.querySelectorAll('.similarUpload')[0].style.display = 'none';
                document.querySelectorAll('.similarUpload')[1].style.display = 'flex';
                updateIndividualIconState()
            break;
            default:
                document.querySelectorAll('.similarUpload')[0].style.display = 'flex';
                document.querySelectorAll('.similarUpload')[1].style.display = 'none';
                updateMergedIconState()
        }
    })

    function updateIndividualIconState()
    {
        Object.keys(uploadsIndividualData).forEach(val =>{
            // switch(true)
            // {
            //     case uploadsIndividualData[`${val}`].length === 0:
                    uploadsIndividualData[`${val}`] = ''
            // }
        })
        const iconsParent = document.querySelectorAll('.player_upload');
        iconsParent.forEach(val =>{
            switch(true)
            {
                case Array.from(val.childNodes).includes(selectiveDiv):
                    console.log('i found a selective div')
                    val.removeChild(selectiveDiv)
            }
            val.querySelector('span').innerHTML = svgExit
        })
        console.log(uploadsIndividualData)
    }

    function updateMergedIconState(){
        uploadsMergedData.mergedData = [];
        document.querySelectorAll('.similarUpload')[1].querySelector('span').innerHTML = svgExit
    }

    const recieptUpload = () =>{
        document.getElementById('recieptUpload').addEventListener('change', e =>{
            const reader = new FileReader;
            reader.addEventListener('load', event =>{
                let profileImage = event.target.result;
                recieptUploadData.data = profileImage;
                console.log(recieptUploadData);
                document.querySelector('.uploadRecSec').innerHTML = svgUploadRecieptIcon + 'reciept uploaded successfully'
            })
            reader.readAsDataURL(e.target.files[0])
        })
    }

    recieptUpload();


    function extractData(storagePackage)
    {
        const bufferArrayStaffId = new Object();
        let bufferArrayReciept;
        let boolean = false
        const regPages = document.querySelectorAll('.regPage');
        for(let i = 0; i < regPages.length; i++)
        {
            switch(true)
            {
                case i === 0:
                    regPages[i].querySelectorAll('.box').forEach((val,idx) =>{

                        let input = val.querySelector('input')
                        let span = val.querySelector('span')
                        storagePackage[`page${i+1}`][`${span.innerHTML.split(' ').join('')}`] = input.value;
                    })
                break;
                case i === 1:
                    storagePackage[`page${i+1}`]['data'] = new Object()
                    regPages[i].querySelectorAll('.player').forEach((val,idx) =>{
                        storagePackage[`page${i+1}`]['data'][`player${idx+1}`] = {};
                        val.querySelectorAll('.box').forEach(param =>{
                            let input = param.querySelector('input')
                            let span = param.querySelector('span')
                            storagePackage[`page${i+1}`]['data'][`player${idx+1}`][`${span.innerHTML.split(' ').join('')}`] = input.value
                        })
                    })
                break;
                case i === 2:
                    let checkedState = regPages[i].querySelector('.uploadCheck');
                    storagePackage[`page${i+1}`]['staffId'] = {}
                    switch(true)
                    {
                        case checkedState.checked:
                            boolean = true
                            storagePackage[`page${i+1}`]['staffId'] = {'1':'valid'}
                            bufferArrayStaffId['0'] = uploadsMergedData.mergedData
                        break;
                        default:
                            Object.keys(uploadsIndividualData).forEach((val,idx) =>{
                                console.log(uploadsIndividualData[`${val}`].length)
                                switch(true)
                                {
                                    case uploadsIndividualData[`${val}`].length === 0:
                                        storagePackage[`page${i+1}`]['staffId'][`${val}`] = 'invalid';
                                        bufferArrayStaffId[`${idx}`] = ''
                                    break;
                                    default:
                                        storagePackage[`page${i+1}`]['staffId'][`${val}`] = 'valid'
                                        bufferArrayStaffId[`${idx}`] = uploadsIndividualData[`${val}`]
                                }
                                
                            })
                    }
                break;
                case i === 3:
                    switch(true)
                    {
                        case recieptUploadData.data.length !== 0:
                            storagePackage[`page${i+1}`]['EReciept'] = 'valid'
                            bufferArrayReciept = recieptUploadData.data
                        break;
                        default:
                            storagePackage[`page${i+1}`]['EReciept'] = 'invalid'
                            bufferArrayReciept = ''
                    }
            }
        }

        return [storagePackage,bufferArrayStaffId,bufferArrayReciept,boolean]
    }



class startRegistration{
    constructor(ws,User_id,createServerRefPackage)
    {
        this.ws = ws;
        this.User_id = User_id;
        this.saveButton = document.querySelector('.saveProgress')
        this.storagePackage = null;
        this.createServerRefPackage = createServerRefPackage
        startRegistration.run(this)
    }
    static run(params)
    {
        const {ws,User_id,saveButton,createServerRefPackage} = params;
        let bufferSData = new Array();
        let bufferRData = new Array();
        let textData = null;
        let {storagePackage} = params
        ws.addEventListener('open', e =>{
            storagePackage = createServerPackages();
            let JSONPackage = JSON.stringify(new createServerRefPackage(['page1','page2','page3','page4'],User_id,'queryUserData'));
            ws.send(JSONPackage)
            saveButton.addEventListener('click', e =>{
                const dataExtracted = extractData(storagePackage)
                let dataPack = dataExtracted[0];
                let binaryStaffPack = dataExtracted[1];
                let binaryRecieptPack = dataExtracted[2];
                const mergedState = dataExtracted[3];
                let serverPackage = JSON.stringify(new createServerRefPackage(dataPack,User_id,'saveData',true,mergedState));
                
                ws.send(serverPackage)
                ws.send(JSON.stringify({data:binaryStaffPack,state:'staff'}));
                ws.send(JSON.stringify({staffFinished:true}));
                ws.send(JSON.stringify({data:binaryRecieptPack,state:'re'}));
                ws.send(JSON.stringify({recieptFinished:true}))
            })
        })

        ws.addEventListener('message', ({data}) =>{

                const recievedData = JSON.parse(data);
                switch(true)
                {
                    case recievedData.object.title === 'fetchedData' && recievedData.object.content.category === User_id:
                        // console.log(recievedData)
                        renderData(recievedData)
                    break;
                    case recievedData.object.title === 'saveState':
                        renderData(recievedData)
                }
            function renderData(recievedData)
            {
                switch(true)
                {
                    case recievedData.object.title === 'fetchedData' && recievedData.object.content.category === User_id:
                        fetchPop.element.style.opacity = 0;
                        let timeout = setTimeout(() => {
                            fetchPop.pop()
                            clearTimeout(timeout)
                        }, 1000);
                        uploadUserData(recievedData.object.content.data)
                    break;
                    case recievedData.object.title === 'saveState':
                        popElem.element.textContent = recievedData.object.content.data
                        popElem.toggle();
                }
            }
        })


        function uploadUserData(data)
        {
            console.log(data);
            const regPages = document.querySelectorAll('.regPage');
            for(let i = 0; i < Object.keys(data).length; i++)
            {
                switch(true)
                {
                    case i === 0 && Object.keys(data[Object.keys(data)[i]]).length !== 0:
                        let inputArray = regPages[i].querySelectorAll('input');
                        let spanArray = regPages[i].querySelectorAll('span');
                        inputArray.forEach((val,idx) =>{
                            switch(true)
                            {
                                case data[Object.keys(data)[i]][spanArray[idx].innerHTML.split(' ').join('')] !== 'undefined':
                                    val.value = data[Object.keys(data)[i]][spanArray[idx].innerHTML.split(' ').join('')]
                            }
                        })
                    break;
                    case i === 1 && Object.keys(data[Object.keys(data)[i]]).length !== 0:
                        let playerNumber = Object.keys(data[Object.keys(data)[i]].data).length;
                        removeExistingPlayersAndAdd(regPages[i],playerNumber);
                        const startUpload = () =>{
                            const players = document.querySelectorAll('.player');
                            for(let j = 0; j < players.length; j++)
                            {
                                const boxes = players[j].querySelectorAll('.box');
                                boxes.forEach((val,idx) =>{
                                    let span = val.querySelector('span');
                                    let input = val.querySelector('input');
                                    input.value = data[Object.keys(data)[i]].data[`player${j+1}`][`${span.innerHTML.split(' ').join('')}`]
                                })
                            }
                        }
                        startUpload()
                    break;
                    case i === 2 && Object.keys(data[Object.keys(data)[i]]).length !== 0:
                        const staffUpload = document.querySelectorAll('.similarUpload');
                        // console.log(,'this is the staff')
                        switch(true)
                        {
                            case data[Object.keys(data)[i]].mergedState:
                                changedBool = true
                                document.querySelector('.uploadCheck').checked = true;
                                staffUpload[0].style.display = 'none';
                                staffUpload[1].style.display = 'flex';
                                switch(true)
                                {
                                    case data[Object.keys(data)[i]]['staffId']['1'] === 'valid':
                                    staffUpload[1].querySelector('span').innerHTML = svgCheck;
                                    break
                                    case data[Object.keys(data)[i]]['staffId']['1'] === 'invalid':
                                        staffUpload[1].querySelector('span').innerHTML = svgExit;
                                }
                            break;
                            default:
                                const dataArray = data[Object.keys(data)[i]]['staffId'];
                                const playerUploads = regPages[i].querySelectorAll('.player_upload')
                                for(let j = 0; j < Object.keys(dataArray).length; j++)
                                {
                                    console.log(dataArray[`${Object.keys(dataArray)[j]}`])
                                    switch(true)
                                    {
                                        case dataArray[`${Object.keys(dataArray)[j]}`] === 'valid':
                                            playerUploads[j].querySelector('span').innerHTML = svgCheck;
                                        break;
                                        case dataArray[`${Object.keys(dataArray)[j]}`] === 'invalid':
                                            playerUploads[j].querySelector('span').innerHTML = svgExit;
                                    }
                                }
                                // uploadsIndividualData = dataArray;
                        }
                    break;
                    case i === 3 && Object.keys(data[Object.keys(data)[i]]).length !== 0:
                        // recieptUploadData.data = data[Object.keys(data)[i]]['EReciept'];
                        switch(true)//uploadRecSec
                        {
                            case data[Object.keys(data)[i]]['EReciept'] === 'valid':
                                regPages[i].querySelector('.uploadRecSec').innerHTML = svgUploadRecieptIcon + 'reciept uploaded successfully';
                            break;
                            case data[Object.keys(data)[i]]['EReciept'] === 'invalid':
                                regPages[i].querySelector('.uploadRecSec').innerHTML = 'upload the reciept of payment'
                        }
                }
            };
            startImageUpload()
            function startImageUpload()
            {
                //start id upload
                for(let n = 0; n < Object.keys(data.staffs).length; n++)
                {
                    uploadsIndividualData[`${n+1}`] = data.staffs[`${n}`]
                }
                recieptUploadData.data = data.reciept;
            }
        }

        function removeExistingPlayersAndAdd(parent,playerNumber)
        {
            const players = document.querySelectorAll('.player');
            players.forEach(val =>{
                parent.removeChild(val)
            });
            document.querySelector('.upload_confirmation').innerHTML = ''
            new createPlayersModule(playerNumber)
        }

    }
}

function createServerPackages()
{
    let object = new Object();
    const regPages = document.querySelectorAll('.regPage')

    for(let i = 0; i < regPages.length; i++)
    {
        object[`page${i+1}`] = {}
        switch(true)
        {
            case i === 0:
                let spanArray = regPages[i].querySelectorAll('span');
                spanArray.forEach(val =>{
                    object[`page${i+1}`][`${val.innerHTML.split(' ').join('')}`] = ''
                })
            break;
            case i === 1:
                object[`page${i+1}`]['data']
            break
            case i === 2:
                object[`page${i+1}`]['staffId'] = {}
            break;
            case i === 3:
                object[`page${i+1}`]['EReciept'] = {}
        }
    }
    return object
}

