
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

//EL ASYNC Y EL AWAIT ES IMPORTANTE EN EL MUNDO DE LAS PROMESAS, EL AWAIT
//LE DICE A JAVASCRIP QUE ESPERE TENER LA RESPUESTA DE PROMISES, CUANDO LA TENGA
//SE LO ASIGNA A DONDE LO NECESITE. EL AWAIIT TIENE QUE ESTAR DENTRO DE UNA FUNCION 
//O METODO ASINCRONO.

const getInfoUsername = async() => {
   try {
    const employee = await getEmployee(id);
    const salary = await getSalary(id);
    
    return `The employee salary : ${employee} is of ${salary}`;
   } catch (error){
    throw error;
   }
}
//El ASYNC LO QUE HACE ES TRANSFORMAR LA FUNCION PARA QUE REGRESA A UNA PROMESA.

const id =3;
getInfoUsername(id)
.then (msg => {
    console.log('TODO BIEN!')
    console.log(msg)
})
.catch ( err => {
    console.log('TODO MAL!')
    console.log (err)
});
