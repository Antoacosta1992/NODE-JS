const saludar = (nombre) => {
return`Saludos ${nombre}`; //´Saludos' + nombre;
}
//NODE llega, regrista las funciones, importaciones o lo que tengamos.
//Entonces cuando llamemos a este metodo, ya sabe que tiene la referencia de arriba y la ejecuta.
console.log(saludar('Antonela') ); //llamando a la funcion
