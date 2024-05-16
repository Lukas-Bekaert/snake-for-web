/**
 * @Class
 * Game class for keeping gamestate
 */
class GameState {
    constructor(updateIntervalms = 1000, points = 0) {
        this.updateIntervalms = updateIntervalms;
        this.points = points;
    }

    speedUpSnake(value) {
        this.updateIntervalms -= value;
    }

    addPoints(value) {
        this.points += value;
    }
}
