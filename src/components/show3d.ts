import configurations1 from "../products.json";
import { setupViewer } from "./viewer/Viewer";
import ProductConfig from "./product/ProductConfig";

export default function show3d() {
  const show3dComponent = document.getElementById("canvas-div") as HTMLElement;

  const canvas = show3dComponent.querySelector("#webGI-canvas") as HTMLCanvasElement;
  setupViewer(canvas);

  const closeButton = show3dComponent.querySelector(".close-button") as HTMLElement;
  closeButton.addEventListener("click", () => {
    show3dComponent.style.visibility = "hidden";
  });
  configurations1.forEach((element) => {
    const productConfig = ProductConfig(element.variants, element.stone_configs);
    document.getElementById("ProductConfig")?.appendChild(productConfig!);
  });
  const close = document.getElementById("CloseProduct") as HTMLElement;

  close.addEventListener("click", () => {
    document.getElementById("ProductOptions")!.style.display = "none";
    document.getElementById("CloseProduct")!.style.display = "none";
    document.getElementById("details")!.style.display = "none";
  });

  return show3dComponent;
}
