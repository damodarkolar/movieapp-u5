document.querySelector("#signup-form").addEventListener("submit",signUpFunction);
var userDetails=JSON.parse(localStorage.getItem("userDetails")) || [];

function signUpFunction(){
    event.preventDefault();
    var details={};
    var name=document.querySelector("#name").value;
    var email=document.querySelector("#email").value;
    var phoneNumber=document.querySelector("#contactNumber").value;
    var password=document.querySelector("#password").value;

    if(name=="" || email=="" || phoneNumber=="" || password==""|| phoneNumber.length!=10){
        alert("error");
    }else{
        details.name=name;
        details.email=email;
        details.phoeNumber=phoneNumber;
        details.password=password;
        userDetails.push(details);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        alert("sign Up completed please login");
        window.location.href="./login.html"
    }
}