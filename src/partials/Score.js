import { SVG_NS } from '../settings'

export default class Score {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    render(svg, point) {

        let score = document.createElementNS(SVG_NS, 'text')

        score.setAttributeNS(null, 'fill', 'white');
        score.setAttributeNS(null, 'x', this.x);
        score.setAttributeNS(null, 'y', this.y);
        score.setAttributeNS(null, 'font-size', '30px');
        score.setAttributeNS(null, 'kerning', '10');


        score.innerHTML = point

        svg.appendChild(score)
    }
}