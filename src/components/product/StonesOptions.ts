import DiamondDetails from "./DiamondDetails";

export default function StonesOptiones(image:string,name:string,details:any[]) {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="cursor:pointer; display:flex; align-items: center;
    justify-content: center; flex-direction:column; row-gap:10px; padding:5px 2px;
     border-radius: 20px; margin-right:5px;width:110px "  >
    
    <img src="./${image}"/>
    <div>
    ${name}
    </div>
    
    
    
     
        
    </div>`;
    const trimmedHtml = html.trim();
    temp.innerHTML = trimmedHtml;
    const StonesOptiones = temp.content.firstElementChild as HTMLElement;



StonesOptiones.addEventListener("click", () => {
    handleStonesOptionesClick(StonesOptiones);
    renderStoneDetails(details);
    
  });

  return StonesOptiones;
}

let currentSelectedStonesOptiones: HTMLElement | null = null;

function handleStonesOptionesClick(clickedStonesOptiones: HTMLElement) {
  
  if (currentSelectedStonesOptiones) {
    currentSelectedStonesOptiones.style.border = "none";
    currentSelectedStonesOptiones.style.boxShadow="none"
  }

 
  clickedStonesOptiones.style.border = "1px solid purple";
  clickedStonesOptiones.style.boxShadow="0 0 5px rgb(202, 182, 67)"

 
  currentSelectedStonesOptiones = clickedStonesOptiones;
}

function renderStoneDetails(details:any[]){
    const detailsContainer=document.getElementById("details")!;
    detailsContainer.innerHTML=""
    detailsContainer.style.display='flex'

    details.forEach(detail=>{
        const detailElement=DiamondDetails(detail.scale,detail.colour,detail.clarity,detail.cut,detail.polish,detail.symmetry);
        detailsContainer.appendChild(detailElement)
    })

}