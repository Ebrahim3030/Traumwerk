import Collections from "./components/collections";
import show3d from "./components/show3d";
import configurations from './myJson.json';




configurations.forEach(element => {
  const collectionElements = Collections(element.collectionName, element.image, element.options);
  document.getElementById("collections")?.appendChild(collectionElements!);
});

const show3dComponent = show3d();
document.body.appendChild(show3dComponent);


