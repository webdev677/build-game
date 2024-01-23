import EnemyState from "./EnemyState.js";

export default class Phasing extends EnemyState {
    start() {
        this.enemy.minFrame = 3;
        this.enemy.maxFrame = 5;
        this.enemy.speedX = Math.random() * 2 - 1;
        this.enemy.speedY = Math.random() * 0.5 + 0.2;
        this.enemy.frameX = this.enemy.minFrame;
    }
    update() {
        this.enemy.handleFrames();
        if (
            this.game.checkCollision(this.enemy, this.game.mouse) &&
            this.game.mouse.pressed
        ) {
            this.enemy.y += 25;
            this.enemy.speedX = 0;
            this.enemy.speedY = 2;
            this.game.sound.play(this.game.sound.slide);
        }
    }
}
