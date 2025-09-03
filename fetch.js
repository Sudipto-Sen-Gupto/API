
document.getElementById("btn").addEventListener("click",(e)=>{
    e.preventDefault();

   fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(data=>console.log(data))

})

// const file=fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(data=>console.log(data));
// console.log(file);