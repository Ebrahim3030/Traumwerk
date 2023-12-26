

import Option from './Option';


export default function Collections(collectionName: string, image: string, options: any[]) {
    let temp = document.createElement("template");
    const html = /*html*/ `<button class="collection-button">
          <img src="/${image}"  style="width: 100%; height: 70%; object-fit: cover; border-radius: 12px;margin-top:0">
          <span style="color: black; font-size: 8px; margin-top: 0;">${collectionName}</span>
      </button>`;
    const trimmedHtml = html.trim();
    temp.innerHTML = trimmedHtml;
  
    const collectionElement = temp.content.firstElementChild as HTMLElement;
    
  
    //styling the clicked collecion and calling the renderOptions functions
    collectionElement.addEventListener('click', () => {
        const allCollectionElements = document.querySelectorAll('.collection-button');
        allCollectionElements.forEach(element => {
          element.classList.remove('clicked');
        });
      renderOptions(options);
      collectionElement.classList.add('clicked');
    });
  
    return collectionElement;
  }
  
 //render options function
  function renderOptions(options: any[]) {
    const optionsContainer = document.getElementById('options')!;
    
      optionsContainer.innerHTML = '';
      options.forEach((option: any) => {
        const optionElement = Option(option.name, option.image, option.type);
        optionsContainer.appendChild(optionElement);
     
    } )
  }
  
  