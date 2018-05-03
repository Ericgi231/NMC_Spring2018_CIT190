document.getElementById("subButt").addEventListener("click",function(){
    sessionStorage.name = document.getElementById("nameID").value;
    sessionStorage.email = document.getElementById("emailID").value;
    sessionStorage.birth = document.getElementById("birthID").value;
    sessionStorage.humanity = document.getElementById("humanityID").value;
    window.location.assign("sessionconfirm.html");
});