import configurations1 from "../products.json";
import { setupViewer } from "./viewer/Viewer";
import ProductConfig from "./product/ProductConfig";
import { Scene } from "webgi";
import { MaterialPresetPlugin } from "./viewer/MaterialPresetPlugin";
import { getDiamondUrl, getMaterialUrl } from "./viewer/Shared";

export default async function show3d() {
  const show3dComponent = document.getElementById("canvas-div") as HTMLElement;

  const canvas = show3dComponent.querySelector("#webGI-canvas") as HTMLCanvasElement;
  if(!(window as any).webgiViewer){
    await setupViewer(canvas);

    ((window as any).webgiViewer.scene as Scene).addEventListener('addSceneObject',()=>{
   

      const a =configurations1[0].variants[0].name
      const b= configurations1[0].variants[0].alloys[0].name;
      ((window as any).materialPresetsPlugin as MaterialPresetPlugin).apply(a, getMaterialUrl(b));
      const c =configurations1[0].stone_configs[0].name
      const d= configurations1[0].stone_configs[0].stonesOptions[0].name;
      ((window as any).materialPresetsPlugin as MaterialPresetPlugin).apply(c, getDiamondUrl(d));
      const e =configurations1[0].stone_configs[1].name;
     
      ((window as any).materialPresetsPlugin as MaterialPresetPlugin).apply(e, getDiamondUrl(d));


    })
  }

  (window as any).webgiViewer.load("./TR109.glb");
 

  const closeButton = show3dComponent.querySelector(".close-button") as HTMLElement;
  closeButton.addEventListener("click", () => {
    document.getElementById("variant")!.innerHTML=""
    document.getElementById("stones")!.innerHTML=""
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
