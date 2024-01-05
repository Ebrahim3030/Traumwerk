import { MaterialPresetPlugin } from "../viewer/MaterialPresetPlugin";
import DiamondDetails from "./DiamondDetails";

export default function StonesOptiones(image: string, categoryName: string, name: string, details: any[]) {
  let temp = document.createElement("template");
  const html = /*html*/ `<div style="cursor:pointer; display:flex; align-items: center;
    justify-content: center; flex-direction:column; row-gap:10px; padding:5px 2px;
     border-radius: 20px;width:110px;color:#777777 "  >
    
    <img src="./${image}"/>
    <div ">
    ${name}
    </div>
    
    
    
     
        
    </div>`;
  const trimmedHtml = html.trim();
  temp.innerHTML = trimmedHtml;
  const StonesOptiones = temp.content.firstElementChild as HTMLElement;

  StonesOptiones.addEventListener("click", () => {
    handleStonesOptionesClick(StonesOptiones, categoryName, name);
    renderStoneDetails(details);
  });

  return StonesOptiones;
}

let currentSelectedStonesOptiones: HTMLElement | null = null;

function handleStonesOptionesClick(clickedStonesOptiones: HTMLElement, categoryName: string, name: string) {
  if (currentSelectedStonesOptiones) {
    currentSelectedStonesOptiones.style.color = "#777777";
    currentSelectedStonesOptiones.style.boxShadow = "none";
  }

  clickedStonesOptiones.style.color = "black";
 
  ((window as any).materialPresetsPlugin as MaterialPresetPlugin).apply(categoryName, getMaterialUrl(name));

  currentSelectedStonesOptiones = clickedStonesOptiones;
}

function getMaterialUrl(name: string) {
  switch (name) {
    case "Ruby":
      return "/materials/gem/ruby-1.dmat";
    case "Diamond":
      return "/materials/gem/diamond-white-1.dmat";
    case "Yellow Sapphire":
      return "/materials/gem/sapphire-yellow.dmat";
    case "Emerland":
      return "/materials/gem/emerald-1.dmat";
    case "Sapphire":
      return "/materials/gem/sapphire-1.dmat";
  }

  return "";
}

function renderStoneDetails(details: any[]) {
  const detailsContainer = document.getElementById("details")!;
  detailsContainer.innerHTML = "";
  detailsContainer.style.display = "flex";

  details.forEach((detail) => {
    const detailElement = DiamondDetails(
      detail.scale,
      detail.colour,
      detail.clarity,
      detail.cut,
      detail.polish,
      detail.symmetry
    );
    detailsContainer.appendChild(detailElement);
  });
}
