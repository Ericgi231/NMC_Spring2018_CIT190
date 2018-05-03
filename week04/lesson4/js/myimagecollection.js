//functions
//
function setImage(num){
    document.getElementById("img"+num+"Title").innerHTML = document.getElementById("img"+num).alt;
    document.getElementById("img"+num+"Source").innerHTML = document.getElementById("img"+num).src;

    document.getElementById("img"+num+"Link").innerHTML = document.getElementById("img"+num).alt;
    document.getElementById("img"+num+"Link").href = document.getElementById("img"+num).src;    
}

setImage("1");
setImage("2");
setImage("3");
setImage("4");