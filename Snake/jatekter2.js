let apple;
let gap = 15;
let snakeHead;
let farokSpawn = {};
let highest = 0;


function setup() {
    createCanvas(600, 600);
    frameRate(12);
    textSize(15);
    textStyle(BOLD);
    apple = new Alma();
    snakeHead = new SnakeHead();

    for (let i = 0; i < 2; i++) {
        snakeHead.farok.push(new Farok(snakeHead.x, snakeHead.y + (15 * i)));
    }

}

function draw() {
    background(126, 119, 119);
    //

    for (let i = snakeHead.farok.length - 1; i >= 0; i--) {
        if (i == 0) {
            snakeHead.farok[i].x = snakeHead.x;
            snakeHead.farok[i].y = snakeHead.y;
        } else {
            snakeHead.farok[i].x = snakeHead.farok[i - 1].x;
            snakeHead.farok[i].y = snakeHead.farok[i - 1].y;
        }
        snakeHead.farok[i].show();
    }

    if (snakeHead.farok.length > 4) {
        frameRate(20)
        if (snakeHead.farok.length > 7) {
            frameRate(30)
            if (snakeHead.farok.length > 10) {
                frameRate(40)
            }
        }
    } else {
        frameRate(12)
    }


    farokSpawn.x = snakeHead.x;
    farokSpawn.y = snakeHead.y;

    snakeHead.update();

    if (snakeHead.collision(apple)) {
        snakeHead.score++;
        apple.eat();
        snakeHead.farok.push(new Farok(farokSpawn.x, farokSpawn.y));
    }
    if (snakeHead.score > highest) {
        highest = snakeHead.score;
    }
    if (snakeHead.collision(apple) == false || snakeHead.farokCollision() == true) {
        snakeHead.respawn();
        apple.eat();
    }



    apple.show();
    fill(43, 51, 25);
    text("Score: " + int(snakeHead.score), 10, height - 25);
    text("Highest: " + int(highest), 10, height - 10);
    snakeHead.show();
    noFill();
    strokeWeight(2);
    stroke(43, 51, 25);
    rect(1, 1, width - 2, height - 2);

}

function keyPressed() {
    // ugye ha a kigyo nem jobbra megy akkor lehessen balra elmenni stb...
    if (keyCode == LEFT_ARROW && snakeHead.dir != 'right') {
        snakeHead.dir = 'left';
    } else if (keyCode == RIGHT_ARROW && snakeHead.dir != 'left') {
        snakeHead.dir = 'right';
    } else if (keyCode == UP_ARROW && snakeHead.dir != 'down') {
        snakeHead.dir = 'up';
    } else if (keyCode == DOWN_ARROW && snakeHead.dir != 'up') {
        snakeHead.dir = 'down';
    }
}