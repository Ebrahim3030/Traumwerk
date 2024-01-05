export function getMaterialUrl(name: string) {
    switch (name) {
      case "Yellow Gold":
        return "/materials/metal/gold-yellow-750.pmat";
      case "White Gold":
        return "/materials/metal/gold-white-750.pmat";
      case "Rose Gold":
        return "/materials/metal/gold-rose-750.pmat";
    }
  
    return "";
  }
  

  export function getDiamondUrl(name: string) {
    switch (name) {
      case "Ruby":
        return "/materials/gem/ruby-1.dmat";
      case "Diamond":
        return "/materials/gem/diamond-white-1.dmat";
      case "Yellow Sapphire":
        return "/materials/gem/sapphire-yellow.dmat";
      case "Emerland":
        return "/materials/gem/emerald-1.dmat";
      case "Sapphire":
        return "/materials/gem/sapphire-1.dmat";
    }
  
    return "";
  }