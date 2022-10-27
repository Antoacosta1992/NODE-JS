//Hace referencia de que voy a tener un callback, dentro de otro y asi
//sucesivamente.

const employees = [
    {
        id: 1,
        name: 'Antonela'
    },
    {
        id: 2,
        name: 'Romina'
    },
    {
        id: 3,
        name: 'Andrea'
    }
]; 

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    },
]; 

//Creo una funcion que me permita traer la informacion de un empleado.

const getEmployee = (id, callback ) => {
    const employee = employees.find(e => e.id === id)?.name
//Una forma de saber si el empleando existe o no utilizando if.
    if ( employee)  { 
    callback(null, employee);
    } else {
        callback( `Employee with id ${ id } not exist`);
    }
}

const getSalary = ( id, callback ) => {
    const salary = salaries.find( s => s.id === id )?.salary;
 
    if ( salary ) { 
        callback (null, salary);
    } else {
        callback( `Not exist salary for id ${ id }`);
    }
}

const id = 3;

getEmployee( id, ( err, employee) => {

    if ( err ) {
        console.log('ERROR!');
        return console.log(err);
    }

    getSalary(id, (err, salary) => {

        if (err) {
            return console.log(err);
        }
        console.log('The employee:', employee, 'has a salary of:', salary)
    
    })

})

