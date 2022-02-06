
function saludar(nombre) {
    // console.log( arguments );
    // console.log('Hola ' + nombre);

    return [1, 2];

    console.log( 'Código después del return' );
}

const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}



const retornoSaludar = saludar( 'Luis', 28, false, 'Perú');

// saludar2( 'Luis' );

// saludarFlecha();
// saludarFlecha2(' Mary ');

function sumar(a, b) {
    return a + b;
}

// const sumar2 = (a, b) => {
//     return a + b;
// }
const sumar2 = (a, b) => a + b;

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();


console.log( getAleatorio2() );
