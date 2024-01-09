import { MaterialPresetPlugin } from "../viewer/MaterialPresetPlugin";
import { getDiamondUrl } from "../viewer/Shared";
import DiamondDetails from "./DiamondDetails";

export default function StonesOptiones(image: string, categoryName: string, name: string, details: any[]) {
  let temp = document.createElement("template");
  const html = /*html*/ `<div class="stones-options" >
    
    <img src="./${image}" class="stones-option-image"/>
    <div>
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
    currentSelectedStonesOptiones.querySelector(".stones-option-image")?.classList.remove("rounded-border");
  }

  clickedStonesOptiones.style.color = "black";
  clickedStonesOptiones.style.boxShadow = "your-shadow-style"; // Add your desired shadow style

  ((window as any).materialPresetsPlugin as MaterialPresetPlugin).apply(categoryName, getDiamondUrl(name));
  clickedStonesOptiones.querySelector(".stones-option-image")?.classList.add("rounded-border");

  currentSelectedStonesOptiones = clickedStonesOptiones;
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
