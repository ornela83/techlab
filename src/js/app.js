document.addEventListener('DOMContentLoaded', function(){
        iniciarApp()
});
function iniciarApp(){
    //Activa el Menú
    eventListeners();
    //Resalta el link actual que se presiona
    activeLink()
    
}

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', ()=>{
        const navegacion = document.querySelector('.navegacion');
        //console.log(navegacion)
        navegacion.classList.toggle('mostrar');
    })
};

function activeLink(){
    const currentLocation = location.href;
    const enlaces = document.querySelectorAll('.navegacion a');
    
    enlaces.forEach(enlace=>{
        if(enlace.href === currentLocation){
            enlace.className = 'active'
        }
    })
}



