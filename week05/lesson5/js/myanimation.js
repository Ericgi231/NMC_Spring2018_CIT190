//vars
//

var facingRight = true;
var dogLink = "media/neckr.gif"

var dog = document.getElementById("dog");
var x = 0;
var y = 500;

var up, down, left, right;

//functions
//
function setFacing(){
    if (facingRight) {
        dogLink = "media/neckr.gif";
    } else {
        dogLink = "media/neckl.gif";        
    }
    
    document.getElementById("dogImg").src = dogLink;
}

function activate(speed){
    setInterval(move, speed);
}

function move(){
    if (up) {
        y--;
    }
    if (down) {
        y++;
    }
    if (left) {
        x--;
        facingRight = false;
    }
    if (right) {
        x++;
        facingRight = true;
    }

    if (y <= -250) {
        y++;
    }
    if (y >= window.innerHeight - 100) {
        y--;
    }
    if (x <= -250) {
        x++;
    }
    if (x >= window.innerWidth - 100) {
        x--;
    }

    setFacing();

    dog.style.top = y + "px";
    dog.style.left = x + "px";

    document.getElementById("xCord").value = x;
    document.getElementById("yCord").value = y;
}

function setUp(){
    up = true;
    down = false;
    left = false;
    right = false;
}

function setDown(){
    up = false;
    down = true;
    left = false;
    right = false;
}

function setLeft(){
    left = true;
    right = false;
    up = false;
    down = false;
}

function setRight(){
    left = false;
    right = true;
    up = false;
    down = false;
}

function setUpLeft(){
    up = true;
    down = false;
    left = true;
    right = false;
}

function setUpRight(){
    up = true;
    down = false;
    left = false;
    right = true;
}

function setDownLeft(){
    left = true;
    right = false;
    up = false;
    down = true;
}

function setDownRight(){
    left = false;
    right = true;
    up = false;
    down = true;
}

function stop(){
    up = false;
    down = false;
    right = false;
    left = false;
}

document.getElementById("upLeft").addEventListener("click", setUpLeft);
document.getElementById("up").addEventListener("click", setUp);
document.getElementById("upRight").addEventListener("click", setUpRight);

document.getElementById("left").addEventListener("click", setLeft);
document.getElementById("right").addEventListener("click", setRight);

document.getElementById("downLeft").addEventListener("click", setDownLeft);
document.getElementById("down").addEventListener("click", setDown);
document.getElementById("downRight").addEventListener("click", setDownRight);

document.getElementById("stop").addEventListener("click", stop);

window.onload = function(){activate(1)};