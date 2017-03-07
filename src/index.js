import './styles/game.css';
import Game from './gameObjects/Game'

// create a game instance
const game = new Game('game', 512, 256);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();
