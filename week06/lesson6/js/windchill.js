$(function() {
	//functions
	//
	function getFocus(){
		$("#wind").focus();
		$("#results").html(" ");
	}

	function calculate(){
		var $wind = eval(parseFloat($("#wind").val()));
		var $temp = eval(parseFloat($("#temp").val()));

		if ($wind=="" || $temp=="")
		{
			$("#results").html("You need to enter a valid number for wind and temperature, try again!");
		} 
		else if (isNaN($wind) || isNaN($temp))
		{
			$("#results").html("You need to enter a valid number for wind and temperature, try again!");
		} 
		else 
		{
			var $chill = (0.0817*(3.71*(Math.pow($wind, 0.5))+5.81-0.25*$wind)*($temp-91.4)+91.4);
			$("#results").html("Wind Chill: " + Math.floor($chill));
		}
	}

	//setting page
	//
	$("#calc").on("click",calculate);

	$("#reset").on("click",getFocus);
	
	getFocus();
	});