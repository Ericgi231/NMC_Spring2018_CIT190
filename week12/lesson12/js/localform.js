
if (localStorage.name) {
    document.getElementById("nameID").value = localStorage.name;
}

if (localStorage.email) {
    document.getElementById("emailID").value = localStorage.email;
}

if (localStorage.birth) {
    document.getElementById("birthID").value = localStorage.birth;
}

if (localStorage.humanity) {
    document.getElementById("humanityID").value = localStorage.humanity;
}

document.getElementById("subButt").addEventListener("click",function(){
    var nameErr, emailErr, humanityErr, birthErr = "";
    var isError = false;

    if (document.getElementById("nameID").value == "") {
        document.getElementById("nameErr").innerHTML = "Enter a name.";
        isError = true;
    }

    if (document.getElementById("emailID").value == "") {
        document.getElementById("emailErr").innerHTML = "Give email.";
        isError = true;
    }

    if (document.getElementById("birthID").value == "") {
        document.getElementById("birthErr").innerHTML = "We must know birth.";
        isError = true;
    }

    if (document.getElementById("humanityID").value == "") {
        document.getElementById("humanityErr").innerHTML = "Specify a number.";
        isError = true;
    }
    
    localStorage.name = document.getElementById("nameID").value;
    localStorage.email = document.getElementById("emailID").value;
    localStorage.birth = document.getElementById("birthID").value;
    localStorage.humanity = document.getElementById("humanityID").value;
    if (!isError) {
        window.location.assign("localconfirm.html");        
    }
});