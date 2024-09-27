// BMI Calculation Logic
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseFloat(document.getElementById('height').value) / 100;
    let weight = parseFloat(document.getElementById('weight').value);
    
    if (height > 0 && weight > 0) {
        let bmi = weight / (height * height);
        document.getElementById('bmiValue').textContent = bmi.toFixed(2);
        
        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        document.getElementById('bmiCategory').textContent = 'You are: ' + category;
        document.getElementById('bmiResult').style.display = 'block';
    }
});
