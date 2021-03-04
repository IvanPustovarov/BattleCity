export default class Game {
  constructor({ world, view, levels }) {
    this.world = world;
    this.view = view;
    this.levels = levels;

    this.loop = this.loop.bind(this);
  }

  start() {
    requestAnimationFrame(this.loop);
  }

  async init() {
    this.view.init();
  }

  loop() {
    //get input;
    this.world.update();
    this.view.update();

    requestAnimationFrame(this.loop);
  }
}
