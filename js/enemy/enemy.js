export default class Enemy {
    constructor(game) {
        this.game = game;
        this.spriteWidth = 100;
        this.spriteHeight = 100;
        this.sizeModifier = Math.random() * 0.3 + 0.8;
        this.width = this.spriteWidth * this.sizeModifier;
        this.height = this.spriteHeight * this.sizeModifier;
        this.x;
        this.y;
        this.speedX;
        this.speedY;
        this.frameX;
        this.lastFrame;
        this.frameY;
        this.minFrame;
        this.maxFrame;
        this.lives;
        this.free = true;
    }
    start() {
        this.x = Math.random() * this.game.width;
        this.y = -this.height;
        this.frameX = 0;
        this.frameY = Math.floor(Math.random() * 4);
        this.free = false;
    }
    isAlive() {
        return this.lives >= 1;
    }
    hit() {
        if (
            this.game.checkCollision(this, this.game.mouse) &&
            this.game.mouse.pressed &&
            !this.game.mouse.fired
        ) {
            this.lives--;
            this.game.mouse.fired = true;
        }
    }
    reset() {
        this.free = true;
    }
    update() {
        if (!this.free) {
            if (this.y < 0) this.y += 5;

            if (this.x > this.game.width - this.width) {
                this.x = this.game.width - this.width;
            }
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.y > this.game.height) {
                this.reset();
                if (!this.game.gameOver) {
                    this.game.lives--;
                    this.game.sound.scream.play();
                }
            }

            if (!this.isAlive()) {
                if (this.game.spriteUpdate) {
                    this.frameX++;
                    if (this.frameX > this.lastFrame) {
                        this.reset();
                        if (!this.game.gameOver) this.game.score++;
                    }
                }
            }
        }
    }
    draw() {
        if (!this.free) {
            this.game.ctx.drawImage(
                this.image,
                this.frameX * this.spriteWidth,
                this.frameY * this.spriteHeight,
                this.spriteWidth,
                this.spriteHeight,
                this.x,
                this.y,
                this.width,
                this.height
            );
            if (this.game.debug) {
                this.game.ctx.strokeRect(
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );

                this.game.ctx.fillText(
                    this.lives,
                    this.x + this.width * 0.5,
                    this.y + this.height * 0.5
                );
            }
        }
    }
}
