const element = document.querySelectorAll('.list__button--click');

element.addEventListener('click', function() {
    alert();
})

// elementa.addEventListener('click', function() {
// listElements.forEach(listElement => {
    //         listElement.classList.toogle('arrow');

    //         let height = 0;
    //         let menu = listElement.nextElementSibling;
    //         if(menu.clientHeight == "0"){
    //             height=menu.scrollHeight;
    //         }

    //         menu.style.height = '${height}px';
            
    // })
// });


const element = document.querySelectorAll('.list__button--click');


for (let i = 0; i < element.lenght; i++) {
    element[i].addEventListener('click', function(){
        const element = this.nextElementSibling;
        const height = element.scrollHeight;
        
        if(element.classList.contains("despegar")){
            
        }
        element.style.height = height + "px;"
    })  
    
}




