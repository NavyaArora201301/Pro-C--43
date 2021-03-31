
var sun;
var mercury;
var venus;
var earth;
var mars;
var jupiter;
var saturn;
var uranus;
var neptune;

var background;
var wel;
var database;
var gameStates;
var playerCount;

function preload(){
    bg_img=loadImage("images/galaxy.jpg");
    mercury_img= loadImage("images/mercury.png");
    venus_img= loadImage("images/venus.png");
    earth_img= loadImage("images/earth.png");
    mars_img= loadImage("images/mars.png");
    jupiter_img= loadImage("images/jupiter.png");
    saturn_img= loadImage("images/saturn.png");
    uranus_img= loadImage("images/uranus.png");
    neptune_img= loadImage("images/neptune.png");
}



function setup(){
  database=firebase.database();
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
wel=new Welcome();
wel.display();
}


function draw(){
background(bg_img);
}