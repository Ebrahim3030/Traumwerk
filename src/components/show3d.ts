import { setupViewer } from "./Viewer";


export default function show3d() {
    let temp = document.createElement("template");
    const html = /*html*/ `
      <div class="canvas-div">
      <canvas id='webGI-canvas'>

      </canvas>
       <div id='canvasUI'>
       <button class="close-button">EXIT</button>
       </div>
        
      </div>`;
    temp.innerHTML = html;

    
  
    const show3dComponent = temp.content.firstElementChild as HTMLElement;
    const canvas= show3dComponent.querySelector('#webGI-canvas') as HTMLCanvasElement
    setupViewer(canvas)
  //close the 3d div
    const closeButton = show3dComponent.querySelector('.close-button') as HTMLElement;
    closeButton.addEventListener('click', () => {
      
      document.body.removeChild(show3dComponent);
    });
  
    return show3dComponent;
  }