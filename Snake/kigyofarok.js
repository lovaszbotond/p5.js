class Farok {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    show() {
        fill('black')
        stroke('green')
        rect(this.x, this.y, gap, gap, 4);
    }
}