// let listElements = document.querySelector('#list__button--clik');

// listElements.forEach(listElement => {
// alert()
// //     listElement.addEventListener('click', () =>{
// //     //         // listElement.classList.toogle('arrow');

// //     //         // let height = 0;
// //     //         // let menu = listElement.nextElementSibling;
// //     //         // if(menu.clientHeight == "0"){
// //     //         //     height=menu.scrollHeight;
// //     //         // }

// //     //         // menu.style.height = '${height}px';
            
// //     })
// });


const element1 = document.querySelectorAll('.list__button--click1')[0];

element1.addEventListener('click', function(){
    element1.classList.toggle('arrow');

    let height = 0;
    let menu = element1.nextElementSibling;

    if (menu.clientHeight == 0 ) {
        height = menu.scrollHeight;        
    }
    menu.style.height = "99px";
    if (menu.clientHeight > 0){
        menu.style.height = "0px"; 
    }
})


// const element1 = document.querySelectorAll('.list__button--click1')[0];

// element1.addEventListener('click', function(){
//     const element = this.nextElementSibling;
//         const height = element.scrollHeight;
        
//         if(element.classList.toggle('arrow')){
            
//         }
//         element.style.height = height + "px;"
//         alert()
// })

    
const element2 = document.querySelectorAll('.list__button--click2')[0];

element2.addEventListener('click', function(){
    element2.classList.toggle('arrow');

    let height = 0;
    let menu = element2.nextElementSibling;

    if (menu.clientHeight == 0 ) {
        height = menu.scrollHeight;        
    }
    menu.style.height = "148px";
    if (menu.clientHeight > 0){
        menu.style.height = "0px"; 
    }
})