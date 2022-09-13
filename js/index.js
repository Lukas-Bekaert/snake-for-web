const gameWindow = document.querySelector("canvas");
const gameContext = gameWindow.getContext("2d");

gameWindow.width = innerWidth;
gameWindow.height = innerHeight;

const startPosX = gameWindow.width / 2;
const startPosY = gameWindow.height / 2;

const snake = new Snake(startPosX, startPosY, 20, "darkgray");
snake.draw();
document.onkeydown = (e) => {
    switch (e.key) {
        case "ArrowLeft":
            if (snake.currentDirection == directions.RIGHT) break;
            snake.currentDirection = directions.LEFT;
            break;
        case "ArrowUp":
            if (snake.currentDirection == directions.DOWN) break;
            snake.currentDirection = directions.UP;
            break;
        case "ArrowRight":
            if (snake.currentDirection == directions.LEFT) break;
            snake.currentDirection = directions.RIGHT;
            break;
        case "ArrowDown":
            if (snake.currentDirection == directions.UP) break;
            snake.currentDirection = directions.DOWN;
            break;
    }
    console.log("snake direction: " + snake.currentDirection);
};

function animate() {
    requestAnimationFrame(animate);
    gameContext.clearRect(0, 0, gameWindow.width, gameWindow.height);
    snake.draw();
    snake.updateSnake();
}

animate();
