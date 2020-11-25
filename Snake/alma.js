class Alma {
    constructor() {
        //alma pozícionálása a gridbe
        this.x = floor(random(0, width) / gap) * gap;
        this.y = floor(random(0, height) / gap) * gap;
    }

    eat() {
        this.x = floor(random(0, width) / gap) * gap;
        this.y = floor(random(0, height) / gap) * gap;

        // ha véletlen a kigyajra dobja az almát 
        if (this.x == snakeHead.x || this.y == snakeHead.y) {
            this.eat();
        }
    }

    //alma megjelenítése
    show() {
        rect(this.x, this.y, 15, 15, 4);
        fill('green')
        stroke('lightgreen')
    }
}