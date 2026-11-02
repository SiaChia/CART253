/**
 * Bunny Madness
 * Athanasia (Sia)
 * 
 * This will be an interactive drawing where you click the bunny and more bunnies appear.
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
function setup() {
    createCanvas(800, 600);

    // Create the first bunny
    let firstBunny = {
        x: 250,
        y: 200,
        size: 100
    };
    bunnies.push(firstBunny);
}


/**
 * Bunny drawing and background drawing
*/
function draw() {
    background("#ffb5e1");
}

/**
 * Load bunny image
 */
function preload() {
    bunnyImage = loadImage("./assets/images/bunny loaf.png");
}