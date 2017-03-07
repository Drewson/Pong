import { SVG_NS } from '../settings'

export default class Score {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    render(svg, point) {

        let score = document.createElementNS(SVG_NS, 'text')

        score.setAttributeNS(null, 'fill', 'black');
        score.setAttributeNS(null, 'x', this.x);
        score.setAttributeNS(null, 'y', this.y + 10);
        score.setAttributeNS(null, 'font-size', '40px');
        score.setAttributeNS(null, 'kerning', '10');


        score.innerHTML = point

        svg.appendChild(score)
    }
}