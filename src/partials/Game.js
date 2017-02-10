import { SVG_NS } from '../settings';
import Board from './Board';
import Paddle from './Paddle';



export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
	
		this.gameElement = document.getElementById(this.element);

		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 56;



		this.board = new Board(this.width, this.height);

		this.paddle1 = new Paddle(this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			this.boardGap, 
			((this.height - this.paddleHeight)/2));

		this.paddle2 = new Paddle(this.height, 
			this.paddleWidth, 
			this.paddleHeight, 
			(this.width - this.boardGap - this.paddleWidth), 
			((this.height - this.paddleHeight)/2));
	}

	render() {
		
		this.gameElement.innerHTML = '';

		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width)
		svg.setAttributeNS(null, 'height', this.height)
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		this.gameElement.appendChild(svg);		

		this.board.render(svg);
		this.paddle1.render(svg);
		this.paddle2.render(svg);
		
	}

}