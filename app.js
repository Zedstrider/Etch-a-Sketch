const gridcontainer=document.querySelector(".container");
for(let i=1;i<257;i++)
{
const griditem=document.createElement("div");
griditem.classList.add("grid-item")
gridcontainer.appendChild(griditem)
}

gridcontainer.addEventListener("mouseover",(event)=>{
    event.target.style.background="blue"
});






