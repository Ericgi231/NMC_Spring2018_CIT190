var rotate;
var pointer = 0;

var uniImages = new Array(15);
for (var i=0; i<16; i++) {
    uniImages[i] = "media/unicycle" + i + ".gif";
}

function startTurning(direction) {
    if (rotate != null) {
        clearInterval(rotate);
    }

    if (direction == 'f') {
        rotate = setInterval("forward()", 150);
    } else if (direction == 'r') {
        rotate = setInterval("reverse()", 150);        
    }

    document.images[0].src = uniImages[pointer];
}

function forward() {
    if (pointer==15){
        pointer=0;
    } else{
        pointer++;
    }

	document.images[0].src = uniImages[pointer];
}

function reverse() {
    if (pointer==0){
        pointer=15;
    } else{
        --pointer;
    }

	document.images[0].src = uniImages[pointer];
}