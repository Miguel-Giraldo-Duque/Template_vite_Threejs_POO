import Experience from "../Experience";
import EventEmitter from "./World/Utils/EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.start = Date.now();
    this.delta = 16;

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    let currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsedTime = currentTime - this.start;

    this.trigger("tick");
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
