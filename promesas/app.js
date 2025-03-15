// --------------------------------------------------------------
    // operacion sincrona
// este tipo de operacion  es una operacion sincronica, 
// lo que significa que se va ejecutando de arriba para abajo, linea 
// por linea 

// let data= [
//     {
//         id: 1,
//         name: 'john',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'jande',
//         age: 21
//     },
//     {
//         id: 3,
//         name: 'joe',
//         age: 22
//     }
// ]


// function getData(){
//     return data;
// }

// let response = getData();


// console.log(response);

// --------------------------------------------------------------
            // operacion asincorna
// para hacer una consulta a nuestra data se va a demorar unos
// mili segundos, la funcion no va a detenerse esperando que tenga 
// una respuesta sino que de frente va a seguir con la siguiente linea


// let data1= [
//     {
//         id: 1,
//         name: 'john',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'jande',
//         age: 21
//     },
//     {
//         id: 3,
//         name: 'joe',
//         age: 22
//     }
// ]


// function getData(){
//     setTimeout(function(){
//         return data1;
//     }, 2000);
// }

// let response1 = getData();


// console.log(response1);

// --------------------------------------------------------------
// promesas 


// let data2= [
//     {
//         id: 1,
//         name: 'john',
//         age: 20
//     },
//     {
//         id: 2,
//         name: 'jande',
//         age: 21
//     },
//     {
//         id: 3,
//         name: 'joe',
//         age: 22
//     }
// ]


// function getData(){

//     return new Promise((resolve, reject) => {
//         setTimeout(function(){
//             if(false){
//                 resolve(data2);
//             } else {
//                 reject('Error: se callo la api ');
//             }
//         }, 2000);
//     });
// }

// let response2 = getData();

// response2.then((data2) =>{
//     console.log(data2);
// }).catch((error) => {
//     console.log(error);
// });


// console.log(response2);
// console.log('continua el programa');
// --------------------------------------------------------------
// Async/Await 



let data3= [
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

    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(true){
                resolve(data3);
            } else {
                reject('Error: se callo la api ');
            }
        }, 2000);
    });
}

async function fetchData() {
    try{
        let response = await getData();
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

fetchData();

// console.log(response2);
console.log('continua el programa');




