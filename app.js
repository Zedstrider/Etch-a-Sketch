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

const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    const input=prompt("Enter size(Below 100)");
    gridcontainer.replaceChildren();
    const size=Number(input)
    for(let i=1;i<size*size;i++)
{
const griditem=document.createElement("div");
griditem.classList.add("grid-item")
gridcontainer.appendChild(griditem)
}
})




