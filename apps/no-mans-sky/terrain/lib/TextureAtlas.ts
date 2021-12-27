function getImageData(image: any) {
  var canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;

  var context = canvas.getContext('2d')!;
  context.drawImage(image, 0, 0);

  return context.getImageData(0, 0, image.width, image.height);
}

class TextureAtlas {
  onLoad: () => void;
  manager: THREE.LoadingManager;
  loader: THREE.TextureLoader;
  textures: { [key: string]: { atlas: THREE.DataTexture2DArray; textures: Array<THREE.Texture> } };
  Info: any;

  constructor() {
    this.manager = new THREE.LoadingManager();
    this.loader = new THREE.TextureLoader(this.manager);
    this.textures = {};
    this.onLoad = () => { };
    this.manager.onLoad = () => {
      this.handleLoad();
    };
  }

  get info() {
    return this.textures;
  }

  handleLoad() {
    for (let k in this.textures) {
      const atlas = this.textures[k];
      const data = new Uint8Array(atlas.textures.length * 4 * 1024 * 1024);

      for (let t = 0; t < atlas.textures.length; t++) {
        const curTexture = atlas.textures[t];
        const curData = getImageData(curTexture.image);
        const offset = t * (4 * 1024 * 1024);

        data.set(curData.data, offset);
      }

      const diffuse = new THREE.DataTexture2DArray(data, 1024, 1024, atlas.textures.length);
      diffuse.format = THREE.RGBAFormat;
      diffuse.type = THREE.UnsignedByteType;
      diffuse.minFilter = THREE.LinearMipMapLinearFilter;
      diffuse.magFilter = THREE.LinearFilter;
      diffuse.wrapS = THREE.RepeatWrapping;
      diffuse.wrapT = THREE.RepeatWrapping;
      diffuse.generateMipmaps = true;

      // const caps = this._game._graphics._threejs.capabilities;
      // const aniso = caps.getMaxAnisotropy();

      diffuse.anisotropy = 4;

      atlas.atlas = diffuse;
    }

    this.onLoad();
  }

  load(atlas: string, names: string[]) {
    this.textures[atlas] = {
      ...this.textures[atlas] ?? {},
      textures: names.map(n => this.loader.load(n))
    };
  }
}