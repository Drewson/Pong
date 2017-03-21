import { SVG_NS } from '../settings';
import Paddle from './Paddle';


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
        this.leftBombCx = Paddle.x;
        this.leftBombCy = Paddle.y;
        this.rightBombCx = Paddle.x;
        this.rightBombCy = Paddle.y;

        this.reset();

        //KEY EVENTS
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

    //WHEN THE BALL HITS A WALL
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

    //WHEN THE BALL HITS A PADDLE
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

    //RESETS THE BALLS POSITION AFTER SCORE or NEW GAME
    reset() {
        this.x = this.boardWidth / 2;
        this.y = this.boardHeight / 2;

        this.vy = 0;

        while (this.vy === 0) {
            this.vy = Math.floor(Math.random() * 10 - 5);
        }

        this.vx = this.direction * (this.ballSpeed - Math.abs(this.vy));
    }

    //INCREMENTS SCORE AFTER GOAL..
    goal(player) {
        player.score++;
        this.reset();

    }

    render(svg, paddle1, paddle2, bomb) {

        this.x += this.vx;
        this.y += this.vy;
        this.leftBombCx += this.vx;
        this.leftBombCy += this.vy;
        this.rightBombCx += this.vx;
        this.rightBombCy += this.vy;

        this.wallCollision();
        this.paddleCollision(paddle1, paddle2);


        let ball = document.createElementNS(SVG_NS, 'circle')

        ball.setAttributeNS(null, 'r', this.radius)
        ball.setAttributeNS(null, 'fill', 'yellow')
        ball.setAttributeNS(null, 'stroke', 'black')
        ball.setAttributeNS(null, 'stroke-width', '1px')

        if (bomb === undefined){
            ball.setAttributeNS(null, 'cx', this.x)
            ball.setAttributeNS(null, 'cy', this.y)
        }

        if (bomb === 1) {
            ball.setAttributeNS(null, 'cx', this.x)
            ball.setAttributeNS(null, 'cy', this.y)
            ball.setAttributeNS(null, 'fill', 'black')
            ball.setAttributeNS(null, 'r', '20px')
            ball.setAttributeNS(null, 'stroke', 'red')
            ball.setAttributeNS(null, 'stroke-width', '15px')
            ball.setAttributeNS(null, 'stroke-opacity', '.5')
        }

        if (bomb === 2) {
            ball.setAttributeNS(null, 'cx', this.leftBombCx)
            ball.setAttributeNS(null, 'cy', this.leftBombCy)
            ball.setAttributeNS(null, 'fill', 'yellow')
            ball.setAttributeNS(null, 'r', '20px')
            ball.setAttributeNS(null, 'stroke', 'red')
            ball.setAttributeNS(null, 'stroke-width', '15px')
            ball.setAttributeNS(null, 'stroke-opacity', '.5')
        }

        if (bomb === 3) {
            ball.setAttributeNS(null, 'cx', this.rightBombCx)
            ball.setAttributeNS(null, 'cy', this.rightBombCy)
            ball.setAttributeNS(null, 'fill', 'green')
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

            //IF THIS BALL IS A BOMB, DO THIS
            if (bomb === 1 ) {
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
                paddle2.score +=5;
                
                svg.appendChild(gg);

                
            }
        } else if (leftGoal) {

            //IF THIS BALL IS A BOMB, DO THIS
            if (bomb === 1) {
                this.pang.play()

                let gg = document.createElementNS(SVG_NS, 'text')

                gg.setAttributeNS(null, 'fill', 'yellow');
                gg.setAttributeNS(null, 'stroke', 'black')
                gg.setAttributeNS(null, 'stroke-width', '5px')
                gg.setAttributeNS(null, 'stroke-opacity', .25)
                gg.setAttributeNS(null, 'x', );
                gg.setAttributeNS(null, 'y', 120);
                gg.setAttributeNS(null, 'font-size', '50px');
                gg.setAttributeNS(null, 'kerning', '5');

                gg.innerHTML = 'PLAYER 1 WINS!';

                paddle1.score +=5;
                svg.appendChild(gg);

                
                
            }

            this.direction = -this.direction;
            this.goal(paddle2);
        }
    }
}