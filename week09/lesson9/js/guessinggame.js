	var computer = new Number;
	var tries=new Number(0);
    
    document.getElementById("getNumber").addEventListener("click", function(){
    	tries=0;
    	document.getElementById("guess").value="";
    	document.getElementById("tries").value=tries;
        computer= Math.floor((Math.random() *100) + 1);
        document.getElementById("comments").value="I have a number and I am waiting for you to guess it";
    });

    document.getElementById("checkGuess").addEventListener("click", function() {
		var guess = new Number(document.getElementById("guess").value);
		console.count("Attempt");
		console.info("Guess: " + guess);
		try 
		{
			if (computer == "") 
			{
				throw "Please start the game first.";		
			}
			else if (isNaN(guess))
			{
				throw "Please enter a number.";		
			}
			else if (guess < 1 || guess > 100)
			{
				throw new RangeError("Value must be between 1 and 100");
			}
			else if (computer > guess)
			{
				throw "Your guess is too low, try again!";				
			} 
			else if (computer<guess) 
			{
				throw "Your guess is too high, try again!";
			}
			else 
			{
				document.getElementById("comments").value="You guessed correctly - congratulations! It only took " + tries + " tries!";
			}
		} catch (errMsg) {
			document.getElementById("guess").value="";
			document.getElementById("comments").value = errMsg;
			tries++;
			document.getElementById("tries").value = tries;
		}
		
	});
     


