//working with numbers
//

function DoAdd(){
	// Obtain the current values of Value1 and Value2.
	// The parseInt function is used to convert the form text value retrieved to an actual number
	var Value1 = parseInt(document.getElementById("Value1").value);
	var Value2 = parseInt(document.getElementById("Value2").value);
	// Set the result to reflect the addition of the two numbers.
	document.getElementById("Result").setAttribute("value", Value1 + Value2);
}

function DoSub(){
	// Obtain the current values of Value1 and Value2.
	// The parseInt function is used to convert the form text value retrieved to an actual number
	var Value1 = parseInt(document.getElementById("Value1").value);
	var Value2 = parseInt(document.getElementById("Value2").value);
	// Set the result to reflect the subtraction of the two numbers.
	document.getElementById("Result").setAttribute("value", Value1 - Value2);
}

function DoMult(){
	// Obtain the current values of Value1 and Value2.
	// The parseInt function is used to convert the form text value retrieved to an actual number
	var Value1 = parseInt(document.getElementById("Value1").value);
	var Value2 = parseInt(document.getElementById("Value2").value);
	// Set the result to reflect the multiple of the two numbers.
	document.getElementById("Result").setAttribute("value", Value1 * Value2);
}

function DoDiv(){
	// Obtain the current values of Value1 and Value2.
	// The parseInt function is used to convert the form text value retrieved to an actual number
	var Value1 = parseInt(document.getElementById("Value1").value);
	var Value2 = parseInt(document.getElementById("Value2").value);
	// Set the result to reflect the division of the two numbers.
	document.getElementById("Result").setAttribute("value", Value1 / Value2);
}

// the reset button removes all form values except for the result
// an onclick event was added to the button to remove the result value
function removeResult(){
	document.getElementById("Result").setAttribute("value"," ");
}

//working with color arrays
//

function getColor(){
    var colors = ["Cyan", "RebeccaPurple", "Tomato", "PaleGreen", "PaleGoldenRod", "MistyRose", "MintCream", "LightSeaGreen", "IndianRed"];
    
    var choice1 = parseInt(document.getElementById("choice").value);

    document.getElementById("color").innerHTML = colors[choice1];
    document.body.style.background = colors[choice1];
}

function changeText(){
    var color = parseInt(document.getElementById("txtColor").value);

    document.body.style.color = document.getElementById("txtColor").value;
}