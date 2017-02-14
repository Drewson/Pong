import { SVG_NS } from '../settings'


export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  render(svg) {

    let rect = document.createElementNS(SVG_NS, 'rect')
    rect.setAttributeNS(null, 'width', this.width)
    rect.setAttributeNS(null, 'height', this.height)
    rect.setAttributeNS(null, 'fill', '#B25C4E')
    rect.setAttributeNS(null, 'x', '0')
    rect.setAttributeNS(null, 'y', '0')
    rect.setAttributeNS(null, 'stroke', 'white')
    rect.setAttributeNS(null, 'stroke-width', '10')

    let line = document.createElementNS(SVG_NS, 'line')
    line.setAttributeNS(null, 'x1', this.width / 2)
    line.setAttributeNS(null, 'x2', this.width / 2)
    line.setAttributeNS(null, 'y1', '0')
    line.setAttributeNS(null, 'y2', this.height)
    line.setAttributeNS(null, 'width', '7')
    line.setAttributeNS(null, 'stroke', 'silver')
    line.setAttributeNS(null, 'stroke-width', '7')

    let line2 = document.createElementNS(SVG_NS, 'line')
    line2.setAttributeNS(null, 'x1', 0)
    line2.setAttributeNS(null, 'x2', this.width)
    line2.setAttributeNS(null, 'y1', 20)
    line2.setAttributeNS(null, 'y2', 20)
    line2.setAttributeNS(null, 'width', '1')
    line2.setAttributeNS(null, 'stroke', 'white')
    line2.setAttributeNS(null, 'stroke-width', '3')

    let line3 = document.createElementNS(SVG_NS, 'line')
    line3.setAttributeNS(null, 'x1', 0)
    line3.setAttributeNS(null, 'x2', this.width)
    line3.setAttributeNS(null, 'y1', this.height - 20)
    line3.setAttributeNS(null, 'y2', this.height - 20)
    line3.setAttributeNS(null, 'width', '1')
    line3.setAttributeNS(null, 'stroke', 'white')
    line3.setAttributeNS(null, 'stroke-width', '3')

    let line4 = document.createElementNS(SVG_NS, 'line')
    line4.setAttributeNS(null, 'x1', this.width * .25)
    line4.setAttributeNS(null, 'x2', this.width * .75)
    line4.setAttributeNS(null, 'y1', this.height / 2)
    line4.setAttributeNS(null, 'y2', this.height / 2)
    line4.setAttributeNS(null, 'width', '1')
    line4.setAttributeNS(null, 'stroke', 'white')
    line4.setAttributeNS(null, 'stroke-width', '3')

    let line5 = document.createElementNS(SVG_NS, 'line')
    line5.setAttributeNS(null, 'x1', this.width * .25)
    line5.setAttributeNS(null, 'x2', this.width * .25)
    line5.setAttributeNS(null, 'y1', 20)
    line5.setAttributeNS(null, 'y2', this.height - 20)
    line5.setAttributeNS(null, 'width', '1')
    line5.setAttributeNS(null, 'stroke', 'white')
    line5.setAttributeNS(null, 'stroke-width', '3')

    let line6 = document.createElementNS(SVG_NS, 'line')
    line6.setAttributeNS(null, 'x1', this.width * .75)
    line6.setAttributeNS(null, 'x2', this.width * .75)
    line6.setAttributeNS(null, 'y1', 20)
    line6.setAttributeNS(null, 'y2', this.height - 20)
    line6.setAttributeNS(null, 'width', '1')
    line6.setAttributeNS(null, 'stroke', 'white')
    line6.setAttributeNS(null, 'stroke-width', '3')

    svg.appendChild(rect)
    svg.appendChild(line)
    svg.appendChild(line2)
    svg.appendChild(line3)
    svg.appendChild(line4)
    svg.appendChild(line5)
    svg.appendChild(line6)
  }
}