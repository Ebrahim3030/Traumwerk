import StonesOptions from "./StonesOptions";

export default function StoneConfig(image:string, stonesOptions:any[]) {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="cursor:pointer;margin:0 12px"  >
    
    <img src="./${image}"/>
    
    
     
        
    </div>`;
    const trimmedHtml = html.trim();
    temp.innerHTML = trimmedHtml;
    const stonesButton = temp.content.firstElementChild as HTMLElement;

    stonesButton.addEventListener("click",()=>{
        document.getElementById('ProductOptions')!.style.display="flex"
        document.getElementById("CloseProduct")!.style.display="block"
        document.getElementById('details')!.style.display="none"
       
        renderStonesOptions(stonesOptions)

    })
    
    function renderStonesOptions(alloys:any[]){
        const alloyContainer=document.getElementById("ProductOptions")!;
        alloyContainer.innerHTML=''

        alloys.forEach(alloy=>{
            const alloyElement=StonesOptions(alloy.image,alloy.name,alloy.details);
            alloyContainer.appendChild(alloyElement)
        })

    }

    

    return stonesButton
} 