export default class Game {
  constructor({ world, view, levels }) {
    this.world = world;
    this.view = view;
    this.levels = levels;
    this.isMoving = false;
    this.activeKeys = new Set();

    this.loop = this.loop.bind(this);
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  async init() {
    this.view.init();
    this.world.level = this.levels[0];

    document.addEventListener("keydown", (event) => {
      event.preventDefault();
      switch (event.code) {
        case "ArrowUp":
        case "ArrowRight":
        case "ArrowDown":
        case "ArrowLeft":
        case "Space":
        case "Enter":
          this.activeKeys.add(event.code);
      }
      this.key = event.code;
    });

    document.addEventListener("keyup", (event) => {
      event.preventDefault();
      switch (event.code) {
        case "ArrowUp":
        case "ArrowRight":
        case "ArrowDown":
        case "ArrowLeft":
        case "Space":
        case "Enter":
          this.activeKeys.delete(event.code);
      }
      this.key = "";
    });
  }

  loop() {
    //get input;
    this.world.update(this.activeKeys);
    this.view.update(this.world);

    requestAnimationFrame(this.loop);
  }
}
