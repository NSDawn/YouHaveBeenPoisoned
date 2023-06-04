
const SCENES = {
    "GAME": new sceneGame,
}

var currentScene = ""
const IMG = {};
const FONT = {};
const SFX = {};
var isMouseClicked = false;

function setup() {
    // setup runs once for the entire program
    createCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y); // defined in style.js
    startGame();
    SCENES[currentScene].init();
    resizeScreen();

}

function preload() {
    for (let k = 0; k < IMG_LIST.length; k++) {
        IMG[IMG_LIST[k].replace(".png", "")] = loadImage("assets/images/" + IMG_LIST[k])
    }
    for (let k = 0; k < FONT_LIST.length; k++) {
        FONT[FONT_LIST[k]] = loadFont("assets/fonts/" + FONT_LIST[k] + ".ttf");
    }
    for (let k = 0; k < SFX_LIST.length; k++) {
        const newSFX = new Audio('assets/sfx/' + SFX_LIST[k])
        SFX[SFX_LIST[k].replace(".mp3", "")] = newSFX;
    }
}

function draw() {
    background(220);
    SCALE = CANVAS_SIZE.x/256
    scale(SCALE);
    noSmooth();

    SCENES[currentScene].draw()

    //reset inputs
    isMouseClicked = false;
    

    resizeScreen();
}

function startGame() {
    currentScene = "GAME"
}

function changeScene(scene) {
    currentScene = scene;
    SCENES[currentScene].init();
}

function resizeScreen() {
    // resize screen?
    let originalWidth = CANVAS_SIZE.x;
    if (windowWidth * 9 <= windowHeight * 16) {
        CANVAS_SIZE = new v2(windowWidth, windowWidth * (9/16));
    } else {
        CANVAS_SIZE = new v2(windowHeight*(16/9), windowHeight);
    }

    if (originalWidth != CANVAS_SIZE.x) {
        resizeCanvas(CANVAS_SIZE.x, CANVAS_SIZE.y);
    }
}

function mouseClicked() {
    isMouseClicked = true;
}