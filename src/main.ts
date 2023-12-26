import Collections from "./components/collections";
import configurations from './myJson.json';

configurations.forEach(element => {
  const collectionElements=Collections(element.collectionName, element.image ,element.options)
  document.getElementById("collections")?.appendChild(collectionElements!);
});