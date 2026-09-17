/**
 * Peanut the Bunny
 * Athanasia (Sia) Iliopoulos 
 * 
 * This is a drawing of my pet rabbit Peanut. I will be drawing him by programming different shapes and colours. 
 */

"use strict";

/**
 * Blue canvas for Peanut the bunny.
 * 
*/
function setup() {
// Once at the beginning of the program
    createCanvas(500, 500);
}


/**
 * This function draws the scene for Peanut the bunny.
 */
function draw() {
    //Every Frame 
    background("#B5DAFE");

    // Head
    push();
    fill("#3C280D");
    noStroke();
    ellipse(250, 280, 250, 230);
    pop();


    // Ears
    push();
    fill("#1A1005");
    noStroke();
    ellipse(130, 290, 65, 220);
    ellipse(370, 290, 65, 220);
    pop();

    //Eyes
    push();
    fill("#000000");
    noStroke();
    ellipse(200, 290, 40, 50);
    ellipse(300, 290, 40, 50);
    pop();

    // Pupils
    push();
    fill("#ffffff");
    noStroke();
    ellipse(210, 280, 15, 20);
    ellipse(310, 280, 15, 20);
    ellipse(190, 300, 10, 15);
    ellipse(290, 300, 10, 15);
    pop();

    //Nose
    push();
    fill("#E6A9A9");
    stroke("black");
    triangle(250, 335, 235, 320, 265, 320);
    pop();

    //Mouth
    push();
    noFill();
    stroke("black");
    strokeWeight(3);
    arc(230, 340,38, 20, 0, PI);
    arc(270, 340, 38, 20, 0, -PI);
    pop();
    

   


    
}
