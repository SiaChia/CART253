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
      text("Click on chest to reveal your loot!", 250, 100);
      pop();
    } 
        






    


}