export default function Alloys(image:string,name:string) {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="cursor:pointer; display:flex; align-items: center;
    justify-content: center; flex-direction:column; row-gap:10px;padding:5px 10px;
     border-radius: 20px; margin-right:20px"  >
    
    <img src="./${image}"/>
    <div>
    ${name}
    </div>

    
    
     
        
    </div>`;
    const trimmedHtml = html.trim();
    temp.innerHTML = trimmedHtml;
    const AlloysButton = temp.content.firstElementChild as HTMLElement;


   AlloysButton.addEventListener("click",()=>{
    handleClickAlloy(AlloysButton)

   
   })

   return AlloysButton

    
} 


let currentSelectedAlloys: HTMLElement | null = null;

function handleClickAlloy(clickedAlloy: HTMLElement) {
    if (currentSelectedAlloys) {
        currentSelectedAlloys.style.border = "none";
        currentSelectedAlloys.style.boxShadow = "none";
    }

    clickedAlloy.style.border = "1px solid purple";
    clickedAlloy.style.boxShadow = "0 0 5px rgb(202, 182, 67)";

    currentSelectedAlloys = clickedAlloy;
}