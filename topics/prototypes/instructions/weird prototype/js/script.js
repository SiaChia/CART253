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
background("#030335");
}


/**
 * Creepy face that is drawn on the canvas
*/
function draw() {

//body
push();
fill("#575454");
stroke("#313030");
strokeWeight(5);
rect(150, 400, 150, 100);
pop();
    
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

//mouth
push();
fill("rgb(109, 0, 0)");
stroke("#2b0202");
strokeWeight(5);
arc(225, 330, 200, 150, 0, PI); 
pop();

//teeth
push();
fill("#fae6a5");
stroke("#fff7f7");
strokeWeight(5);
rect(150, 335, 30, 30);
rect(190, 335, 30, 30);
rect(230, 335, 30, 30);
rect(270, 335, 30, 30); 
pop();  

//three hairs on head
push();
stroke("#000000");
strokeWeight(5);
line(225, 100, 225, 50);
line(200, 100, 200, 50);
line(250, 100, 250, 50);
pop();


}