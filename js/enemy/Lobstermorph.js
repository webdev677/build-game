import Enemy from "./enemy.js";

class Lobstermorph extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById("lobstermorph");
        this.lastFrame = 14;
    }
    start() {
        super.start();
        this.speedX = 0;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.lives = 3;
    }
    update() {
        super.update();
        if (!this.free) {
            if (this.lives >= 3) {
                this.maxFrame = 0;
            } else if (this.lives == 2) {
                this.maxFrame = 3;
            } else if (this.lives == 1) {
                this.maxFrame = 7;
            }
            if (this.isAlive()) {
                this.hit();
                if (this.frameX < this.maxFrame && this.game.spriteUpdate) {
                    this.frameX++;
                }
            }
        }
    }
}

export default Lobstermorph;
