import { getMaterialUrl } from "../viewer/Shared";

export default function Alloys(categoryName: string, image: string, name: string) {
  let temp = document.createElement("template");
  const html = /*html*/ `<div class="alloy">
    <img src="./${image}" class="alloy-image"/>
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
    currentSelectedAlloys.querySelector(".alloy-image")?.classList.remove("rounded-border");
  }

  (window as any).materialPresetsPlugin.apply(categoryName, getMaterialUrl(name));
  clickedAlloy.style.color = "black";
  clickedAlloy.querySelector(".alloy-image")!.classList.add("rounded-border");

  currentSelectedAlloys = clickedAlloy;
}