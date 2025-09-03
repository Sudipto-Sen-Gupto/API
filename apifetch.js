
document.getElementById("btn").addEventListener("click",(e)=>{

    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url).then(res=>res.json()).then(data=>display(data));
})

const display=(item)=>{
     
    const order=document.getElementById("order");
    order.innerText="";
    order.style.display="grid"
    order.style.gap="20px"
        order.style.gridTemplateColumns="repeat(3,1fr)"
    item.map(x=>{
        const title=document.createElement("li");
        title.style.backgroundColor="Red";
        title.style.color="White";
        title.style.marginTop="22px"
        title.style.fontSize="30px";
        title.style.padding="10px"
       
        title.innerText=x.title;
        order.append(title)
         
    })
}