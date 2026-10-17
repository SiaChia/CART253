/**
 * Bone Quest 
 * Athanasia (Sia) Iliopoulos 
 * 
 * This will be a mini game of a dog on a quest trying to find his bone. 
 * 
 */

"use strict";


// Variables for dog 
let dogX = 80;
let dogY = 100;
let dogSpeed = 10;

// Bone Variables
let boneX = 150;
let boneY = 250;

// Game variables 
let gameStarted = false;
let boneFound = false;


/**
 * Canvas setup for dog trying to find a bone 
*/
function setup() {
    createCanvas(500, 500)
}

/**
 * This will be the colour of my background and the drawing of the dog and the bone
*/
function draw() {
    // Background colour 
    background("#54b44c")

    //Title screen
    if (gameStarted === false) {

        //Title screen text settings
        push();
        textAlign(CENTER, CENTER);
        noStroke();
        fill("#131e15");

        // Game Title
        textFont("monoSpace")
        textSize(40);
        text("BONE QUEST", 250, 80);

        // Game description
        textFont("monospace");
        textSize(18);
        text("Help the dog find its bone!", 250, 120);

        // Start Instructions
        textFont("monospace")
        textSize(18);
        text("Click to Start", 250, 150)
        pop();

    } else {
        // Draw the dog 
        push();
        translate(dogX, dogY);
        drawDog();
        pop();
    }
}

/**
 * Dog Drawing
 */
function drawDog() {

    // Body
    push();
    noStroke();
    fill("#9b6038")
    ellipse(0, 0, 95, 50);
    pop();

    // Head 
    push();
    noStroke();
    fill("#aa7044")
    ellipse(42, -20, 52, 50);
    pop();

    // Snout 
    push();
    noStroke();
    fill("#ae7044");
    ellipse(61, -10, 26, 18);
    pop();

}

/** Click to start the game 
 */
function mousePressed() {
    gameStarted = true;
}