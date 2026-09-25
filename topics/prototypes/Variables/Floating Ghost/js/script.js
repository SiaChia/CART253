/**
 * Floating Ghost
 * Athanasia (Sia) Iliopoulos 
 * 
 * This prototype will be me exploring variables. It will be a canvas and the object will be a ghost floating in the sky. 
 */

"use strict";

/**
 * Canvas for Floating Ghost 
*/
function setup() {
 createCanvas(640, 480);
 background("#002147")
}


/**
 * Ghost drawing
*/
function draw() {

    //Ghost Body 
    push();
    fill("#FFFFFF");
    noStroke(); 
    
    ellipse(320, 240, 150, 150); 
    rect(245, 255, 150, 60); 

   
    

}