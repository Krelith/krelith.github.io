function Rectangle(x, y, w, h, t, r, g, b){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
    this.r = r;
    this.g = g;
    this.b = b;
    
    this.show = function(){
        fill(this.r, this.g, this.b);
        angleMode(DEGREES);
        rotate(this.t);
        rect(this.x, this.y, this.w, this.h);
        this.r = Math.floor((Math.random() * 255) + 1);
        this.g = Math.floor((Math.random() * 255) + 1);
        this.b = Math.floor((Math.random() * 255) + 1);
        
    }
}

var rects = [];
var randomColour;

rects.push(new Rectangle(50, 20, 30, 300, 0, 255, 255, 255));
rects.push(new Rectangle(150, -80, 30, 150, 40, 255, 255, 255));
rects.push(new Rectangle(-50, 170, 30, 200, -80, 255, 255, 255));
rects.push(new Rectangle(-280, 220, 30, 120, -60, 255, 255, 255));
rects.push(new Rectangle(-350, 0, 30, 80, -40, 255, 255, 255));
rects.push(new Rectangle(0, 350, 30, 80, 80, 255, 255, 255));
rects.push(new Rectangle(-80, 350, 30, 80, 0, 255, 255, 255));
rects.push(new Rectangle(280, 350, 30, 80, 30, 255, 255, 255));
rects.push(new Rectangle(500, -120, 30, 80, 60, 255, 255, 255));
rects.push(new Rectangle(510, -250, 10, 30, 10, 255, 255, 255));
rects.push(new Rectangle(330, -570, 30, 80, 30, 255, 255, 255));
rects.push(new Rectangle(400, -550, 30, 80, 0, 255, 255, 255));
rects.push(new Rectangle(-110, -670, 20, 80, 45, 255, 255, 255));
rects.push(new Rectangle(-110, -700, 30, 280, 45, 255, 255, 255));
rects.push(new Rectangle(240, -500, 30, 160, -50, 255, 255, 255));
rects.push(new Rectangle(530, -100, 30, 110, -50, 255, 255, 255));

function setup(){
    createCanvas(screen.width, screen.height);
    angleMode(DEGREES);
    frameRate(5);
}

function draw(){
    background(255);
    for (let i = 0; i < rects.length; i++){
        rects[i].show();
    }    
}