//functions
//
function getFocus(){
	document.getElementById("msg").innerHTML = "";
	document.getElementById("weight").focus();
}

function calcBmi(){
	var weight = document.getElementById("weight").value;
	var height = document.getElementById("height").value;
	var bmi = (weight * 703) / (height * height);
	
	document.getElementById("msg").innerHTML = "Your BMI is: " + bmi.toFixed(2);
}
