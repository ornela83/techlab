document.addEventListener('DOMContentLoaded', function(){
        iniciarApp()
});
function iniciarApp(){
    //Fijar Navegación
    navegacionFija();
    //Activa el Menú
    eventListeners();
    //Resalta el link actual que se presiona
    activeLink()
    
}
function navegacionFija(){
    const barra = document.querySelector('.barra');
    const principal = document.querySelector('.principal')
    const nav = document.querySelector('.nav-principal')
    window.addEventListener('scroll', function(){
        //console.log(principal.getBoundingClientRect());

        if ( principal.getBoundingClientRect().bottom < 0 ){
            barra.classList.add('fijo');
            nav.classList.remove('contenedor')
        }else{
            barra.classList.remove('fijo');
            nav.classList.add('contenedor')
        }
    });
}
function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', ()=>{
        const navegacion = document.querySelector('.navegacion');
        //console.log(navegacion)
        navegacion.classList.toggle('mostrar');
    });
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



