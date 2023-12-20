const ws = new WebSocket('ws://localhost:9000');
const querys = document.querySelectorAll('.query');
const queryable = document.querySelectorAll('.queryable');
const welcomePage = document.querySelector('.welcomePage');
const float = document.querySelector('.float');
const recieptStorage = {

};
const svgDownload = `<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" fill="#1C274C"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C12.2106 2.25 12.4114 2.33852 12.5535 2.49392L16.5535 6.86892C16.833 7.17462 16.8118 7.64902 16.5061 7.92852C16.2004 8.20802 15.726 8.18678 15.4465 7.88108L12.75 4.9318V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V4.9318L8.55353 7.88108C8.27403 8.18678 7.79963 8.20802 7.49393 7.92852C7.18823 7.64902 7.16698 7.17462 7.44648 6.86892L11.4465 2.49392C11.5886 2.33852 11.7894 2.25 12 2.25Z" fill="#1C274C"></path> </g></svg>`;

document.querySelector('.backbtn').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M10 21.308L0.692001 12L10 2.69199L11.063 3.75599L2.82 12L11.064 20.244L10 21.308Z" fill="black"/>
</svg>`;
class serverPackage{
    constructor(title,purpose,data)
    {
        this.title = title;
        this.purpose = purpose
        this.data = data;
    }
}
let fetchPop = null;
let fetching;
ws.addEventListener('open', e =>{
    querys.forEach((val,idx) =>{
        val.addEventListener('click', e =>{
            renderStyle(idx);
            fetching = new fetchPop();
            document.querySelector('.container').removeChild(fetching.element);
            document.querySelector('.display').appendChild(fetching.element);
            switch(true)
            {
                case idx === 0:
                    // queryable[idx].innerHTML = '<h2>development still in progress...</h2>'
                    ws.send(JSON.stringify(new serverPackage('adminQuery','payments',{})));
                break;
                case idx === 1:
                    ws.send(JSON.stringify(new serverPackage('adminQuery','downloadUploads',{})));
                    // queryable[idx].innerHTML = '<h2>development still in progress...</h2>';
                break;
                case idx === 2:
                    console.log(JSON.stringify(new serverPackage('adminQuery','retriveregInfo')))
                    ws.send(JSON.stringify(new serverPackage('adminQuery','retriveregInfo')));
            }
        })
    })

    ws.addEventListener('message', ({data}) =>{
        let refinedData = JSON.parse(data.toString());
        fetching.element.style.opacity = 0;
        let timeout = setTimeout(() => {
            fetching.pop()
            clearTimeout(timeout)
        }, 1000);
        switch(true)
        {
            case refinedData.object.title === 'companyReciept':
                queryable[0].innerHTML = ''
                const newData = refinedData.object.content.data;
                for(let i = 0; i < Object.keys(newData).length; i++)
                {
                    const element1 = document.createElement('div');
                    let switchBol1 = false
                    element1.classList.add('blocks')
                    element1.classList.add('icon');
                    const element2 = document.createElement('div');
                    element2.classList.add('dummy');
                    element2.classList.add(`dummy${i}`);
                    queryable[0].appendChild(element1)
                    queryable[0].appendChild(element2);
                    element2.style.transition = 'all linear .5s'
                    element1.addEventListener('click', e =>{
                        switchBol1 = switchBol1 === false ? true : false;
                        switch(true)
                        {
                            case switchBol1 :
                                element2.style.minHeight = '300px';
                            break;
                            case !switchBol1:
                                element2.style.minHeight = '0px';
                        }
                    })

                    createElems(element2)
                    function createElems(element)
                    {
                        const p = document.createElement('p')
                        p.innerHTML = `organisation name : ${newData[`${Object.keys(newData)[i]}`].OrganisationName}`;
                        element.appendChild(p)
                        const displayElem = document.createElement('div');
                        displayElem.classList.add('displayElem');
                        let bin = newData[`${Object.keys(newData)[i]}`].reciept === undefined ? '' : newData[`${Object.keys(newData)[i]}`].reciept;
                        displayElem.style.background = `url(${bin})`
                        element.appendChild(displayElem);
                        const download = document.createElement('a');
                        download.href = bin;
                        download.download = `${newData[`${Object.keys(newData)[i]}`].OrganisationName}_reciept`;
                        download.textContent = 'download'
                        element.appendChild(download)
                    }
                }
            break;
            case refinedData.object.title === 'playersInfo':
                const main = refinedData.object.content.data;
                console.log(main)
                queryable[2].innerHTML = ''
                for(let i = 0 ; i < Object.keys(main).length; i++)
                {
                    let contentData = main[`${Object.keys(main)[i]}`]
                    const elem1 = document.createElement('div');
                    const elem2 = document.createElement('div');
                    elem2.style.transition = 'all linear .5s'
                    let switchBol = false
                    elem2.classList.add('dummy');
                    elem2.classList.add(`dummy${i}`)
                    elem1.classList.add('blocks');
                    elem1.classList.add('icon')
                    queryable[2].appendChild(elem1)
                    queryable[2].appendChild(elem2);
                    elem1.addEventListener('click', e =>{
                        switchBol = switchBol === false ? true : false;
                        switch(true)
                        {
                            case switchBol :
                                elem2.style.minHeight = '300px';
                            break;
                            case !switchBol:
                                elem2.style.minHeight = '0px';
                        }
                    })
                    appendData(elem2,contentData)
                    
                }
                function appendData(element,contentData)
                {
                    const order = ['organisationName','email','proposedTeamName','proposedJersyColor','teamCoach']
                    for(let i = 0; i < order.length; i++)
                    {
                        const p = document.createElement('p');
                        p.style.marginTop = '10px'
                        element.appendChild(p)
                        switch(true)
                        {
                            case i === 0:
                                p.innerHTML = `organisation name : ${contentData.name}`;
                            break;
                            case i === 1:
                                p.innerHTML = `organisation Email : ${contentData.Email}`;
                            break;
                            case i === 2:
                                p.innerHTML = `proposed team name : ${contentData.ProposedTeamName}`;
                            break;
                            case i === 3:
                                p.innerHTML = `proposed jersey colour : ${contentData.proposedJerseycolour}`;
                            break;
                            case i === 4:
                                p.innerHTML = `team coach : ${contentData.TeamCoach}`
                        }
                    }
                    for(let j = 0; j < Object.keys(contentData.players).length; j++)
                    {
                        const div = document.createElement('div');//<span></span>
                        div.classList.add('player_sec');
                        div.innerHTML = `player${j+1}: <span>${contentData.players[`player${j+1}`].playerName}</span><span>${contentData.players[`player${j+1}`].playerNumber}</span><span>${contentData.players[`player${j+1}`].playerRole}</span>`;
                        element.appendChild(div)
                    }
                }
            break;
            case refinedData.object.title === 'downloadable':
                queryable[1].innerHTML = ''
                const twoMain = refinedData.object.content.data;
                console.log(twoMain)
                for(let i = 0; i < Object.keys(twoMain).length; i++)
                {
                    const element1 = document.createElement('div');
                    let switchBol1 = false
                    element1.classList.add('blocks')
                    element1.classList.add('icon');
                    const element2 = document.createElement('div');
                    element2.classList.add('dummy');
                    element2.classList.add(`dummy${i}`);
                    queryable[1].appendChild(element1)
                    queryable[1].appendChild(element2);
                    element2.style.transition = 'all linear .5s'
                    element1.addEventListener('click', e =>{
                        switchBol1 = switchBol1 === false ? true : false;
                        switch(true)
                        {
                            case switchBol1 :
                                element2.style.minHeight = '300px';
                            break;
                            case !switchBol1:
                                element2.style.minHeight = '0px';
                        }
                    })

                    createMini(element2)
                    function createMini(element)
                    {
                        const p = document.createElement('p');
                        p.innerHTML = `organisation name : ${twoMain[Object.keys(twoMain)[i]]['organisationName']}`;
                        element1.innerHTML = twoMain[Object.keys(twoMain)[i]]['organisationName']
                        element.appendChild(p);
                        let check = true
                        let nxt = twoMain[Object.keys(twoMain)[i]]['reciept'] === undefined ? '':twoMain[Object.keys(twoMain)[i]]['reciept'];
                        switch(true)
                        {
                            case nxt === '':
                                const nullWindow = document.createElement('div');
                                const nonText = document.createElement('p');
                                nonText.textContent = 'no data available'
                                nullWindow.classList.add('displayElem');
                                element.appendChild(nullWindow);
                                element.appendChild(nonText);
                            break;
                            default:
                                for(x in nxt){
                                    switch(true)
                                    {
                                        case typeof nxt[`${x}`] === 'object':
                                            createDisplayNDownloadMedium(nxt[`${x}`][0],'merged')
                                        break;
                                        default:
                                            createDisplayNDownloadMedium(nxt[`${x}`],'player')
                                    }
                                }
                        }
                        function createDisplayNDownloadMedium(tdata,str)
                        {
                            const displayWindow = document.createElement('div');
                            const aLink = document.createElement('a');
                            aLink.href = tdata;
                            aLink.download = `${str}${Number(Object.keys(nxt).indexOf(x))+1}`
                            aLink.innerHTML = `${svgDownload}`
                            displayWindow.classList.add('displayElem');
                            element.appendChild(displayWindow);
                            element.appendChild(aLink);
                            displayWindow.style.backgroundImage = `url(${tdata})`;
                        }
                        
                    }
                }
        }
    })  


})

function renderStyle(idx)
{
    welcomePage.style.display = 'none'
    queryable.forEach((param,index) =>{
        switch(true)
        {
            case idx === index:
                param.style.display = 'flex';
            break;
            default:
                param.style.display = 'none';
        }
    })
}