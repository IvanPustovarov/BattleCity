import Tank from "./tank.js";

const CELL_SIZE = 32;

export default class World {
  level = null;
  player1Tank = new Tank();
  player2Tank = null;
  enemyTanks = [];

  constructor(level) {
    this.level = level.map((row, y) => {
      return row.map((block, x) => {
        return {
          x: x * CELL_SIZE,
          y: y * CELL_SIZE,
        };
      });
    });
  }
  update(activeKeys) {
    this.player1Tank.update(activeKeys);
  }
}
