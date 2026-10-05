/**
 * Loot Chest 
 * Athanasia (Sia) Iliopoulos 
 * 
 * This will be a fun loot chest. Everytime it is opened it will either be gold or a skull. 
 */

"use strict";

//Variables to make lootchest work

let treasure;
let chestOpen = false;

/**
 * Canvas for loot chest
*/
function setup() {
createCanvas(500, 500);
}


/**
 * Drawing of the chest that opens up and gives loot. 
*/
function draw() {

    //Background color
    background("#d678ba");

    //Text
    push();
    noStroke();
    fill("#ffffff");
    textSize(20);
    textAlign(CENTER, CENTER);
    

    if(chestOpen === false) {
      text("Click on the chest to reveal your loot!", 250, 100);
      
    } 

    if (chestOpen === true) {
        if (treasure === 1) {
            text("You found gold!", 250, 100);
            
        }

        if (treasure === 2) {
            text("Oh no! You found a skull!", 250, 100);
        }
        }
        pop();



    // Chest
    push();
    fill("#8b542f");
    stroke("#4a2b1a");
    strokeWeight(6);
    
    // Chest bottom
    rect(150, 280, 200, 100);
    
    // Chest lid
    if (chestOpen === false) {
        arc(250, 280, 200, 100, PI, TWO_PI);
        }
        pop();
    
   // Lock
   if (chestOpen === false) {
    push();
    fill("#f5d76e");
    stroke("#4a2b1a");
    strokeWeight(4);
    rect(235, 270, 30, 35);
    pop();
  }

   // loot
    if (chestOpen === true) {

        //Gold 
        if (treasure === 1) {
            push();
            stroke("#ffffff");
            fill("#ffcc5d");
            rect(210, 200, 80, 30);
            pop();

            //Gold shine
            push();
            fill("#ffffff");
            noStroke();
            rect(265, 210, 20, 8);
            pop();
        }

          // Skull
          if (treasure === 2) {
          push();

         // Skull head
           fill("#eeeeee");
           noStroke();
           ellipse(250, 215, 70, 65);
           pop();
          }



    }
}
        
 //opening chest action when clicked
 function mousePressed() { 
    if (mouseX > 150 && mouseX < 350 &&
        mouseY > 230 && mouseY < 380) {

      chestOpen = true;

      //Randomly choose gold or skull
      treasure = int(random(1, 3));

        }

}    
