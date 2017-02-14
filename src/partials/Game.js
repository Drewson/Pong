import {
	SVG_NS,
	KEYS
} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Game {

	constructor(element, width, height, destroy) {
		this.destroy = destroy;
		this.element = element;
		this.width = width;
		this.height = height;
		this.pause = false;
		this.bomb = 0;
		this.gameElement = document.getElementById(this.element);

		this.boardGap = 10;
		this.paddleWidth = 12;
		this.paddleHeight = 56;



		this.board = new Board(this.width, this.height);


		this.paddle1 = new Paddle(this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z);

		this.paddle2 = new Paddle(this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down);

		this.ball = new Ball(8, this.width, this.height, KEYS.plus, KEYS.minus);
		this.newBall = new Ball(8, this.width, this.height);

		this.score1 = new Score(this.width / 2 - 70, 30, 30);
		this.score2 = new Score(this.width / 2 + 50, 30, 30);


		document.addEventListener('keydown', event => {
			switch (event.keyCode) {
				case KEYS.spaceBar:
					this.pause = !this.pause;
					break;
				case KEYS.shiftKey:
					this.bomb = !this.bomb;

			}
		});
	}
	render(i) {

		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');

		svg.setAttributeNS(null, 'width', this.width)
		svg.setAttributeNS(null, 'height', this.height)
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);

		this.board.render(svg);

		if (this.paddle1.score === 5 || this.paddle2.score === 5) {
			let gg = document.createElementNS(SVG_NS, 'text')
			gg.setAttributeNS(null, 'fill', 'yellow');
			gg.setAttributeNS(null, 'x', 10);
			gg.setAttributeNS(null, 'y', 150);
			gg.setAttributeNS(null, 'font-size', '80px');
			gg.setAttributeNS(null, 'kerning', '10');

			gg.innerHTML = 'GAME OVER!';
			svg.appendChild(gg);

			i = 1;
		}

		if (this.pause || i) {
			return;
		}

		this.ball.render(svg, this.paddle1, this.paddle2);

		if (this.bomb) {
			this.newBall.render(svg, this.paddle1, this.paddle2, 1);

			if (this.newBall.destroy) {
				return;
			}
		}

		this.paddle1.render(svg);
		this.paddle2.render(svg);
		this.score1.render(svg, this.paddle1.score);
		this.score2.render(svg, this.paddle2.score);


	}
}