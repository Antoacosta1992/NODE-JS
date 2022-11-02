//Raíz de nuestro proyecto.

const { createdFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();

createdFile( argv.b, argv.l, argv.h )
.then(filename => console.log(filename.rainbow,'created'))
.catch ( err => console.log(err));


//console.clear();

// const [ , , arg3 = 'base 5'] = process.argv;
// const [, base= 5] = arg3.split('=');
//para mostrar siempre limpia la consola ejemplo:
// console.log ('- - - - - - - - - - - - - - ')
// console.log ('- - - - - - - Table del 5 - - - - - ')
// console.log ('- - - - - - - - - - - - - - ')

//const base = 5; 


