document.addEventListener('DOMContentLoaded', function(){

        eventListeners();

});

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', ()=>{
        const navegacion = document.querySelector('.navegacion');
        //console.log(navegacion)
        navegacion.classList.toggle('mostrar');
    })
};

