var sea,fish;
function preload(){
    sea=loadImage('image/sea.png');
    fish=loadImage('image/fish.png');
}
function setup() {
    createCanvas(1700,1000);
    
}

function draw() {
    background(251,249,238);
    image(sea,0,300,1700,1000);
    image(fish,200,500,50,50);
}
