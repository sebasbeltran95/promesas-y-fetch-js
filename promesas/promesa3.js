// promesas 


let data2= [
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
            if(false){
                resolve(data2);
            } else {
                reject('Error: se callo la api ');
            }
        }, 2000);
    });
}

let response2 = getData();

response2.then((data2) =>{
    console.log(data2);
}).catch((error) => {
    console.log(error);
});


console.log(response2);
console.log('continua el programa ejemplo 3');