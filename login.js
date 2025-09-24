function login(){
    //Email: kashmierquinones@gmail.com //Error Message: Your email is incorrect
    //Password: mamamo //Error Message: Your password is incorrect
    let Email = document.getElementById("Email").value;
    console.log("You enter:" + " " + Email);

    let Password = document.getElementById("Password").value;
    console.log("You enter:" + " " + Password);

    if (Email==="kashmierquinones@gmail.com"){
        console.log("Tama ang iyong email")
    }else{
        console.log("Mali ang email mo teh. Pakitama.")
    }


}