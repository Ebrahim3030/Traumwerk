export default function Alloys(image:string,name:string) {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="cursor:pointer; display:flex; align-items: center;
    justify-content: center; flex-direction:column; row-gap:10px;padding:5px 10px;
     border-radius: 20px; margin-right:20px;color:#777777"  >
    
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
        currentSelectedAlloys.style.color = "#777777";
      
    }

    clickedAlloy.style.color = "black";
  

    currentSelectedAlloys = clickedAlloy;
}