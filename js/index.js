const gameWindow = document.querySelector("canvas");
const gameContext = gameWindow.getContext("2d");

const resize = () => {
    gameWindow.width = window.innerWidth;
    gameWindow.height = window.innerHeight;
};

window.addEventListener("resize", resize);
resize();
const startPosX = gameWindow.width / 2;
const startPosY = gameWindow.height / 2;

const snake = new Snake(new BodyPart(startPosX, startPosY), { radius: 10, color: "red" });
const game = new GameState();

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
        case " ":
            snake.currentDirection = directions.STOPPED;
            break;
        case "F11":
            resize;
            break;
    }
    console.log("snake direction: " + snake.currentDirection);
};

let lastUpdateTime = Date.now();

function animate() {
    requestAnimationFrame(animate);

    gameContext.clearRect(0, 0, gameWindow.width, gameWindow.height);
    snake.draw();

    const currentTime = Date.now();
    if (currentTime - lastUpdateTime > game.updateIntervalms) {
        lastUpdateTime = currentTime;
        snake.updateSnakeHead();
    }
}

animate();
