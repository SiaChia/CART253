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
    size: 100
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
    bunnyImage.resize(500, 500);


}


/**
 * Bunny drawing and background drawing
 */
function draw() {
    // Background
    background("#ffb5e1");

    // Draw the first bunny
    drawBunny(250, 200, 500);
}

/**
 * Draws a bunny
 */
function drawBunny(x, y, size) {
    image(bunnyImage, x, y, size, size);
}


/**
 * Load bunny image
 */
function preload() {
    bunnyImage = loadImage("js/assets/images/bunny.png");
}
