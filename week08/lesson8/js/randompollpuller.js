//get random number
//
function getRandomNumber(){
    return Math.floor(Math.random() * 15227756);
}


//display info
//
function roll(){
    var xhr = new XMLHttpRequest(); 
    xhr.onload = function() { 
        if(xhr.status === 200) {
            console.log(xhr.responseText);
            responseObject = JSON.parse(xhr.responseText);

            document.body.innerHTML = '';
    
            document.write("<br><input type='button' id='roller' value='Pull New Data' onclick='roll()'>");
            document.write("<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><meta http-equiv='X-UA-Compatible' content='ie=edge'><title>Random Poll Puller</title><script src='js/randompollpuller.js'></script><link rel='stylesheet' href='css/randompollpuller.css'></head>");
    
            document.write("<h1>" + responseObject.title + "</h1>");
            document.write("<table><tr><th>Option</th><th>Votes</th></tr>");
            for (var n = 0; n < responseObject.options.length; n++) {
                var option = responseObject.options[n];
                var vote = responseObject.votes[n];
    
                document.write("<tr>");
                document.write("<th align='left'>" + option + "</th>");
                document.write("<th>" + vote + "</th>");
                document.write("</tr>");            
            }
            document.write("</table>");
        } else {
            roll();
        }
    };

    xhr.open('GET', 'https://strawpoll.me/api/v2/polls/' + getRandomNumber(), true); 
    xhr.send(null); 
}

