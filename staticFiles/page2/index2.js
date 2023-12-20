const svgBack = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10 21.308L0.692001 12L10 2.69199L11.063 3.75599L2.82 12L11.064 20.244L10 21.308Z" fill="black"/>
</svg>`;

const svgEye = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M7.88663 6L9.99996 8.10667V8C9.99996 7.46957 9.78925 6.96086 9.41417 6.58579C9.0391 6.21071 8.53039 6 7.99996 6H7.88663ZM5.01996 6.53333L6.05329 7.56667C6.01996 7.70667 5.99996 7.84667 5.99996 8C5.99996 8.53043 6.21067 9.03914 6.58575 9.41421C6.96082 9.78929 7.46953 10 7.99996 10C8.14663 10 8.29329 9.98 8.43329 9.94667L9.46663 10.98C9.01996 11.2 8.52663 11.3333 7.99996 11.3333C7.1159 11.3333 6.26806 10.9821 5.64294 10.357C5.01782 9.7319 4.66663 8.88406 4.66663 8C4.66663 7.47333 4.79996 6.98 5.01996 6.53333ZM1.33329 2.84667L2.85329 4.36667L3.15329 4.66667C2.05329 5.53333 1.18663 6.66667 0.666626 8C1.81996 10.9267 4.66663 13 7.99996 13C9.03329 13 10.02 12.8 10.92 12.44L11.2066 12.72L13.1533 14.6667L14 13.82L2.17996 2M7.99996 4.66667C8.88401 4.66667 9.73186 5.01786 10.357 5.64298C10.9821 6.2681 11.3333 7.11595 11.3333 8C11.3333 8.42667 11.2466 8.84 11.0933 9.21333L13.0466 11.1667C14.0466 10.3333 14.8466 9.24 15.3333 8C14.18 5.07333 11.3333 3 7.99996 3C7.06663 3 6.17329 3.16667 5.33329 3.46667L6.77996 4.9C7.15996 4.75333 7.56663 4.66667 7.99996 4.66667Z" fill="black"/>
</svg>`

const svgEye2 = `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 37.519 37.519" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M37.087,17.705c-0.334-0.338-8.284-8.276-18.327-8.276S0.766,17.367,0.433,17.705c-0.577,0.584-0.577,1.523,0,2.107 c0.333,0.34,8.284,8.277,18.327,8.277s17.993-7.938,18.327-8.275C37.662,19.23,37.662,18.29,37.087,17.705z M18.76,25.089 c-6.721,0-12.604-4.291-15.022-6.332c2.411-2.04,8.281-6.328,15.022-6.328c6.72,0,12.604,4.292,15.021,6.332 C31.369,20.802,25.501,25.089,18.76,25.089z M18.76,13.009c3.176,0,5.75,2.574,5.75,5.75c0,3.175-2.574,5.75-5.75,5.75 c-3.177,0-5.75-2.574-5.75-5.75C13.01,15.584,15.583,13.009,18.76,13.009z"></path> </g> </g></svg>`
class renderHtmlSvg{
    constructor()
    {
        this.svgBack = document.querySelector('.backbtn');
        this.svgBack.innerHTML = svgBack;
        // this.svgEye = document.querySelector('.eye');
        // this.svgEye2 = document.querySelector('.eye_2');
        // switch(true)
        // {
        //     case this.svgEye !== undefined:
        //         let toggle = false
        //         this.svgEye.innerHTML = svgEye;
        //         this.password = document.querySelector('.passwordInput')
        //         this.svgEye.addEventListener('click', e =>{
        //             toggle = toggle === false ? true : false;
        //             switch(true)
        //             {
        //                 case toggle:
        //                     this.svgEye.innerHTML = svgEye2;
        //                     this.password.setAttribute('type','text')
        //                 break;
        //                 default:
        //                     this.svgEye.innerHTML = svgEye;
        //                     this.password.setAttribute('type','password')
        //             }
        //         })
        // }
        // switch(true)
        // {
        //     case this.svgEye2 !== undefined:
        //         let toggle = false
        //         this.svgEye2.innerHTML = svgEye;
        //         this.password2 = document.querySelector('.passwordConfirmIpnut')
        //         this.svgEye2.addEventListener('click', e =>{
        //             toggle = toggle === false ? true : false;
        //             switch(true)
        //             {
        //                 case toggle:
        //                     this.svgEye2.innerHTML = svgEye2;
        //                     this.password2.setAttribute('type','text')
        //                 break;
        //                 default:
        //                     this.svgEye2.innerHTML = svgEye;
        //                     this.password2.setAttribute('type','password')
        //             }
        //         })
        // }
    }
}

new renderHtmlSvg();