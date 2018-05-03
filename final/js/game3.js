if(localStorage.getItem("number")){
    var number = parseInt(localStorage.getItem("number"));
} else {
    var number = 0;
}

if(localStorage.getItem("autoPower")){
    var autoPower = parseInt(localStorage.getItem("autoPower"));
} else {
    var autoPower = 0;
}

if(localStorage.getItem("clickPower")){
    var clickPower = parseInt(localStorage.getItem("clickPower"));
} else {
    var clickPower = 1;
}

function Start(){
    setInterval(Auto, 2000);
    document.getElementById('BigButt').innerHTML = number;    
    document.getElementById('clickCost').innerHTML = clickPower*2;
    document.getElementById('autoCost').innerHTML = (autoPower+2)*2;
    document.getElementById('clickPower').innerHTML = clickPower;
    document.getElementById('autoPower').innerHTML = autoPower;
}

function ClickBigButt(){
    number += clickPower;
    document.getElementById('BigButt').innerHTML = number;
}

function Save(){
    localStorage.setItem("number", number);
    localStorage.setItem("clickPower", clickPower);
    localStorage.setItem("autoPower", autoPower);
}

function Auto(){
    number += autoPower;
    document.getElementById('BigButt').innerHTML = number;
}

function UpgradeAuto(){
    if (number >= (autoPower+2)*2){
        number -= (autoPower+2)*2;
        autoPower++;        
    }
    document.getElementById('autoCost').innerHTML = (autoPower+2)*2;
    document.getElementById('autoPower').innerHTML = autoPower;
    document.getElementById('BigButt').innerHTML = number;
}

function UpgradeClick(){
    if (number >= clickPower*2){
        number -= clickPower*2;
        clickPower++;        
    }
    document.getElementById('clickCost').innerHTML = clickPower*2;
    document.getElementById('clickPower').innerHTML = clickPower;
    document.getElementById('BigButt').innerHTML = number;    
}