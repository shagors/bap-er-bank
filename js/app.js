document.getElementById("login-submit").addEventListener("click", function(){
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if(userEmail == "silvi@baaperhotel.com" && userPassword == 1234){
        window.location.href = "banking.html";
    }
});