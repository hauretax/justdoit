import Canvashandler from "./Canvahandler";

let circleIndex = 0;
export default class Circle extends Canvashandler {
    constructor({ x = 50, y = 50, size = 20, color = "#000000", cnvW, cnvH, ctx }) {
        super();
        // console.log('Circle constructor call')
        this.posx = x
        this.posy = y
        this.size = size
        this.color = color;
        this.id = circleIndex;
        this.cnvW = cnvW;
        this.cnvH = cnvH;
        this.ctx = ctx;
        circleIndex++;
    }

    draw() {
        //console.log('Circle draw', this.posx, this.posy)
        //console.log(this.id)
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.posx, this.posy, this.size, 0, 2 * Math.PI, true);
        this.ctx.fill();
    }

    isOn({ x, y }) {
        // console.log(x, this.posx, y, this.posy, this.size)
        // console.log(Math.sqrt(Math.pow(x - this.posx, 2) + Math.pow(y - this.posy, 2)))
        if (Math.sqrt(Math.pow(x - this.posx, 2) + Math.pow(y - this.posy, 2)) < this.size) {
            return true
        }
        return false
    }

    setRandomPosition() {
        this.posx = Math.random() * (this.cnvW - this.size * 2) + this.size
        this.posy = Math.random() * (this.cnvH - this.size * 2) + this.size
    }
}