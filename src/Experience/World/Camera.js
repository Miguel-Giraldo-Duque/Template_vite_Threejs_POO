import Experience from "../../Experience";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes.sizes;
    this.scene = this.experience.scene.scene;
    this.canvas = this.experience.canvas;
    this.instance();
    this.instanceControls();
  }
  instance() {
    this.cameraInstance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1, // Añadir near
      100 // Añadir far
    );
    this.cameraInstance.position.set(6, 4, 8);
    this.scene.add(this.cameraInstance);
  }

  instanceControls() {
    this.controls = new OrbitControls(this.cameraInstance, this.canvas);
    this.controls.enableDamping = true;
    this.update();
  }

  update() {
    this.controls.update();
  }

  resize() {
    this.cameraInstance.aspect = this.sizes.width / this.sizes.height;
    this.cameraInstance.updateProjectionMatrix();
  }
}
