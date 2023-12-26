
export default function show3d() {
    let temp = document.createElement("template");
    const html = /*html*/ `
      <div class="canvas-div">
       
        <button class="close-button">EXIT</button>
      </div>`;
    temp.innerHTML = html;
  
    const show3dComponent = temp.content.firstElementChild as HTMLElement;
  
  //close the 3d div
    const closeButton = show3dComponent.querySelector('.close-button') as HTMLElement;
    closeButton.addEventListener('click', () => {
      
      document.body.removeChild(show3dComponent);
    });
  
    return show3dComponent;
  }