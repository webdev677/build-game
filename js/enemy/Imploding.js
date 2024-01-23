import EnemyState from "./EnemyState.js";

export default class Imploding extends EnemyState {
    start() {
        this.enemy.minFrame = 6;
        this.enemy.maxFrame = this.enemy.lastFrame + 1;
        this.enemy.frameX = this.enemy.minFrame;
        this.game.sound.play(
            this.game.sound.boomSounds[Math.floor(Math.random() * 4)]
        );
    }
    update() {}
}
