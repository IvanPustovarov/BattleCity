export default class View {
  constructor(canvas, sprite) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.sprite = sprite;
  }

  update() {}
  async init() {
    await this.sprite.load();
  }
}
