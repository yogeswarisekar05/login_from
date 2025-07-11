// const { useSyncExternalStore } = require("react");

var emailregex = /^[a-zA-Z0-9]+@gmail\.com$/;
var nameregex = /^[a-zA-Z0-9]+$/;
var passwordregex = /^[a-zA-Z\d]{5,9}$/;
var addressregex = /^[a-zA-Z0-9]+$/;

var nameerr = document.getElementById("nameerror");
var passworderror = document.getElementById("passworderror");
var emailerror = document.getElementById("emailerror");
var addresserror = document.getElementById("addresserror");

var eyeicon = document.getElementById("eyeicon");
var password = document.getElementById("password");
var name = document.getElementById("name");
var address = document.getElementById("address");
var email = document.getElementById("email");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};



function fun() {
  var name = document.getElementById("name").value.trim();
  console.log(name)
  var address = document.getElementById("address").value.trim();
  console.log(address)
  var email = document.getElementById("email").value.trim();
  console.log(email)
  var password = document.getElementById("password").value.trim();
  console.log(password)
if (name === "" || email === "" || password === "" || address === "") {
  console.log("yes")
    if (name === "" || !nameregex.test(name)) {
      nameerr.style.display = "block";
      alert("pls enter name");
    }
     if (email ==="" || !emailregex.test(email)) {
      emailerror.style.display = "block";
      alert("pls enter email");
    }

    if (password === "" || !passwordregex.test(password)) {
      passworderror.style.display = "block";
      alert("pls enter password");
    }
    if (address === "" || !addressregex.test(address)) {
      addresserror.style.display = "block";
      alert("pls enter address");
    }
  } 

  else {
    if(!email.includes("@gmail.com"))
    {
      alert("pls enter crt email includes @gmail.com")
    }
    else{
    alert("submitted");
    }
  }
}

function set() {
  nameerr.style.display = "none";
  passworderror.style.display = "none";
  emailerror.style.display = "none";
  addresserror.style.display = "none";
}
