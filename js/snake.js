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

    constructor(bodyPart, { radius, color }) {
        this.snake = [bodyPart];
        for (let i = 1; i <= 4; i++) {
            this.snake.push(new BodyPart(bodyPart.x + radius * i * 2, bodyPart.y));
        }

        this.radius = radius;
        this.color = color;
        this.velocity = radius * 2;
    }

    checkBoundaries() {
        if (this.snake[0].x < 0 - this.radius / 2) this.snake[0].x = gameWindow.width + this.radius / 2;
        if (this.snake[0].x > gameWindow.width + this.radius / 2) this.snake[0].x = 0 - this.radius / 2;
        if (this.snake[0].y < 0 - this.radius / 2) this.snake[0].y = gameWindow.height + this.radius / 2;
        if (this.snake[0].y > gameWindow.height + this.radius / 2) this.snake[0].y = 0 - this.radius / 2;
    }

    draw() {
        this.checkBoundaries();
        this.snake.forEach((point) => {
            gameContext.beginPath();
            gameContext.arc(point.x, point.y, this.radius, 0, Math.PI * 2, false);
            gameContext.fillStyle = this.color;
            gameContext.fill();
        });
    }

    updateSnakeBody() {
        if (this.currentDirection == directions.STOPPED) {
            return;
        }
        for (let index = 1; index < this.snake.length; index++) {
            this.snake[index].prevX = this.snake[index].x;
            this.snake[index].x = this.snake[index - 1].prevX;

            this.snake[index].prevY = this.snake[index].y;
            this.snake[index].y = this.snake[index - 1].prevY;
        }
    }

    updateSnakeHead() {
        switch (this.currentDirection) {
            case directions.STOPPED:
                break;
            case directions.UP:
                this.snake[0].prevX = this.snake[0].x;
                this.snake[0].prevY = this.snake[0].y;

                this.snake[0].y = this.snake[0].y - this.velocity;
                this.snake[0].direction = directions.UP;
                break;
            case directions.DOWN:
                this.snake[0].prevX = this.snake[0].x;
                this.snake[0].prevY = this.snake[0].y;

                this.snake[0].y = this.snake[0].y + this.velocity;
                this.snake[0].direction = directions.DOWN;
                break;
            case directions.LEFT:
                this.snake[0].prevY = this.snake[0].y;
                this.snake[0].prevX = this.snake[0].x;

                this.snake[0].x = this.snake[0].x - this.velocity;
                this.snake[0].direction = directions.LEFT;
                break;
            case directions.RIGHT:
                this.snake[0].prevY = this.snake[0].y;
                this.snake[0].prevX = this.snake[0].x;

                this.snake[0].x = this.snake[0].x + this.velocity;
                this.snake[0].direction = directions.RIGHT;
                break;
        }
        this.updateSnakeBody();
    }
}
