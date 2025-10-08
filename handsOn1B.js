function checkbmi(){

    let bmi = Weight / ( height * height);
    let height = document.getElementById("Height").value;
    let Weight = document.getElementById("Weight").value;

    console.log(You Enter + height + " for height and " + Weight + " for weight.");

    if ( Weight / (height * height ) < 18.5){
       result = "Your BMI is " + ", you are underweight.";

    } else if (Weight / (height * height) >= 18.5 && bmi <= 24.9){
       result = "Your BMI is " + ", you have a normal weight.";
    }
    else if (Weight / (height * height) >= 25 && bmi <= 29.9){
    result = "Your BMI is " + ", you are overweight.";
    }
    else if (Weight / (height * height) >= 30){
       result = "Your BMI is " + ", you are obese.";
    }   
    else {
        result = "Please enter valid inputs.";
    }

}