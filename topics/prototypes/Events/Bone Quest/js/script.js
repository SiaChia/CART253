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
let dogSpeed = 5;

// Bone Variables
let boneX = 420;
let boneY = 420;

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
        text("Click to Start", 250, 250)
        pop();

    } else {

        // Use arrow keys to move dog 
        if (keyIsDown(LEFT_ARROW)) {
            dogX = dogX - dogSpeed;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            dogX = dogX + dogSpeed;
        }

        if (keyIsDown(UP_ARROW)) {
            dogY = dogY - dogSpeed;
        }

        if (keyIsDown(DOWN_ARROW)) {
            dogY = dogY + dogSpeed;
        }

        // If the dog finds the bone
        if (dist(dogX, dogY, boneX, boneY) < 40) {
            boneFound = true;
        }

        // White flowers

        // Flower 1
        push()
        noStroke();
        fill("#fff5e6");
        ellipse(260, 350, 20, 20);
        fill("#f5d547");
        ellipse(260, 350, 9, 9);
        pop();

        // Flower 2
        push()
        noStroke();
        fill("#fff5e6");
        ellipse(200, 250, 20, 20);
        fill("#f5d547");
        ellipse(200, 250, 9, 9);
        pop();

        // Flower 3
        push()
        noStroke();
        fill("#fff5e6");
        ellipse(100, 100, 20, 20);
        fill("#f5d547");
        ellipse(100, 100, 9, 9);
        pop();


        // Bone drawing 
        push();
        noStroke();
        fill("#f5eee0");

        // Rectangle in the middle
        rect(boneX - 15, boneY - 6, 30, 12);

        // Circle on the left
        ellipse(boneX - 15, boneY, 16, 16);

        // Circle on the right
        ellipse(boneX + 15, boneY, 16, 16);
        pop();
        // Draw the dog 
        push();
        translate(dogX, dogY);
        drawDog();
        pop();

        // Draw the Bush
        push();
        noStroke();
        fill("#286b32");
        ellipse(boneX + 20, boneY, 55, 50);
        ellipse(boneX + 40, boneY - 10, 45, 45);
        ellipse(boneX + 50, boneY + 5, 40, 38);
        pop();

        // If win
        if (boneFound === true) {
            push();
            textAlign(CENTER, CENTER);
            textFont("monospace");
            textSize(20);
            fill("#131e15");
            text("Yay! You found a bone!", 250, 50);
            pop();
        }

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

    // Nose 
    push();
    noStroke();
    fill("#000000");
    ellipse(73, -12, 8, 8);
    pop();

    // Eye
    push();
    noStroke();
    fill("#30211b")
    ellipse(47, -15, 10, 10);
    pop();

    // Blush
    push();
    noStroke();
    fill("#ff9eb5")
    ellipse(40, -7, 12, 7);
    pop();

    //Tail
    push();
    stroke("#754323");
    strokeWeight(12);
    line(-40, -10, -55, -25);
    pop();

    // Legs
    push();
    noStroke();
    fill("#874d29");

    // Back leg
    ellipse(-25, 22, 18, 30);

    // Front leg
    ellipse(25, 22, 18, 30);
    pop();

    //Ear
    push();
    noStroke();
    fill("#754323")
    ellipse(25, -15, 20, 50);
    pop();
}

/** Click to start the game 
 */
function mousePressed() {
    gameStarted = true;
}

