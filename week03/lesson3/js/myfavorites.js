//functions
//
function displayFoods(foods){
    document.writeln('<link rel="stylesheet" href="css/myfavorites.css">');
    document.writeln('<input type="button" value="Add More!" onclick="resetList()">');
    document.writeln("<h1>Here are your favorite foods!</h1>");
    document.write("<ol>");
    for (var n = 0; n < foods.length; n++) {
        document.write("<li>" + foods[n] + "</li>");
    }
    document.write("</ol>");
}

function resetList() {
    var foods = [];
    var foodsMax;
    
    do {
        foodsMax = parseInt(prompt("How many foods would you like?\n(Must be a valid int)"));
    } while (isNaN(foodsMax));

    for (var i = 1; i < foodsMax + 1; i++) {
        foods.push(prompt("Please enter fruit " + i + ":"));
    }

    displayFoods(foods);
}

//vars
//
var foods = []; 
var foodsMax;

//input
//
while (isNaN(foodsMax)) {
    if (foodsMax == null) {
        foodsMax = parseInt(prompt("How many foods would you like?"));
    } else {
        foodsMax = parseInt(prompt("How many foods would you like?\n(Must be a valid int)"));
    }
}

for (var i = 1; i < foodsMax + 1; i++) {
    foods.push(prompt("Please enter fruit " + i + ":"));
}

displayFoods(foods);

