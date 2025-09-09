/**
 * Landscape
 * Khuong

 */

"use strict";


/**
*/
function setup() {
    createCanvas(640, 480);
    frameRate(30);
}

/**
 */
function draw() {
    // The Sky
    background("lightblue");

    // The Sun
    drawSun();

    // Clouds
    drawClouds();

    // The Mountains
    drawMountains();

    // The Grass
    drawGrass();

    // The Pyramid
    drawPyramid();

    // The Birds
    drawBirds();

    // The Cat
    drawCat();
}

function drawSun() {
    push();
    fill("yellow");
    noStroke();
    ellipse(475, 200, 100, 100);
    pop();
}

function drawClouds() {
    push();
    fill("white");
    noStroke();
    ellipse(550, 110, 85, 85);
    ellipse(575, 95, 80, 80);
    ellipse(595, 110, 85, 85);
    pop();
}

function drawMountains() {
    push();
    fill("grey");
    triangle(0, 300, 150, 100, 300, 300);
    triangle(200, 300, 350, 50, 500, 300);
    triangle(400, 300, 550, 150, 700, 300);
    pop();
}

function drawGrass(){
    push();
    fill("green");
    rect(0, 300, width, height - 300);
    pop();
}

function drawPyramid() {
   push();
    fill("sandybrown");
    stroke("peru");
    strokeWeight(2);
    triangle(270, 300, 320, 180, 370, 300);
    quad(270, 300, 370, 300, 400, 400, 240, 400);
    pop();
}

function drawBirds() {
    push();
    stroke("#000000ff");
    strokeWeight(2);
    noFill();
    arc(210, 60, 20, 20, 0, PI);
    arc(180, 80, 20, 20, 0, PI);
    arc(150, 50, 20, 20, 0, PI);
    pop();
}

function drawCat() {

    // Ears
    push();
    stroke("black");
    strokeWeight(2);
    fill("orange");
    triangle(570, 425, 590, 370, 610, 425);
    triangle(630, 425, 610, 370, 590, 425);
    pop();

    // Head
    push();
    stroke("black");
    strokeWeight(2);
    fill("orange");
    ellipse(600, 450, 80, 100);
    pop();


    // Eyes
    push();
    noStroke();
    fill("black");
    ellipse(585, 430, 20, 20);
    ellipse(620, 430, 20, 20);
    pop();

    // Retina
    push();
    noStroke();
    fill("white");
    ellipse(585, 430, 10, 10);
    ellipse(620, 430, 10, 10);
    pop();

    // Whiskers
    push();
    stroke("black");
    strokeWeight(2);
    line(570, 450, 590, 450);
    line(570, 460, 590, 450);
    line(570, 470, 590, 450);
    line(610, 450, 630, 450);
    line(610, 450, 630, 460);
    line(610, 450, 630, 470);
    pop();

    //  Mouth
    push();
    noFill();
    stroke("black");
    strokeWeight(2);
    arc(595, 455, 10, 10, 0, PI);
    arc(605, 455, 10, 10, 0, PI);
    pop();
}