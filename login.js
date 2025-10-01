function login()
    //Email: kashmierquinones@gmail.com //Error Message: Your email is incorrect
    //Password: mamamo //Error Message: Your password is incorrect
    {
    let erroremail = document.getElementById("erroremail");
    let errorpassword = document.getElementById("errorpassword");
    let errorpasswordandemail = document.getElementById("errorpasswordandemail");

    let Email = document.getElementById("Email").value;
    console.log("You enter:" + " " + Email);

    let Password = document.getElementById("Password").value;
    console.log("You enter:" + " " + Password);

  
     if (Email === "kashmierquinones@gmail.com" && Password === "mamamo") {
        console.log("Your email and password is correct!");
        erroremail.innerHTML = "Your email and password is incorrect";
        errorpasswordandemail.innerHTML = "Your email and password is incorrect!";
     

    } else if (Email !== "kashmierquinones@gmail.com") {
        console.log("Your email is incorrect");
        erroremail.innerHTML = "Your email is incorrect";
        
    } else if (Password !== "mamamo") {
      console.log("Your password is incorrect");
        errorpassword.innerHTML = "Your password is incorrect";
    }
    }