/**
 * Out of Place 
 * Athanasia (Sia) Iliopoulos 
 * 
 * "Out of Place" is a interactive game where you are stuck in a creepy unsettling room that changes as levels increase. When the room changes, you as a player will need to remember what has changed. Once yoy recognized what has changed or missing, click on that area. There will be three interactive levels to this game. 
 * 
 */

"use strict";

// Background images

let roomBackground;
let instructionsBackground;

// Current screen
let currentScreen = "title";

/**
 * Canvas setup for the game 
 */
async function setup() {
    // Canvas size
    createCanvas(640, 600);

    // Load background image
    roomBackground = await
        loadImage("assets/images/bloodyroom.png");

    // Load instructions background
    instructionsBackground = await
        loadImage("assets/images/instructionsscreen.png");
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
 * Displays the play button
 */
function drawPlayButton() {
    push();
    rectMode(CENTER);
    strokeWeight(2);
    stroke("#ffc8e3");
    fill("#3f0101");
    rect(320, 340, 140, 55);

    textAlign(CENTER, CENTER);
    textFont("Chiller");
    textSize(40);
    noStroke();
    fill("#ffc8e3");
    text("PLAY", 320, 345);
    pop();
}

/**
 * Displays the instructions button
 */
function drawInstructionsButton() {
    push();

    // Button text alignment
    textAlign(CENTER, CENTER);
    textFont("Chiller");
    textSize(50);

    // Red shadow

    fill("#650000");
    text("INSTRUCTIONS", 323, 253);

    // Main text
    fill("#ffc8e3");
    text("INSTRUCTIONS", 320, 250);

    pop();
}

/**
 * Displays the instructions screen
 */
function drawInstructionsScreen() {

    push();

    textAlign(CENTER, CENTER);
    textFont("Chiller");
    textSize(70);

    // Red shadow
    fill("#650000");
    text("HOW TO PLAY", 323, 150);

    // Main title
    fill("#ffc8e3");
    text("HOW TO PLAY", 320, 147);

    // Instructions
    textFont("impact");
    textSize(22);
    fill("#ffc8e3");

    text("Look carefully at the room.", 320, 250);
    text("Remember where everything is.", 320, 290);
    text("When something changes or disappears,", 320, 330);
    text("Click on the area that is different.", 320, 365);
    text("Remember wrong, you lose a heart.", 320, 395);

    // Back button for instructions screen

    textFont("Chiller");
    textSize(30);

    // Red shadow
    fill("#650000");
    text("BACK", 102, 503);

    // Main text
    fill("#ffc8e3");
    text("BACK", 100, 500);

    pop();
}

/**
 * Displays the level selection screen
 */
function drawLevelSelectionScreen() {

    push();

    // Level selection title

    textFont("Chiller");

    // Title alignment
    textAlign(CENTER, CENTER);
    textSize(70);

    // Red shadow
    fill("#650000");
    text("LEVEL SELECTION", 323, 120);

    // Main title
    fill("#ffc8e3");
    text("LEVEL SELECTION", 320, 117);

    // back button for level selection screen

    textFont("Chiller");
    textSize(30);

    // Red shadow
    fill("#650000");
    text("BACK", 102, 503);

    // Main text
    fill("#ffc8e3");
    text("BACK", 100, 500);

    pop();

}

/**
 * Drawing background images and furniture images
 */
function draw() {

    // Title screen
    if (currentScreen === "title") {

        // Background image
        image(roomBackground, 0, 0, 640, 600);

        // title sceen
        drawTitle();

        // Play button
        drawPlayButton();

        // Instructions button
        drawInstructionsButton();
    }

    // Instructions screen
    else if (currentScreen === "instructions") {

        image(instructionsBackground, 0, 0, 640, 600);

        drawInstructionsScreen();
    }

    // Level selection screen
    else if (currentScreen === "levels") {

        // Background image
        image(instructionsBackground, 0, 0, 640, 600);

        drawLevelSelectionScreen();
    }
}

/**
 * Checks if the mouse is pressed
 */
function mousePressed() {

    // Instructions button
    if (currentScreen === "title" &&
        mouseX > 225 && mouseX < 415 &&
        mouseY > 225 && mouseY < 275) {

        currentScreen = "instructions";
    }

    // Play button
    else if (currentScreen === "title" &&
        mouseX > 250 && mouseX < 390 &&
        mouseY > 310 && mouseY < 370) {

        currentScreen = "levels";
    }

    // Back buttons

    // Instruction screen 
    else if (currentScreen === "instructions" &&
        mouseX > 65 && mouseX < 135 &&
        mouseY > 480 && mouseY < 520) {

        currentScreen = "title";
    }

    // Back button on level selection
    else if (currentScreen === "levels" &&
        mouseX > 65 && mouseX < 135 &&
        mouseY > 480 && mouseY < 520) {

        currentScreen = "title";
    }


}