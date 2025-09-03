

document.getElementById("btn2").addEventListener("click",(e)=>{
 const url="https://jsonplaceholder.typicode.com/posts";

fetch(url).then(res=>res.json()).then(data=>post(data));

function post(item){
    item.map(x=>console.log(x))
}
})
