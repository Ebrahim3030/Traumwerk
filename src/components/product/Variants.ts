import Alloys from "./Alloys";

export default function Variants(image: string, alloys: any[]) {
  let temp = document.createElement("template");
  const html = /*html*/ `
    <div style="cursor:pointer; margin:0 12px">
      <img src="./${image}" />
    </div>`;
  temp.innerHTML = html.trim();
  const variantButton = temp.content.firstElementChild as HTMLElement;

  variantButton.addEventListener('click', () => {
    document.getElementById('ProductOptions')!.style.display="flex"
    document.getElementById("CloseProduct")!.style.display="block"
    document.getElementById('details')!.style.display="none"
    

 
    renderAlloys(alloys);
   

  });



  

 
  
  function renderAlloys(alloys: any[]) {
    const alloyContainer = document.getElementById("ProductOptions")!;
    alloyContainer.innerHTML=""

    alloys.forEach((alloy) => {
      const alloyElement = Alloys(alloy.image,alloy.name);
      
      alloyContainer.appendChild(alloyElement);
    });
  }

  return variantButton;
}