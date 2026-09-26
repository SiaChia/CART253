/**
 * Ultimate Mushroom
 * Athanasia (Sia) Iliopoulos 
 * 
 * This will be a mushroom continuesly growing in a forest during fall. 
 */

"use strict";

/**
 * Canvas for the drawinf of mushroom growing 
*/
function setup() {
createCanvas(640,480);
}


/**
 * Drawing of mushroom growimng and fall scene.
*/
function draw() {
background("#e77c25")

// Sun 
push();
noStroke();
fill("#ecc884");
ellipse(320, 380, 155, 140);
pop(); 

// land
push();
stroke("#fc9b4c");
strokeWeight(8); 
fill("#c74c1b");
rect(-4, 390, 800, 200);   
pop(); 






}
