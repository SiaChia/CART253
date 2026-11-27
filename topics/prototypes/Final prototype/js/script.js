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

// Game state
let gameOver = false;

// Level button positions
let level1X = 150;
let level2X = 320;
let level3X = 490;
let levelY = 320;
let levelSize = 120;

// Level 1 object images
let dresserImage;
let lampImage;
let mirrorImage;
let bunnyImage;
// Bunny visibility
let bunnyVisible = true;
let rockingChairImage;
let entityImage;

// Health heart image
let heartImage;

// Level timer
let timer = 10;
let startTime;
let memorizing = true;

// Player health
let health = [true, true, true];

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

    // Load Level 1 objects
    dresserImage = await loadImage("assets/images/dresser.png");
    lampImage = await loadImage("assets/images/lamp.png");
    mirrorImage = await loadImage("assets/images/mirror.png");
    bunnyImage = await loadImage("assets/images/stuffedbunny.png");
    heartImage = await loadImage("assets/images/heart.png");
    entityImage = await loadImage("assets/images/entity.png");
    rockingChairImage = await loadImage("assets/images/Chair.png");
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
    text("You have 10 seconds to remember where everything is.", 320, 290);
    text("When something changes or disappears,", 320, 330);
    text("Click on the area that is different.", 320, 365);
    text("Remember wrong, you lose a heart.", 320, 400);

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

    // Level buttons

    // Level selection circles
    stroke("#ffc8e3");
    strokeWeight(3);
    fill("#3f0101");

    ellipse(level1X, levelY, levelSize, levelSize);
    ellipse(level2X, levelY, levelSize, levelSize);
    ellipse(level3X, levelY, levelSize, levelSize);

    // Level numbers

    textFont("Chiller");
    textAlign(CENTER, CENTER);
    textSize(70);
    fill("#ffc8e3");

    strokeWeight(1.5);
    text("1", level1X, levelY);
    text("2", level2X, levelY);
    text("3", level3X, levelY);

    // back button for level selection screen

    noStroke();
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
 * Displays Level 1
 */
function drawLevel1Screen() {

    // Timer countdown
    if (memorizing === true) {
        timer = 10 - (millis() - startTime) / 1000;

        if (timer <= 0) {
            timer = 0;
            memorizing = false;
            bunnyVisible = false;
        }
    }


    // Room background
    image(roomBackground, 0, 0, 640, 600);

    // Objects

    // Lamp
    image(lampImage, 210, 90, 200, 250);

    // Dresser
    image(dresserImage, 170, 120, 400, 400);

    // Mirror
    image(mirrorImage, 400, 50, 370, 500);

    // Rocking chair
    image(rockingChairImage, -70, 180, 400, 450);

    // Stuffed bunny
    if (bunnyVisible === true) {
        image(bunnyImage, 300, 350, 210, 240);
    }


    // Timer display

    push();

    textFont("Chiller");
    textSize(50);
    textAlign(CENTER, CENTER);
    noStroke();

    // Red shadow
    fill("#650000");
    text(ceil(timer), 583, 43);

    // Pink timer
    fill("#ffc8e3");
    text(ceil(timer), 580, 40);

    pop();

    // Display health
    drawHealth();
}

/**
 * Displays the player's health
 */
function drawHealth() {

    // Draw each remaining heart
    for (let i = 0; i < health.length; i++) {

        if (health[i] === true) {
            image(heartImage, 20 + i * 90, 20, 80, 80);
        }

    }
}

/**
 * Displays the game over screen
 */
function drawGameOverScreen() {

    // Background image
    image(instructionsBackground, 0, 0, 640, 600);

    // YOU DIED title
    push();

    textFont("Chiller");
    textSize(100);
    textAlign(CENTER, CENTER);
    noStroke();

    // Dark red shadow
    fill("#650000");
    text("YOU DIED", 323, 183);

    // Main pink title
    fill("#ffc8e3");
    text("YOU DIED", 320, 180);

    pop();

    // Retry button
    push();

    rectMode(CENTER);
    strokeWeight(2);
    stroke("#ffc8e3");
    fill("#3f0101");

    // Button background
    rect(320, 360, 140, 55);

    // Retry text
    textAlign(CENTER, CENTER);
    textFont("Chiller");
    textSize(40);
    noStroke();
    fill("#ffc8e3");
    text("RETRY", 320, 365);

    pop();
}

/**
 * Restarts the current level
 */
function retryGame() {

    // Reset game over state
    gameOver = false;

    // Restore player health
    health = [true, true, true];

    // Reset the bunny
    bunnyVisible = true;

    // Restart timer
    timer = 10;
    startTime = millis();
    memorizing = true;
}


/**
 * Drawing background images and furniture images
 */
function draw() {

    // Game over screen
    if (currentScreen === "level1" && gameOver === true) {
        drawGameOverScreen();
    }

    // Title screen
    else if (currentScreen === "title") {
        image(roomBackground, 0, 0, 640, 600);
        drawTitle();
        drawPlayButton();
        drawInstructionsButton();
    }

    // Instructions screen
    else if (currentScreen === "instructions") {
        image(instructionsBackground, 0, 0, 640, 600);
        drawInstructionsScreen();
    }

    // Level selection screen
    else if (currentScreen === "levels") {
        image(instructionsBackground, 0, 0, 640, 600);
        drawLevelSelectionScreen();
    }

    // Level 1 screen
    else if (currentScreen === "level1") {
        drawLevel1Screen();
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

    // Level 1 button
    else if (currentScreen === "levels" &&
        mouseX > level1X - levelSize / 2 &&
        mouseX < level1X + levelSize / 2 &&
        mouseY > levelY - levelSize / 2 &&
        mouseY < levelY + levelSize / 2) {

        currentScreen = "level1";


        timer = 10;
        startTime = millis();
        memorizing = true;

    }

    // Retry button on game over screen
    else if (currentScreen === "level1" &&
        gameOver === true &&
        mouseX > 250 && mouseX < 390 &&
        mouseY > 332 && mouseY < 388) {

        retryGame();
    }

    // Find the missing bunny
    else if (currentScreen === "level1" &&
        memorizing === false &&
        bunnyVisible === false) {

        // Correct click: clicked where the bunny disappeared
        if (mouseX > 300 && mouseX < 510 &&
            mouseY > 350 && mouseY < 590) {

            bunnyVisible = true;
        }

        // If the player clicks outside the bunny
        else {

            // Remove one heart
            for (let i = 0; i < health.length; i++) {

                if (health[i] === true) {
                    health[i] = false;
                    break;
                }
            }

            // Count remaining hearts
            let heartsLeft = 0;

            for (let i = 0; i < health.length; i++) {

                if (health[i] === true) {
                    heartsLeft++;
                }
            }

            // Game over when all hearts are gone
            if (heartsLeft === 0) {
                gameOver = true;
            }
        }

    }
}