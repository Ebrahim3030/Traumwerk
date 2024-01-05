import { AViewerPlugin, ViewerApp } from "webgi";

export class MaterialPresetPlugin extends AViewerPlugin<""> {
  public static readonly PluginType = "MaterialPresetPlugin";

  // toJSON: any = null;

  enabled = true;

  materials: { name: string; path: string }[] = [];
  presets: any = {};
  basePath: string | undefined;
  async onAdded(viewer: ViewerApp): Promise<void> {
    await super.onAdded(viewer);
    this.basePath = "";
  }

  loadPresets(data: any, basePath: string) {
    this.presets = data;
    this.basePath = basePath;
    this.dispatchEvent({ type: "deserialize" });
  }

  exportPresets(): any {
    // this.materials.map((v) => {
    //   return { ...v, path: v.path.split("/").pop() , type : "" };
    // });
    const json = { materials: this.materials, type: MaterialPresetPlugin.PluginType };
    return json;
  }

  getMaterialPresetByName = (option: any) => {
    return this.presets[option.type].find((o: any) => o.path.split("/").pop() == option.name);
  };

  // Imports data from exportPresets()
  async fromJSON(data: any, meta?: any): Promise<this | null> {
    if (!super.fromJSON(data, meta)) return null;
    const ms = data.materials;

    if (!ms) return null;

    const pms: Promise<any>[] = [];

    for (const m of ms) {
      pms.push(this.apply(m.name, m.path));
    }

    // for (const [name, path] of Object.entries(d)) {
    //   const pg = this.presetGroups.find((g) => g.name === name);
    //   const presets = pg?.presets;
    //   if (!pg || !presets) continue;
    //   const asset: IAsset = typeof path === "string" ? { path } : (path as IAsset);
    //   pms.push(pg.apply(this._viewer!, asset));
    // }
    await Promise.all(pms);
    this.dispatchEvent({ type: "deserialize" });
    return this;
  }

  async apply(name: string, materialURL: string) {
    const manager = this._viewer?.getManager();

    // this._viewer?.load(materialURL).clone()
    // let sourceMaterial = (await this._viewer?.load(materialURL)).clone();
    //@ts-ignore
    let sourceMaterial = (await manager?.importer?.importSinglePath(this.basePath + materialURL)).clone();
    // sourceMaterial = Object.create(sourceMaterial as any);

    if (!sourceMaterial) {
      return "Unable to load material";
    }
    sourceMaterial.userData.__isVariation = true;

    // let materials : any = manager!.materials?.findMaterial(uuid);

    // if (!materials ) {
    //   materials = manager!.materials?.findMaterialsByName(uuid);
    //   return "Unable to find matching materials in Layers";
    // }

    let ms = new Set();
    this._viewer?.scene?.traverse((o) => {
      //@ts-ignore
      if (o.isMesh) {
        //@ts-ignore
        if (o.material.name === name) {
          ms.add(o);
        }
      }
    });

    // materials.forEach((m) => {
    //   m.userData.__appliedMeshes?.forEach((m1: any) => {
    //     ms.add(m1);
    //   });
    // });

    ms.forEach((m) => {
      //@ts-ignore
      let name = m?.material.name;
      //@ts-ignore
      m?.setMaterial?.(sourceMaterial);
      //@ts-ignore
      m.material.name = name;
    });

    let index = this.materials.findIndex((m) => m.name === name);
    if (index !== -1) {
      this.materials[index] = { name: name, path: materialURL };
    } else {
      this.materials.push({ name: name, path: materialURL });
    }
  }
}
