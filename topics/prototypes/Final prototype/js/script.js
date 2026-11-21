/**
 * Out of Place 
 * Athanasia (Sia) Iliopoulos 
 * 
 * "Out of Place" is a interactive game where you are stuck in a creepy unsettling room that changes as levels increase. When the room changes, you as a player will need to remember what has changed. Once yoy recognized what has changed or missing, click on that area. There will be three interactive levels to this game. 
 * 
 */

"use strict";

// Background image
let roomBackground;

/**
 * Canvas setup for the game 
 */
async function setup() {
    // Canvas size
    createCanvas(640, 600);

    // Load background image
    roomBackground = await
        loadImage("assets/images/bloodyroom.png");
}

/**
 * Displays the game title
 */
function drawTitle() {

    push();

    // Title font
    textFont("Chiller");

    // Title alignment
    textAlign(CENTER, CENTER);
    textSize(80);

    // Red shadow
    fill("#650000");
    text("OUT OF PLACE", 323, 100);

    // Main title
    fill("#ffc8e3");
    text("OUT OF PLACE", 320, 100);


    pop();
}

/**
 * Drawing background images and furniture images
 */
function draw() {
    // Background image
    image(roomBackground, 0, 0, 640, 600);

    // title sceen
    drawTitle();
}


