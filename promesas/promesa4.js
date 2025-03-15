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
console.log('continua el programa ejemplo 4');