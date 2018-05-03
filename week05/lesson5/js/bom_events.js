//vars
//
var newWindow;

var wi1 = window.innerWidth;
var wi2 = window.innerHeight;
var na = navigator.platform;
var lo = location.hostname;
var hi = history.length;
var sc = screen.height;

//functions
//
function openWindow(){
    newWindow = window.open("", "A New Window", "width=200,height=200");
    newWindow.document.write("<style>body{background-color:black;color:red;}</style><h1>Hello World!</h1><br><p>Please don't leave me</p>");
}

function closeWindow(){
    newWindow.close();
}

function assignWindow(){
    location.assign("http://www.ericgi231.me");
}

function initPage(){
    document.getElementById("iWindow1").innerHTML = wi1 + "px";
    document.getElementById("iWindow2").innerHTML = wi2 + "px";

    document.getElementById("iNavigator").innerHTML = na;
    document.getElementById("iLocation").innerHTML = lo;
    document.getElementById("iHistory").innerHTML = hi;
    document.getElementById("iScreen").innerHTML = sc + "px";
}

document.getElementById("oWin").addEventListener("click", openWindow);
document.getElementById("cWin").addEventListener("click", closeWindow);
document.getElementById("aWin").addEventListener("click", assignWindow);

window.onload = initPage;