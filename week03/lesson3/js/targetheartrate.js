function calcRate() {  
    //vars
    //
    var message;

    var lowEnd;
    var lowEndA;
    var highEnd;
    var highEndA;

    var age = parseInt(document.getElementById("age").value);
    var restingHR = parseInt(document.getElementById("restingHR").value);

    //validation
    //
    if (isNaN(age) || age > 99 || age < 15) {
        message = "Please enter your age(15-99)";
        document.getElementById("age").value="";
        document.getElementById("age").focus();
    } else if (isNaN(restingHR) || restingHR!=0 && restingHR < 20 || restingHR > 100) {
        message = "Please enter your resting heart rate (20-100) or 50 if you don't know it";
        document.getElementById("restingHR").value="";
        document.getElementById("restingHR").focus();
    } else {
        lowEnd = (220 - age - restingHR) * 0.5;
        lowEndA = lowEnd + restingHR;
        highEnd = (220 - age - restingHR) * 0.85;
        highEndA = highEnd + restingHR;
        message = "Your training heart rate is between:<br>" + lowEndA + " and " + highEndA;
    }

    document.getElementById("feedback").innerHTML = message;

    if(age&&restingHR){
        thankyou();
    }
    
} 

function thankyou(){
    //vars
    //
    var message;

    var rng = Math.floor((Math.random() * 7) + 1);

    switch (rng) {
        case 1:
            message = "Have a great day!";
            break;
        case 2:
            message = "Thanks for using the site!";
            break;
        case 3:
            message = "Have a good one bro.";
            break;
        case 4:
            message = "Have a nice one mate.";
            break;
        case 5:
            message = "Good job, you did it!";
            break;
        default:
            message = "Have an excellent life.";
            break;
    }

    document.getElementById("thanks").innerHTML= message;
}	

function clearText(){

    document.getElementById("thanks").innerHTML = " ";
    document.getElementById("feedback").innerHTML = " ";
} 	