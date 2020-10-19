function calculate() {
  
  // step 1: get data 
  var weight = document.getElementById("weight").value
  var height = document.getElementById("height").value

  // step 2: calculate bmi 

  var bmi = weight / (height * height)

  alert("Your BMI is: " + bmi)

  // step 3: show the result 

  if (bmi < 18.5) {
    alert("You are underweight ! ")
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("You are normal ! ")
  } else if (bmi >= 25 && bmi <= 29.9) {
    alert("You are overweight ! ")
  } else if (bmi >= 30 && bmi <= 34.9) {
    alert("You are obese ! ")
  } else {
    alert ('You are extremely obese')
  }

}

