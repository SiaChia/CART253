/**
 * Fallen Stars
 * Athanasia (Sia) Iliopoulos 
 * 
 * This will be a small mini game to catch stars in a basket. 
 * 
 */

"use strict";

// Variables for game
let gameStarted = false

/**
 * Canvas for Fallen Stars game 
*/
function setup() {
    createCanvas(740, 500);
}


/**
 * Drawing for Fallen Stars game and background
*/
function draw() {
    // Background colour 
    background("#241652");

    //Stars 
    drawStar(40, 180, 7);
    drawStar(100, 40, 10);
    drawStar(350, 40, 6);
    drawStar(600, 100, 12);
    drawStar(700, 150, 7);
    drawStar(40, 280, 10);
    drawStar(220, 320, 6);
    drawStar(400, 380, 12);
    drawStar(500, 450, 8);
    drawStar(700, 460, 11);
    drawStar(280, 440, 9);
    drawStar(260, 250, 7);
    drawStar(580, 320, 6);
    drawStar(160, 460, 12);
    drawStar(680, 280, 9);

    // Start Screen conditions
    if (gameStarted == false) {
        drawStartScreen(370, 100, 40);
    }

}

function drawStartScreen(x, y, size) {
    // Game title
    push();
    fill("#FFDC82");
    textFont("monospace");
    textStyle(BOLD);
    textAlign(CENTER);
    textSize(size);
    text("Fallen Stars", x, y);
    pop();

    // Game description
    push();
    fill("#FFDC82");
    textFont("monospace");
    textAlign(CENTER);
    textStyle(NORMAL);
    textSize(18);
    text("Catch the falling stars with the basket.", x, y + 60);
    pop();

    // Start button
    push();
    fill("#FFDC82");
    noStroke();
    rect(x - 125, y + 170, 250, 60, 12);

    // Button text
    fill("#241652");
    textFont("monospace");
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(20);
    text("Click to Start", x, y + 207);
    pop();
}

/**
 * Draws a stars in the background
*/
function drawStar(x, y, size) {
    push();
    fill("#f8de9b");
    noStroke();

    beginShape();
    vertex(x, y - size);
    vertex(x + size * 0.25, y - size * 0.25);
    vertex(x + size, y);
    vertex(x + size * 0.25, y + size * 0.25);
    vertex(x, y + size);
    vertex(x - size * 0.25, y + size * 0.25);
    vertex(x - size, y);
    vertex(x - size * 0.25, y - size * 0.25);
    endShape(CLOSE);

    pop();
}

/**
 * Starts the game when the button is clicked
*/
function mousePressed() {
    // Check if the mouse is inside the start button
    if (mouseX > 245 && mouseX < 495 &&
        mouseY > 270 && mouseY < 330) {
        gameStarted = true;
    }
}



