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


const getEmployee = (id) => {

return new Promise ((resolve, reject) => {

    const employee = employees.find(e => e.id === id)?.name;

     (employee)
      ? resolve (employee)
      : reject (`Not exist employee for id ${id}` );


});

}

const getSalary = () => {
    return new Promise (( resolve, reject) => {

      const salary = salaries.find( s => s.id === id)?.salary;
      (salary)
       ? resolve (salary)
       : reject (`Not exist salary for id ${id}` );
});
}


    const id = 1;

    //getEmployee(id)   
    //.then( employee => console.log(employee) )
    //.catch( err => console.log(err));

    //getSalary(id)   
    //.then( salary => console.log(salary) )
    //.catch( err => console.log(err));

let name; //aca estamos creando una variable solo para almacernar name=employee
//hay una manera más eficiente de hacer.

getEmployee(id)
.then( employee =>{
    name = employee;
    return getSalary (id)
    })
    .then( salary => console.log('The employee:', name, 'has a salary of:', salary))
    .catch(err => console.log( err));
