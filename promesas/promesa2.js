            // operacion asincorna
// para hacer una consulta a nuestra data se va a demorar unos
// mili segundos, la funcion no va a detenerse esperando que tenga 
// una respuesta sino que de frente va a seguir con la siguiente linea


let data1= [
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
    setTimeout(function(){
        return data1;
    }, 2000);
}

let response1 = getData();


console.log(response1, 'ejemplo 2');