const form = document.querySelector('form');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const resultElement = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (isNaN(height) || isNaN(weight)) {
    resultElement.textContent = 'Please enter a valid height and weight.';
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  const roundedBmi = bmi.toFixed(2);

  resultElement.textContent = `Your BMI is: ${roundedBmi}`;
  let category;
  if (bmi < 17) {
    category = 'Severely Underweight';
  } else if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 25) {
    category = 'Normal';
  } else if (bmi < 30) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  // Display the category
  const categoryElement = document.createElement('p');
  categoryElement.textContent = `You are: ${category}`;
  document.getElementById('result').appendChild(categoryElement);
});


// Reset the result element every time the form is submitted
const resetResult = function() {
  resultElement.textContent = '';
};

form.addEventListener('reset', resetResult);
resetResult();
