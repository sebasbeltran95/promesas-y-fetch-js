    // operacion sincrona
// este tipo de operacion  es una operacion sincronica, 
// lo que significa que se va ejecutando de arriba para abajo, linea 
// por linea 

let data= [
    {
        id: 1,
        name: 'john',
        age: 20
    },
    {
        id: 2,
        name: 'jande',
        age: 21
    },
    {
        id: 3,
        name: 'joe',
        age: 22
    }
]


function getData(){
    return data;
}

let response = getData();


console.log(response, 'ejemplo 1');