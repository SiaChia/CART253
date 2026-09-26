/**
 * Ultimate Mushroom
 * Athanasia (Sia) Iliopoulos 
 * 
 * This will be a mushroom continuesly growing in a forest during fall. 
 */

"use strict";

//Making the action for mushroom
let mushroomSize = 20;

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
strokeWeight(5); 
fill("#da4e2c");
rect(-4, 390, 800, 200);   
pop(); 

//trees

//trunks
push()
noStroke(); 
fill("#da4e2c");
rect(30, 275, 45, 120);
rect(565, 275, 45, 120);
pop();

//leaves 
push();
noStroke();
fill("#da4e2c");
ellipse(587, 250, 180, 145);
ellipse(52, 250, 180, 145);
pop(); 

//Mushroom Growth
mushroomSize += 0.05;

//Mushroom

// Stem
push();
noStroke();
fill("#b49569");
rect(305, 365 - mushroomSize, 30, mushroomSize + 30);
pop(); 

//Top of mushroom 
push();
noStroke();
fill("#751111");
ellipse(320, 365 - mushroomSize, mushroomSize * 3, mushroomSize);
pop();

}
