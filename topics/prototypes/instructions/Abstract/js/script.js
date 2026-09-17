/**
 * Pink Noise 
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is an abstract art piece where I play around with creating shapes in different shades of pink. 
 */

"use strict";

/**
 * Canvas for absract piece. 
*/
function setup() {
createCanvas(640, 480);
background("#000000");

}


/**
 * This drawing will contain different shapes in shades of pink. The shapes will be drawn in random positions and sizes.
*/
function draw() {
push ();
fill("#ff379b");
stroke("#c50063");
ellipse(random(width), random(height), random(10, 100), random(10, 100));
pop();
    
}