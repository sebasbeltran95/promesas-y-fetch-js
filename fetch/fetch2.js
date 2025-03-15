// fetch parte 2
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json();
}).then((data) =>{
    console.log(data);
});