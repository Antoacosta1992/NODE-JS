console.log('Inicio de programa');


setTimeout(( ) => {
    console.log('Primer Timeout')
}, 3000);
//Cuánto tiempo quiero que se ejecute la funcion que coloco ahí dentro.

setTimeout(( ) => {
    console.log('Segundo Timeout')
}, 0);

setTimeout(( ) => {
    console.log('Tercer Timeout')
}, 0);

console.log('Fin de programa');