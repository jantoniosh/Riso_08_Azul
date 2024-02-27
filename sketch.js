let black;
let blues = new Array(2);
let img;
let ditherType = 'atkinson';

function preload() {
    img = loadImage('data/main.png');
}

function setup() {
    pixelDensity(1);
    createCanvas(1080, 1080);
    black = new Riso('black');
    blues[0] = new Riso('blue');
    blues[1] = new Riso('cornflower');
    blues[2] = new Riso('skyblue');
    blues[3] = new Riso('aqua');
    noLoop();
}

function draw() {
    background(255);

    clearRiso();

    // Combinación 1

    let dithered = ditherImage(img, ditherType, 255);
    black.fill(150);
    black.imageMode(CENTER);
    black.image(dithered, width / 2, height / 2, 1000, 1000);

    let textGraphic = createGraphics(width, height);
    textGraphic.fill(0);
    textGraphic.textStyle(BOLD);
    textGraphic.textFont('Helvetica');
    textGraphic.textSize(160);
    textGraphic.text('AZUL', 70, 190);
    black.cutout(textGraphic);
    for (let i = 0; i < 8; i++) {
        let sel;
        if (i < 4) {
            sel = i;
        }
        else {
            sel = i - 4;
        }
        blues[sel].noStroke();
        blues[sel].fill(250);
        blues[sel].quad(40, 1040 - (i * 125), 40, 1040 - ((i + 1) * 125), 40 + ((i + 1) * 125), 1040, 40 + (i * 125), 1040)
        blues[sel].quad(40 + (i * 125), 40, 40 + ((i + 1) * 125), 40, 1040, 1040 - ((i + 1) * 125), 1040, 1040 - ((i) * 125));
        blues[sel].cutout(textGraphic);
    }

    drawRiso();
}

function mousePressed() {
    // exportRiso();
}