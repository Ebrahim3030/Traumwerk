export default function DiamondDetails(scale: string, colour: string, clarity: string, cut: string, polish: string, symmetry: string) {
    let temp = document.createElement("template");
    const html = /*html*/ `<div id="diamond-details" >
      
        <h2 style="color:#52807E">
            ${scale}
        </h2>

        <div style="display:flex; column-gap:15px">

            <div style="display:flex felx-direction:column; color:#878787;">
                <div>Colour</div>
                <div>Clarity </div>
                <div>Cut </div>
                <div>Polish </div>
                <div>Symmetry</div>
            </div>

            <div style="display:flex felx-direction:column; color:#52807E; font-family: 'Neue Haas Grotesk Display Pro', sans-serif;">
                <div>${colour} </div>
                <div>${clarity} </div>
                <div>${cut} </div>
                <div>${polish} </div>
                <div>${symmetry} </div>
            </div>

        </div>

        <h4 id="pic" style="text-decoration:underline; color:rgb(0, 56, 30); cursor:pointer">Show picture</h4>

    </div>`;

    html.trim();
    temp.innerHTML = html;
    const diamondDetails = temp.content.firstElementChild as HTMLElement;

    const originalContent = diamondDetails.innerHTML; 

    const showPictureLink = diamondDetails.querySelector("#pic") as HTMLElement;
    showPictureLink.addEventListener("click", () => { 
        diamondDetails.innerHTML = ""; 
        const imageElement = document.createElement("div");
        imageElement.innerHTML = /*html*/ `<div class="option-button" style="position:absolute;top:0;left:25px" >
            <button style="background-color:transparent; color:rgb(85, 9, 6); margin-left:135px;cursor:pointer ;
            border-weight:solid;border-width:1px;border-color:rgb(85, 9, 6);padding:5px 9px; border-radius:100%" id="cl">
             x
             </button>
            <img src="./silver-details.png"  style="width: 90%; height: 90%; object-fit: cover; border-radius: 12px; padding-right:8px">
        </div>`;

        diamondDetails.innerHTML = ""; 
        diamondDetails.appendChild(imageElement);

        const showDetails = diamondDetails.querySelector("#cl") as HTMLElement;
        showDetails.addEventListener('click', () => {
           
            imageElement.innerHTML = originalContent;
            
            
        });
    });

    return diamondDetails;
}