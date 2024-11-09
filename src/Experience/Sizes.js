import Experience from "../Experience";
import EventEmitter from "./World/Utils/EventEmitter";

export default class Sizes extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.sizes = {};

    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;
    window.addEventListener("resize", () => {
      this.resize();
    });
  }

  resize() {
    this.trigger("resize");
    this.sizes.width = window.innerWidth;
    this.sizes.height = window.innerHeight;
  }
}
