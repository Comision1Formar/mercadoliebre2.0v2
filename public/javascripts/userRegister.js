const qs = function qs(element){
    return document.querySelector(element);
}

window.addEventListener('load',function(){
    console.log('JS vinculado correctamente...')

    let formulario = qs('form#register');

    let elements = formulario.elements

    let inputNombre = qs('#nombre');
    let inputApellido = qs('#apellido');
    let inputEmail = qs('#email');
    let inputPass = qs('#pass');
    let inputPass2 = qs('#pass2');
    let inputFoto = qs('#avatar');

    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    

})