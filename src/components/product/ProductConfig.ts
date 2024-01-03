import Variants from "./Variants";
import StoneConfig from "./StoneConfig";
import Diamond from "./Diamond";
export default function ProductConfig(variants:any[]=[],stones:any[]=[]) {
    let temp = document.createElement("template");
    const html = /*html*/ `<div  id='ProductConfig-button' >
   
    </div>`;
    html.trim();
    temp.innerHTML = html;
    const productsButton= temp.content.firstElementChild as HTMLElement;


    renderVariants(variants);
    renderStones(stones)
    renderDiamonds();
  
    function renderVariants(variants: any[]) {


       
        const variantsContainer = document.getElementById('variant')!;
        
         
          variants.forEach((variant: any) => {
            const variantElement = Variants(variant.image,variant.alloys);
            variantsContainer.appendChild(variantElement);
         

        } )
      }
      function renderDiamonds() {


       
    const DiamondsContainer = document.getElementById('diamond')!;
      DiamondsContainer.addEventListener('click',()=>{
       const sij= document.getElementById("ProductOptions")!
       document.getElementById("CloseProduct")!.style.display="block"
     
       
       sij.style.display="flex"
       sij.innerHTML=""
        const diamondDiv=Diamond()
        sij.appendChild(diamondDiv)

          })
         
         

       
      }

      function renderStones(stones: any[]) {
       
        const stonesContainer=document.getElementById('stones')!;


        stones.forEach((stone:any)=>{
            const stoneElement=StoneConfig(stone.image,stone.stonesOptions)
            stonesContainer.appendChild(stoneElement)
        })
    }
     
    

    return productsButton
} 