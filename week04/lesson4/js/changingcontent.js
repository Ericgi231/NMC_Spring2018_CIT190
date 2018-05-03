//initial
//
document.querySelector('input[type="color"]').value = '#ffffff';

//functions
//
function changeTitle(){
    document.getElementById("boxTitle").innerHTML = document.getElementById("fieldTitle").value;    
}

function changeText(){
    document.getElementById("boxText").innerHTML = document.getElementById("fieldText").value;
}

function changeBg(){
    document.getElementById("box").style.backgroundColor = document.getElementById("fieldBg").value;
}

function changeFg(){
    document.getElementById("box").style.color = document.getElementById("fieldFg").value;
}

function changeWidth(){
    document.getElementById("box").style.width = document.getElementById("fieldWidth").value+"px";
}

function changeHeight(){
    document.getElementById("box").style.height = document.getElementById("fieldHeight").value+"px";    
}