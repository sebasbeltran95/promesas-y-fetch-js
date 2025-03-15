// fetch parte 3

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) =>{
    console.log(data);
});