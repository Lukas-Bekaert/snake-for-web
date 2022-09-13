const directions = {
    STOPPED: "stopped",
    UP: "up",
    DOWN: "down",
    LEFT: "left",
    RIGHT: "right",
};

/**
 * @Class
 * The Snake class overseeing all data related to snake
 */
class Snake {
    // set the start direction
    currentDirection = directions.STOPPED;

    constructor(x, y, radius, color, velocity = 1) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }

    checkBoundaries() {
        if (this.x < 0) this.x = gameWindow.width;
        if (this.x > gameWindow.width) this.x = 0;
        if (this.y < 0) this.y = gameWindow.height;
        if (this.y > gameWindow.height) this.y = 0;
    }

    draw() {
        this.checkBoundaries();
        gameContext.beginPath();
        gameContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        gameContext.fillStyle = this.color;
        gameContext.fill();
    }

    updateSnake() {
        switch (this.currentDirection) {
            case directions.STOPPED:
                break;
            case directions.UP:
                this.y = this.y - this.velocity;
                break;
            case directions.DOWN:
                this.y = this.y + this.velocity;
                break;
            case directions.LEFT:
                this.x = this.x - this.velocity;
                break;
            case directions.RIGHT:
                this.x = this.x + this.velocity;
                break;
        }
    }
}
