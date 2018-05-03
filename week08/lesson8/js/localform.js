document.getElementById("subButt").addEventListener("click",function(){
    localStorage.name = document.getElementById("nameID").value;
    localStorage.email = document.getElementById("emailID").value;
    localStorage.birth = document.getElementById("birthID").value;
    localStorage.humanity = document.getElementById("humanityID").value;
    window.location.assign("localconfirm.html");
});