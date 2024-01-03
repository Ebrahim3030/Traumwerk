export default function Diamond() {
    let temp = document.createElement("template");
    const html = /*html*/ `<div style="display:flex; column-gap:45px;">
     
     <div id="naturalOption" style="  cursor: pointer; font-weight:bold; font-size:20px">
         Natural
     </div>
     <div id="labGrownOption" style="  cursor: pointer;font-weight:bold; font-size:20px; margin-right:40px">
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

    return diamondDiv;
}