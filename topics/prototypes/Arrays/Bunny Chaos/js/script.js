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
/**
 * Sets up the canvas 
 */
async function setup() {
    createCanvas(800, 600);
    bunnyImage = await
        loadImage("js/assets/images/Peanut the bunny.png");
    bunnyImage.resize(500, 500);
}


/**
 * Bunny drawing and background drawing
 */
function draw() {
    background("#ffb5e1");
    image(bunnyImage, 250, 200, 500, 500);
}


/**
 * Load bunny image
 */
function preload() {
    bunnyImage = loadImage("js/assets/images/bunny.png");
}
