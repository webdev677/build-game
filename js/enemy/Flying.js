import EnemyState from "./EnemyState.js";

export default class Flying extends EnemyState {
    start() {
        this.enemy.minFrame = 0;
        this.enemy.maxFrame = 2;
        this.enemy.speedX = Math.random() * 2 - 1;
        this.enemy.speedY = Math.random() * 0.5 + 0.2;
        this.enemy.frameX = this.enemy.minFrame;
    }
    update() {
        this.enemy.hit();
        this.enemy.handleFrames();
    }
}
