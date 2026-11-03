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
}


/**
 * Draws a bunny
 */
function drawBunny(x, y, size) {
    image(bunnyImage, x, y, size, size);
}