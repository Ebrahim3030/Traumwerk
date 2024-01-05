export default function Alloys(categoryName: string, image: string, name: string) {
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

  AlloysButton.addEventListener("click", () => {
    handleClickAlloy(AlloysButton, categoryName, name);
  });

  return AlloysButton;
}

let currentSelectedAlloys: HTMLElement | null = null;

function handleClickAlloy(clickedAlloy: HTMLElement, categoryName: string, name: string) {
  if (currentSelectedAlloys) {
    currentSelectedAlloys.style.color = "#777777";
  }

  (window as any).materialPresetsPlugin.apply(categoryName, getMaterialUrl(name));
  clickedAlloy.style.color = "black";

  currentSelectedAlloys = clickedAlloy;
}

function getMaterialUrl(name: string) {
  switch (name) {
    case "Yellow Gold":
      return "/materials/metal/gold-yellow-750.pmat";
    case "White Gold":
      return "/materials/metal/gold-white-750.pmat";
    case "Rose Gold":
      return "/materials/metal/gold-rose-750.pmat";
  }

  return "";
}
