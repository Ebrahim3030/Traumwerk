import Alloys from "./Alloys";

export default function Variants(name: string, image: string, alloys: any[]) {
  let temp = document.createElement("template");
  const html = /*html*/ `
    <div style="cursor:pointer; margin:0 12px">
      <img src="./${image}" />
    </div>`;
  temp.innerHTML = html.trim();
  const variantButton = temp.content.firstElementChild as HTMLElement;

  variantButton.addEventListener("click", () => {
    document.getElementById("ProductOptions")!.style.display = "flex";
    // document.getElementById("CloseProduct")!.style.display = "block";
    document.getElementById("details")!.style.display = "none";

    renderAlloys(name, alloys);
  });

  function renderAlloys(name: string, alloys: any[]) {
    const alloyContainer = document.getElementById("ProductOptions")!;
    alloyContainer.innerHTML = "";

    alloys.forEach((alloy) => {
      const alloyElement = Alloys(name, alloy.image, alloy.name);

      alloyContainer.appendChild(alloyElement);
      
    });
    alloyContainer.appendChild(Close())




  }

  return variantButton;
}
export  function Close() {
  let temp = document.createElement("template");
  const html = /*html*/ `
  <img id="CloseProduct"  src="./Union (4).png"/>`;
  temp.innerHTML = html.trim();
  const closeButton = temp.content.firstElementChild as HTMLElement;

 closeButton.addEventListener('click',()=>{
  document.getElementById("ProductOptions")!.style.display = "none";
 

 })

  return closeButton;
}
