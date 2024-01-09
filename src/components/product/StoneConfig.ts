import StonesOptions from "./StonesOptions";

export default function StoneConfig(image: string, name: string, stonesOptions: any[]) {
  let temp = document.createElement("template");
  const html = /*html*/ `<div style="cursor:pointer;margin:0 12px"  >
    
    <img src="./${image}"/>
    
    
     
        
    </div>`;
  const trimmedHtml = html.trim();
  temp.innerHTML = trimmedHtml;
  const stonesButton = temp.content.firstElementChild as HTMLElement;

  stonesButton.addEventListener("click", () => {
    document.getElementById("ProductOptions")!.style.display = "flex";
    // document.getElementById("CloseProduct")!.style.display = "block";
    document.getElementById("details")!.style.display = "none";

    renderStonesOptions(name, stonesOptions);
  });

  function renderStonesOptions(name: string, alloys: any[]) {
    const alloyContainer = document.getElementById("ProductOptions")!;
    alloyContainer.innerHTML = "";

    alloys.forEach((alloy) => {
      const alloyElement = StonesOptions(alloy.image, name, alloy.name, alloy.details);
      alloyContainer.appendChild(alloyElement);
    });

    alloyContainer.appendChild(Close())
  }

  return stonesButton;
}
export  function Close() {
  let temp = document.createElement("template");
  const html = /*html*/ `
  <img id="CloseProduct"  src="./Union (4).png"/>`;
  temp.innerHTML = html.trim();
  const closeButton = temp.content.firstElementChild as HTMLElement;

 closeButton.addEventListener('click',()=>{
  document.getElementById("ProductOptions")!.style.display = "none";
  document.getElementById("details")!.style.display = "none";
 })

  return closeButton;
}
