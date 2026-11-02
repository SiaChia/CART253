/**
 * Bunny Chaos
 * Athanasia (Sia) Iliopoulos
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!=
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
    image(bunnyImage, 250, 200, 100, 100);
}


/**
 * Load bunny image
 */
function preload() {
    bunnyImage = loadImage("assets/images/bunny.png");
}
