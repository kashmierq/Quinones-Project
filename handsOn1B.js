function checkbmi(){

    let bmi = weight / (height * height);
    let height = document.getElementById("Height").value;
    let weight = document.getElementById("Weight").value;

    console.log(bmi);
    console.log(height);
    console.log(Weight);

    if (height && weight !=""){
       console.error = ("Please enter both height and weight.");
        return;
    } else if (!weight) {
        console.error("Please enter your weight.");
    } else if (!height) {
        console.error("Please enter your height.");



    let bmi = weight / (height * height);
        result.innerHTML += "Underweight.";
    }
    else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerHTML += "Normal Weight.";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML += "Overweight.";
    } else {
        result.innerHTML += "Obese.";
    }
}}