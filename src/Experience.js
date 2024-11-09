import Camera from "./Experience/World/Camera";
import Render from "./Experience/Render";
import Scene from "./Experience/Scene";
import Sizes from "./Experience/Sizes";
import Time from "./Experience/Time";
import World from "./Experience/World/World";

let instance = null;
export default class Experience {
  constructor(canvas) {
    this.canvas = canvas;

    // Cuando se vuelva a llamar el contructor , si ya existe una
    // instancia devuelve esta misma.
    if (instance) {
      return instance;
    }
    instance = this;

    window.experience = this;
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new Scene();
    this.camera = new Camera();
    this.renderer = new Render();
    this.world = new World();
    this.time.on("tick", () => {
      this.update();
    });
    this.sizes.on("resize", () => {
      this.resize();
    });
  }

  resize() {
    this.renderer.resize();
    this.camera.resize();
  }
  update() {
    this.renderer.update();
    this.camera.update();
  }
}
