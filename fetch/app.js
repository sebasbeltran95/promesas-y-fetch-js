// -------------------------------------------------------------------
// fetch parte 1 
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) =>{
    // response.json().then((data) =>{
    //     console.log(data);
    // });
// });
// -------------------------------------------------------------------
// fetch parte 2
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) =>{
//     return response.json();
// }).then((data) =>{
//     console.log(data);
// });
// -------------------------------------------------------------------
// fetch parte 2
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) =>{
    console.log(data);
});











