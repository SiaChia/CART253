/**
 * Pink Space Portal
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

//fifth circle
push ();
fill("#9b1f5e");
noStroke();
ellipse(320, 320, 100, 100);
pop();


//triangle object 
push ();
fill("#ff86c3");
stroke("#f7f0f3");
triangle(320, 200, 400, 440, 400);
pop();

//star object
push ();
fill("#df46b1");
stroke("#f7f0f3");
beginShape();
vertex(400, 100);
vertex(4200);
vertex(420, 180);
vertex(350, 220);
vertex(370, 300);
vertex(320, 250);
vertex(270, 300);
vertex(290, 220);
vertex(220, 180);
vertex(300, 180);
endShape(CLOSE);
pop();

//weird object
push ();
fill("#e70074");
stroke("#f7f0f3");
beginShape();
vertex(0,0);
vertex(200, 150);
vertex(150, 250);
vertex(50, 200);
endShape(CLOSE);
pop();










    
}