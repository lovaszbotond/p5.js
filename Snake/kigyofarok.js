class Farok {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    show() {
        fill('darkgreen')
        stroke('green')
        rect(this.x, this.y, gap, gap, 4);
    }
}