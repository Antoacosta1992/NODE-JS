
const deadpool = {
    name : 'Wade',
    lastname : 'Winston',
    power : 'Regeneración',
    getName (){
        return` ${ this.name} ${ this.lastname} ${this.power}` 
    }

}
 
//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

//*DESESTRUCTURACION*( puedo desestructurar los objetos dentro de los argumentos)
function imprimeHeroe ({name, lastname, power, age= 0}){
// *si lo corro la edad sale como undefined pero si 
//*le agrego edad = 0 se va a imprimir ese dato.
    n = 'Antonela';
    console.log(name,lastname,power,age);
}


//imprimeHeroe( deadpool );
const heroes = ['Deadpool', 'Superman', 'Batman'];
//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];
const [h1,h2,h3] = heroes;

console.log(h1,h2,h3);