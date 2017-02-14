import { SVG_NS } from '../settings';
import Game from './Game';


export default class Ball {
    constructor(radius, boardWidth, boardHeight, plus, minus) {
        this.radius = radius;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
        this.direction = 1;
        this.ping = new Audio('public/sounds/pong-01.wav');
        this.pang = new Audio('public/sounds/pong-04.wav');
        this.ballSpeed = 6;
        this.plus = plus;
        this.minus = minus;

        this.reset();

        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case plus:
                    this.ballSpeed++;
                    break;
                case minus:
                    this.ballSpeed--;
                    break;
            }
        });
    }

    wallCollision() {
        const hitLeft = this.x - this.radius <= 0;
        const hitRight = this.x + this.radius >= this.boardWidth;
        const hitTop = this.y - this.radius <= 0;
        const hitBottom = this.y + this.radius >= this.boardHeight;

        if (hitLeft || hitRight) {
            this.vx = -this.vx;
        } else if (hitTop || hitBottom) {
            this.vy = -this.vy;
        }
    }

    paddleCollision(paddle1, paddle2) {
        if (this.vx > 0) {
            //player 2 coords
            let paddle = paddle2.coordinates(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
            let [leftX, rightX, topY, bottomY] = paddle;

            if (
                this.x + this.radius >= leftX &&
                this.x + this.radius <= rightX &&
                this.y >= topY &&
                this.y <= bottomY
            ) {
                this.vx = -this.vx;
                this.ping.play();
            }
        } else {
            let paddle = paddle1.coordinates(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
            let [leftX, rightX, topY, bottomY] = paddle;

            if (
                this.x - this.radius >= leftX &&
                this.x - this.radius <= rightX &&
                this.y >= topY &&
                this.y <= bottomY
            ) {
                this.vx = -this.vx
                this.ping.play();
            }
        }
    }


    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;

        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }

        this.vx = this.direction * (this.ballSpeed - Math.abs(this.vy));
    }
    goal(player) {
        player.score++;
        this.reset();

    }

    render(svg, paddle1, paddle2, bomb) {

        this.x += this.vx;
        this.y += this.vy;

        this.wallCollision();
        this.paddleCollision(paddle1, paddle2);


        let ball = document.createElementNS(SVG_NS, 'circle')

        ball.setAttributeNS(null, 'r', this.radius)
        ball.setAttributeNS(null, 'cx', this.x)
        ball.setAttributeNS(null, 'cy', this.y)
        ball.setAttributeNS(null, 'fill', 'yellow')
        ball.setAttributeNS(null, 'stroke', 'black')
        ball.setAttributeNS(null, 'stroke-width', '1px')

        if (bomb) {
            ball.setAttributeNS(null, 'fill', 'black')
            ball.setAttributeNS(null, 'r', '20px')
            ball.setAttributeNS(null, 'stroke', 'red')
            ball.setAttributeNS(null, 'stroke-width', '15px')
            ball.setAttributeNS(null, 'stroke-opacity', '.5')
        }

        svg.appendChild(ball);
        const rightGoal = this.x + this.radius >= this.boardWidth;
        const leftGoal = this.x - this.radius <= 0;
        if (rightGoal) {
            this.direction = -this.direction;
            this.goal(paddle1);

            if (bomb) {
                this.pang.play()

                let gg = document.createElementNS(SVG_NS, 'text')

                gg.setAttributeNS(null, 'fill', 'yellow');
                gg.setAttributeNS(null, 'stroke', 'black')
                gg.setAttributeNS(null, 'stroke-width', '5px')
                gg.setAttributeNS(null, 'stroke-opacity', .25)
                gg.setAttributeNS(null, 'x', 40);
                gg.setAttributeNS(null, 'y', 120);
                gg.setAttributeNS(null, 'font-size', '50px');
                gg.setAttributeNS(null, 'kerning', '5');

                gg.innerHTML = 'PLAYER 2 WINS!';
                svg.appendChild(gg);

                Game.render(1);
            }
        } else if (leftGoal) {
            this.direction = -this.direction;
            this.goal(paddle2);

            if (bomb) {
                this.pang.play()

                let gg = document.createElementNS(SVG_NS, 'text')

                gg.setAttributeNS(null, 'fill', 'yellow');
                gg.setAttributeNS(null, 'stroke', 'black')
                gg.setAttributeNS(null, 'stroke-width', '5px')
                gg.setAttributeNS(null, 'stroke-opacity', .25)
                gg.setAttributeNS(null, 'x', 40);
                gg.setAttributeNS(null, 'y', 120);
                gg.setAttributeNS(null, 'font-size', '50px');
                gg.setAttributeNS(null, 'kerning', '5');

                gg.innerHTML = 'PLAYER 1 WINS!';
                svg.appendChild(gg);

                Game.render(1);
            }
        }
    }
}