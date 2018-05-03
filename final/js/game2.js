var score = 0;
var total = 0;
var operands = ['+','-','/','%','*'];
var operand;
var num1, num2, num3;

function SetGame(){
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    operand = operands[Math.floor(Math.random() * 5)];
    
    switch (operand){
        case '+':
            num3 = num1 + num2;
            break;
        case '-':
            num3 = num1 - num2;
            break;
        case '/':
            num3 = num1 / num2;        
            break;
        case '%':
            num3 = num1 % num2;        
            break;
        case '*':
            num3 = num1 * num2;        
            break;
    }

    document.getElementById('question').value = num1 + operand + num2;

    if(RanBool() == 0){
        document.getElementById('butt1').innerHTML = (num3 + Math.floor(Math.random() * 10) + 1).toFixed(0);
    } else {
        document.getElementById('butt1').innerHTML = (num3 - Math.floor(Math.random() * 10) - 1).toFixed(0);        
    }
    
    if(RanBool() == 0){
        document.getElementById('butt2').innerHTML = (num3 + Math.floor(Math.random() * 10) + 1).toFixed(0);
    } else {
        document.getElementById('butt2').innerHTML = (num3 - Math.floor(Math.random() * 10) - 1).toFixed(0);        
    }

    if(RanBool() == 0){
        document.getElementById('butt3').innerHTML = (num3 + Math.floor(Math.random() * 10) + 1).toFixed(0);
    } else {
        document.getElementById('butt3').innerHTML = (num3 - Math.floor(Math.random() * 10) - 1).toFixed(0);        
    }

    if(RanBool() == 0){
        document.getElementById('butt4').innerHTML = (num3 + Math.floor(Math.random() * 10) + 1).toFixed(0);
    } else {
        document.getElementById('butt4').innerHTML = (num3 - Math.floor(Math.random() * 10) - 1).toFixed(0);        
    }

    document.getElementById('butt1').onclick = Wrong;                    
    document.getElementById('butt2').onclick = Wrong;                    
    document.getElementById('butt3').onclick = Wrong;                    
    document.getElementById('butt4').onclick = Wrong;                    
    
    switch (Math.floor(Math.random() * 4)){
        case 0:
            document.getElementById('butt1').innerHTML = num3.toFixed(0);        
            document.getElementById('butt1').onclick = Right;        
            break;
        case 1:
            document.getElementById('butt2').innerHTML = num3.toFixed(0);  
            document.getElementById('butt2').onclick = Right;                    
            break;
        case 2:
            document.getElementById('butt3').innerHTML = num3.toFixed(0);        
            document.getElementById('butt3').onclick = Right;        
            break;
        case 3:
            document.getElementById('butt4').innerHTML = num3.toFixed(0);        
            document.getElementById('butt4').onclick = Right;        
            break;
    }

    document.getElementById('scoreCount').innerHTML = score + " / " + total;
}

function RanBool(){
    return Math.floor(Math.random() * 2);
}

function Right(){
    score++;
    total++;
    SetGame();
}

function Wrong(){
    total++;
    SetGame();
}