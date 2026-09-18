/**
 * Weird Unsettling Face
 * Athanasia (Sia) Iliopoulos
 * 
 * A weird unsettling face that can maybe be used as a logo for a horror game or something idk. 
 */

"use strict";

/**
 * Canvas for creepy face 
*/
function setup() {
createCanvas(450, 500);
background("#000000");
}


/**
 * Creepy face that is drawn on the canvas
*/
function draw() {
//head
push();
fill("#575454");
stroke("#313030");
strokeWeight(5);
ellipse(225, 250, 300, 350);
pop();

//eyes
push();
fill("#ffeacc");
stroke("#fffafa");
strokeWeight(5);
ellipse(150, 200, 90, 90);
ellipse(300, 200, 90, 90);
pop();

//pupils
push();
fill("#000000");
stroke("#000000");
strokeWeight(5);
ellipse(150, 200, 30, 30);
ellipse(300, 200, 30, 30);
pop();


}