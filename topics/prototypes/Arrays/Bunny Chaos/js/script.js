/**
 * Bunny Chaos
 * Athanasia (Sia) Iliopoulos
 * 
 * Everytime you click the bunny more bunnies will appear on the screen.
 * 
 */

"use strict";

// Bunny Image
let bunnyImage;

// Bunny Array
let bunnies = [];

// First bunny
let firstBunny = {
    x: 250,
    y: 100,
    size: 300
};

/**
 * Sets up the canvas 
 */
async function setup() {
    // Canvas size
    createCanvas(800, 600);

    // Load bunny image
    bunnyImage = await
        loadImage("js/assets/images/Peanut the bunny.png");

    // Add first bunny to the array
    bunnies.push(firstBunny);
}


/**
 * Bunny drawing and background drawing
 */
function draw() {
    // Background
    background("#ffb5e1");

    // Draw all the bunnies
    for (let i = 0; i < bunnies.length; i++) {
        drawBunny(bunnies[i].x, bunnies[i].y, bunnies[i].size);
    }

    // Text
    push();
    textSize(30);
    textFont("monospace");
    textAlign(CENTER);
    fill("#21150c");

    // Change text depending on number of bunnies
    if (bunnies.length < 5) {
        text("Oh look, a fluffy bunny!", 400, 50);
    }
    else {
        text("OH NO! TOO MANY BUNNIES!", 400, 50);
    }
    pop();
}


/**
 * Draws a bunny
 */
function drawBunny(x, y, size) {
    image(bunnyImage, x, y, size, size);
}

/**
 * Checks if a bunny was clicked
 */
function mousePressed() {

    // Check every bunny
    for (let i = 0; i < bunnies.length; i++) {

        // Get the current bunny
        let bunny = bunnies[i];

        // Check if the mouse clicked the bunny
        if (mouseX > bunny.x &&
            mouseX < bunny.x + bunny.size &&
            mouseY > bunny.y &&
            mouseY < bunny.y + bunny.size) {

            // Create a new bunny
            let newBunny = {
                x: random(0, 700),
                y: random(0, 500),
                size: bunny.size
            };

            // Add new bunny to the array
            bunnies.push(newBunny);

            break;
        }
    }
}