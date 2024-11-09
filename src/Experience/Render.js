import Experience from "../Experience";
import * as THREE from "three";
export default class Render {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes.sizes;

    this.scene = this.experience.scene.scene;
    this.camera = this.experience.camera.cameraInstance;

    console.log(this.camera);
    this.setInstanse();
    this.update();
  }

  setInstanse() {
    this.render = new THREE.WebGLRenderer({
      canvas: this.canvas,
    });
    this.render.setSize(this.sizes.width, this.sizes.height);
    this.render.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  resize() {
    this.render.setSize(this.sizes.width, this.sizes.height);
  }
  update() {
    this.render.render(this.scene, this.camera);
  }
}
