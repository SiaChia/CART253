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
//larger circle
push ();
fill("#ff379b");
stroke("#9b004d");
ellipse(320,320, 460, 460);
pop();

//second circle
push ();
fill("#be2a749d");
noStroke();
ellipse(320, 320, 400, 400);
pop();

//third circle
push ();
fill("#c52c78");
noStroke();
ellipse(320, 320, 300, 300);
pop();

//fourth circle
push ();
fill("#af246a");
noStroke();
ellipse(320, 320, 200, 200);
pop();

//triangle
push ();
fill("#ff86c3");
stroke("#f7f0f3");
triangle(320, 200, 400, 440, 400);
pop();







    
}