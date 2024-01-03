import show3d from "./show3d"
export default function Option(name: string, image: string,type:string) {
    let temp = document.createElement("template");
    const html = /*html*/ `<button class="option-button" >
        <img src="/${image}" style="width: 100%; height: 70%; object-fit: cover; border-radius: 12px;">
        <span style="color: black; font-size: 8px; margin-top: 3px;">${name}</span>
        <span style="color: black; font-size: 8px; margin-top: 3px;">${type}</span>
        
    </button>`;
    html.trim();
    temp.innerHTML = html;
    const optionButton = temp.content.firstElementChild as HTMLElement;


    // poping up the 3d div when button clicked
    optionButton.addEventListener('click', () => {
    
        document.getElementById("canvas-div")!.style.visibility="visible"
      
      });
      

    

    return optionButton
} 