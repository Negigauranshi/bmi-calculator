document.addEventListener('DOMContentLoaded', () => {
    const bmiForm = document.getElementById('bmiForm');
    const result = document.getElementById('result');
    const bmiImage = document.getElementById('bmiImage');

    bmiForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

        if (isNaN(weight) || isNaN(height) || height === 0) {
            result.textContent = 'Please enter valid numbers.';
            return;
        }

        const bmi = (weight / (height * height)).toFixed(2);

        let category = '';
        let imageUrl = '';
        if (bmi < 18.5) {
            category = 'Underweight';
            imageUrl = 'underweight.png';
        } else if (bmi < 25) {
            category = 'Normal weight';
            imageUrl = 'normal.png';
        } else if (bmi < 30) {
            category = 'Overweight';
            imageUrl = 'overweight.png';
        } else {
            category = 'Obesity';
            imageUrl = 'obese.png';
        }

        result.textContent = `Your BMI is ${bmi} (${category}).`;
        bmiImage.style.backgroundImage = `url(${imageUrl})`;
    });
});
