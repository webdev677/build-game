import Enemy from "./enemy.js";

class Beetlemorph extends Enemy {
    constructor(game) {
        super(game);
        this.image = document.getElementById("beetlemorph");
    }
    start() {
        super.start();
        this.speedX = 0;
        this.speedY = Math.random() * 2 + 0.2;
        this.lives = 1;
        this.lastFrame = 3;
    }
    update() {
        super.update();
        if (!this.free) {
            if (this.isAlive()) {
                this.hit();
            }
        }
    }
}

export default Beetlemorph;
