import Experience from "../../../Experience";
import EventEmitter from "./EventEmitter";
import * as THREE from "three";
import Glftloader from "three/addons/loaders/GLTFLoader";
import { RGBELoader } from "three/addons/loaders/RGBELoader";
export default class Resources extends EventEmitter {
  constructor(urls) {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene.scene;
    this.resourses = urls;
    this.assets = {};
    this.loaded = 0;
    this.length = this.resourses.length;
    this.setInstanceLoaders();
    this.setLoading();
  }

  setInstanceLoaders() {
    this.textureLoader = new THREE.TextureLoader();
    this.glftLoader = new Glftloader();
    this.rgbeLoader = new RGBELoader();
  }
  setLoading() {
    this.resourses.forEach((url) => {
      switch (url.type) {
        case "gltfModel":
          this.glftLoader.load(url.path, (file) => {
            this.loadedAssets(file, url.name);
          });
          break;
        case "HDR":
          this.rgbeLoader.load(url.path, (file) => {
            this.loadedAssets(file, url.name);
          });
          break;
        default:
          break;
      }
    });
  }
  loadedAssets(file, name) {
    this.assets[name] = file;
    this.loaded++;
    if (this.loaded === this.resourses.length) {
      this.trigger("ready");
    }
  }
}
