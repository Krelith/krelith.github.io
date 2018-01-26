function Marker(size, clr){
    this.x = mouseX;
    this.y = mouseY;
    this.size = size;
    this.clr = clr;
    
    this.show = function() {
        fill(this.clr);
        ellipse(this.x, this.y, this.size, this.size);
    }
}


let currentSize;
let colour;
let colourText;
let marker = [];

function setup(){
    createCanvas(800,600);
    background(255);
    currentSize = 10;
    colourBlack();
}

function draw(){
    noStroke();
    fill(0);
    background(255);
    for (let i = 0; i < marker.length; i++){
        marker[i].show();
    }
    if (colour == color(255,255,255)){
        stroke(colour);
    } else {
        stroke(0);
    }
    noFill();
    ellipse(mouseX, mouseY, currentSize, currentSize);
}

function mousePressed(){
    marker.push(new Marker(currentSize, colour));
    marker[marker.length - 1].show();
}

function mouseDragged(){
    marker.push(new Marker(currentSize, colour));
    marker[marker.length - 1].show();
}

function sizeUp(){
    if (currentSize == 1){
        currentSize = 10;
    } else {
        currentSize += 10;
    }
    newSize();
}

function sizeDown(){
    if (currentSize == 10 || currentSize == 1){
        currentSize = 1;
    } else {
        currentSize -= 10;
    }
    newSize();
}

function colourRed(){
    colour = color(255,0,0);
    colourText = "Red";
    newColour();
}

function colourGreen(){
    colour = color(0,255,0);
    colourText = "Green";
    newColour();
}

function colourBlue(){
    colour = color(0,0,255);
    colourText = "Blue";
    newColour();
}

function colourWhite(){
    colour = color(255,255,255);
    colourText = "White";
    newColour();
}

function colourBlack(){
    colour = color(0,0,0);
    colourText = "Black";
    newColour();
}

function newColour(){
    $(document).ready(function(){
        $('.currentColour').text("Colour: " + colourText);
        $('.colshow').css('background-color', colour);
    })
}

function newSize(){
    $(document).ready(function(){
        $('.currentSize').text("Size: " + currentSize);
    })
}

function clearScreen(){
    for (let i = marker.length; i > 0; i--){
        marker.pop();
    }
}