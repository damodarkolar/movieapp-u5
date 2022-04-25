document.querySelector("#login-form").addEventListener("submit",loginCredintials);
var userDetails=JSON.parse(localStorage.getItem("userDetails")) || [];

function loginCredintials(){
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    if(email=="" || password==""){
        alert("errorinvalid Credentials")
    }else{
        userDetails.forEach(function(e){
            if(e.email==email && e.password==password){
                alert("login sussfull");
                window.location.href="./index.html"
            }      
        });
    }
}