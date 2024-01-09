export default function Diamond() {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="display:flex; column-gap:30px;color:#52807E;
    font-family: 'Neue Haas Grotesk Display Pro', sans-serif;  justify-content: center;
    align-items: center;">
     
     <div id="naturalOption" style="  cursor: pointer; font-size:18px;margin-left:40px">
         Natural
     </div>
     <div id="labGrownOption" style="width:100px;  cursor: pointer; font-size:18px;">
         Lab-Grown
     </div>
    
    </div>`;
    const trimmedHtml = html.trim();
    temp.innerHTML = trimmedHtml;
    const diamondDiv = temp.content.firstElementChild as HTMLElement;

    const naturalOption = diamondDiv.querySelector('#naturalOption') as HTMLElement;
    const labGrownOption = diamondDiv.querySelector('#labGrownOption') as HTMLElement;

 
    naturalOption.addEventListener('click', () => {
        naturalOption.style.textDecoration = 'underline';
        labGrownOption.style.textDecoration = 'none';
    });

    labGrownOption.addEventListener('click', () => {
        labGrownOption.style.textDecoration = 'underline';
        naturalOption.style.textDecoration = 'none';
    });
    diamondDiv.appendChild(Close())

    return diamondDiv;
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