
const click=document.getElementById("btn");
click.addEventListener("click",()=>{
        const url="https://jsonplaceholder.typicode.com/comments";
        fetch(url).then(res=>res.json()).then(data=>element(data));
})

const element=(item)=>{
    const Div=document.getElementById("divi");
       Div.innerHTML=""
    item.map(x=>{
        const newChild=document.createElement("div");
        newChild.innerHTML=`
        <h1>${x.name}</h1>
        <p>${x.email.endsWith(".com")===true?`<i class="fa-solid fa-check"></i>`:`<i class="fa-solid fa-xmark"></i>`}</p>
        <p>${x.email}</p>`;
    
    Div.append(newChild); 
      
    })
}