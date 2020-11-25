class SnakeHead {
    constructor() {
        this.x = floor(width / (2 * gap)) * gap;
        this.y = floor(height / (2 * gap)) * gap;
        this.dir = 'up';
        this.score = 0;
        this.farok = [];
    }

    update() {
        if (this.dir == 'left') {
            this.x -= gap;
        } else if (this.dir == 'right') {
            this.x += gap;
        } else if (this.dir == 'up') {
            this.y -= gap;
        } else if (this.dir == 'down') {
            this.y += gap;
        }
    }

    respawn() {
        this.x = floor(width / (2 * gap)) * gap;
        this.y = floor(height / (2 * gap)) * gap;
        this.dir = 'up';
        this.score = 0;
        this.farok = [];
        for (let i = 0; i < 2; i++) {
            snakeHead.farok.push(new Farok(snakeHead.x, snakeHead.y + (15 * i)));
        }
    }


    farokCollision() {
        for (let i = 0; i < this.farok.length; i++) {
            if (this.x == this.farok[i].x && this.y == this.farok[i].y) {
                return true;
            }
        }
    }


    //ütközésvizsgálat
    collision(obj) {
        if (this.x == obj.x && this.y == obj.y) {

            return true;
        }
        // ha kiszaladna a kigyaj a canvasrol akkor false 
        if (this.x >= width || this.x < 0 || this.y >= height || this.y < 0) {
            return false;
        }
    }

    show() {
        rect(this.x, this.y, 15, 15, 4);
        fill(23, 31, 10)
        stroke('black')

    }
}