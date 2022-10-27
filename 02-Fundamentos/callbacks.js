//SetTimepout es una funcion que ejecuta un callback, es decir
//una funcion en cierto momento del tiempo.
//setTimeout (arg1.arg2);


//setTimeout( function() {
  //  console.log('Hola Mundo');
//} , 1000);

//Si lo quiero hacer con una funcion => lo cambio por function y obtengo 
//el mismo resultado.

const getUsurnameByID = (id, callback) => {
    
    const username = {
        id,
        name: 'Antonela'
    }

    setTimeout( () => {
    callback(username)
}, 1500 ) 
}

getUsurnameByID ( 10, (username) =>{
    console.log (username.id);
    console.log(username.name.toUpperCase() );
});
//Los CALLBACKs no son más que una funcion que se mandan como argumento.