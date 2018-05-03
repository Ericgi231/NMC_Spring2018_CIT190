//html load - animals
//
document.getElementById("animals").addEventListener("click", function(){
    var xhttp = new XMLHttpRequest(); //requests data from the server
    xhttp.onreadystatechange = function() { // checks to see when data is ready
        if (this.readyState == 4 && this.status == 200) { // makes sure data was transferred successfully
            document.getElementById("data").innerHTML = this.responseText; // updates html
        }
    };
    xhttp.open("GET", "animals.html", true);  // specifies the type of request
    xhttp.send();  // sends the request to the server
});

//json load - songs
//
var xhr = new XMLHttpRequest(); 
document.getElementById("songs").addEventListener("click", function() { 
    if(xhr.status === 200) { 
        responseObject = JSON.parse(xhr.responseText);
        var newContent = "<table><tr><th>Title</th><th>Album</th><th>Artist</th><th>Year</th></tr>";
        for (var i = 0; i < responseObject.song.length; i++) { 
            newContent += "<tr><td>" + responseObject.song[i].Title + "</td>";
            newContent += "<td>" + responseObject.song[i].Album + "</td>";
            newContent += "<td>" + responseObject.song[i].Artist + "</td>";
            newContent += "<td>" + responseObject.song[i].Year + "</td></tr>";
        }
        newContent+= "</table>";
        document.getElementById('data').innerHTML = newContent;
    }
});
xhr.open('GET', 'music.json', true); 
xhr.send(null); 

//xml load - games
//
var myCollection = document.getElementById("games");
myCollection.addEventListener("click", function() {
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function() {
        if (xhttp.readyState==4 && xhttp.status==200)
            {
                xmlDoc=xhttp.responseXML;
                var txt="<table style='border:0'><tr><th>Dev</th><th>Title</th><th>Rating</th><th>Score</th><th>Year</th><th>Price</th>";
                var d=xmlDoc.getElementsByTagName("dev");
                var t=xmlDoc.getElementsByTagName("title");
                var p=xmlDoc.getElementsByTagName("price");
                var y=xmlDoc.getElementsByTagName("year");
                var r=xmlDoc.getElementsByTagName("rating");
                var s=xmlDoc.getElementsByTagName("score");
                for (var i=0;i<d.length;i++)
                    {
                        txt=txt + "<tr><td>";
                        txt=txt + d[i].childNodes[0].nodeValue + "</td><td>";
                        txt=txt + t[i].childNodes[0].nodeValue + "</td><td>";
                        txt=txt + r[i].childNodes[0].nodeValue + "</td><td>";
                        txt=txt + s[i].childNodes[0].nodeValue + "</td><td>";
                        txt=txt + y[i].childNodes[0].nodeValue + "</td><td>";
                        txt=txt + "$" + p[i].childNodes[0].nodeValue + "</td></td>";
                    }
                txt = txt + "</table>";    
                document.getElementById("data").innerHTML=txt;
            }
    }
    xhttp.open("GET","videogames.xml",true);
    xhttp.send();
});