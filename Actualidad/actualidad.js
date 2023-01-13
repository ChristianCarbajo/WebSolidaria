
let actualPosition = 0
let botonRetroceder = document.querySelector('.actualidad-buttonL');
let botonAvanzar = document.querySelector('.actualidad-buttonR');
let botonRetroceder2 = document.querySelector('.actualidad-buttonL2');
let botonAvanzar2 = document.querySelector('.actualidad-buttonR2');
let botonRetroceder3 = document.querySelector('.actualidad-buttonL3');
let botonAvanzar3 = document.querySelector('.actualidad-buttonR3');
let imagen1 = document.querySelector('#Revista1');
let imagen2 = document.querySelector('#Revista2');
let imagen3 = document.querySelector('#Revista3');
const IMAGENESSoraya = [
    'REVISTA/12252022-Soraya-asesinada/1.png',
    'REVISTA/12252022-Soraya-asesinada/2.png',
    'REVISTA/12252022-Soraya-asesinada/3.png',
    'REVISTA/12252022-Soraya-asesinada/4.png'
];
const IMAGENES25N = [
    'REVISTA/11282022-25N-Correos-Pirolisis/1.png',
    'REVISTA/11282022-25N-Correos-Pirolisis/2.png',
    'REVISTA/11282022-25N-Correos-Pirolisis/3.png',
    'REVISTA/11282022-25N-Correos-Pirolisis/4.png'
];
const IMAGENESVentanielles = [
    'REVISTA/11132022-Ventanielles-paro-patronal/1.png',
    'REVISTA/11132022-Ventanielles-paro-patronal/2.png',
    'REVISTA/11132022-Ventanielles-paro-patronal/3.png',
    'REVISTA/11132022-Ventanielles-paro-patronal/4.png'
];
//-------------------
    function pasarFoto() {
        if(actualPosition >= IMAGENESSoraya.length - 1) {
            actualPosition = 0;
        } else {
            actualPosition++;
        }
        renderizarImagen();
    }


    function retrocederFoto() {
        if(actualPosition <= 0) {
            actualPosition = IMAGENESSoraya.length - 1;
        } else {
            actualPosition--;
        }
        renderizarImagen();
    }  

    function renderizarImagen () {
        imagen1.src = `${IMAGENESSoraya[actualPosition]}`;
    }
    //-------------------------
    function pasarFoto2() {
        if(actualPosition >= IMAGENES25N.length - 1) {
            actualPosition = 0;
        } else {
            actualPosition++;
        }
        renderizarImagen2();
    }


    function retrocederFoto2() {
        if(actualPosition <= 0) {
            actualPosition = IMAGENES25N.length - 1;
        } else {
            actualPosition--;
        }
        renderizarImagen2();
    }  

    function renderizarImagen2 () {
        imagen2.src = `${IMAGENES25N[actualPosition]}`;
    }
    //-----------------------
    function pasarFoto3() {
        if(actualPosition >= IMAGENESVentanielles.length - 1) {
            actualPosition = 0;
        } else {
            actualPosition++;
        }
        renderizarImagen3();
    }


    function retrocederFoto3() {
        if(actualPosition <= 0) {
            actualPosition = IMAGENESVentanielles.length - 1;
        } else {
            actualPosition--;
        }
        renderizarImagen3();
    }  

    function renderizarImagen3 () {
        imagen3.src = `${IMAGENESVentanielles[actualPosition]}`;
    }
    botonAvanzar.addEventListener('click', pasarFoto);
    botonRetroceder.addEventListener('click', retrocederFoto);
    botonAvanzar2.addEventListener('click', pasarFoto2);
    botonRetroceder2.addEventListener('click', retrocederFoto2);
    botonAvanzar3.addEventListener('click', pasarFoto3);
    botonRetroceder3.addEventListener('click', retrocederFoto3);
    renderizarImagen()
    renderizarImagen2()
    renderizarImagen3()


