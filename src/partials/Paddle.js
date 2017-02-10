import {SVG_NS } from '../settings'
import {KEYS} from '../settings'
// import {paddle1} from './Game'
// import {paddle2} from './Game'

export default class Paddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case KEYS.up:
          this.y -= this.speed;
          break;
        case KEYS.down:
          this.y += this.speed;
          break;
      }
          
        switch (event.keyCode) {
        case KEYS.z:
          paddle2.y += this.speed;
          break;
        case KEYS.a:
          paddle2.y -= this.speed;
          break;
      }

    });
  }
  
    render(svg) {

        let rect = document.createElementNS( SVG_NS, 'rect')
        rect.setAttributeNS(null, 'width', this.width)
		rect.setAttributeNS(null, 'height', this.height)
        rect.setAttributeNS(null, 'x', this.x)
		rect.setAttributeNS(null, 'y', this.y)
        rect.setAttributeNS(null, 'fill', 'white')

        svg.appendChild(rect)
    }
}
