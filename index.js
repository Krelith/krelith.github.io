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
rects.push(new Rectangle(480, -400, 30, 110, 10, 255, 255, 255));
rects.push(new Rectangle(-220, -610, 30, 80, 80, 255, 255, 255));
rects.push(new Rectangle(320, -650, 30, 120, -50, 255, 255, 255));
rects.push(new Rectangle(720, 100, 30, 120, -70, 255, 255, 255));
rects.push(new Rectangle(350, 680, 30, 260, -35, 255, 255, 255));
rects.push(new Rectangle(-420, 670, 30, 120, -60, 255, 255, 255));
rects.push(new Rectangle(850, 110, 30, 120, 110, 255, 255, 255));
rects.push(new Rectangle(380, 750, 30, 230, -60, 255, 255, 255));
rects.push(new Rectangle(520, 880, 25, 100, 0, 255, 255, 255));
rects.push(new Rectangle(-240, 1000, 20, 70, -40, 255, 255, 255));
rects.push(new Rectangle(-1020, 130, 20, 70, -70, 255, 255, 255));
rects.push(new Rectangle(-1120, -430, 20, 170, -30, 255, 255, 255));
rects.push(new Rectangle(-270, -1130, 20, 70, -60, 255, 255, 255));

function setup(){
    createCanvas(screen.width/2, screen.height);
    angleMode(DEGREES);
    frameRate(5);
    canvas = document.getElementsByTagName('canvas');
    showMenu = false;
}

function draw(){
    background(255);
    for (let i = 0; i < rects.length; i++){
        rects[i].show();
    }    
}