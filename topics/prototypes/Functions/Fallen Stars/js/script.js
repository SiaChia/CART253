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
}