function validateEmail() {
    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/;
    if (!regex.test(email)) {
      document.getElementById("email-error").innerHTML = "Invalid email address";
      return false;
    } else {
      return true;
    }
  }
  
  document.getElementById("email").addEventListener("blur", validateEmail);
  