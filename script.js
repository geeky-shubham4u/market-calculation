const form = document.getElementById('calculator');
const weightInput = document.getElementById('weightInput');
const priceInput = document.getElementById('priceInput');
const calculationTypeSelect = document.getElementById('calculationType');

calculationTypeSelect.addEventListener('change', () => {
    if (calculationTypeSelect.value === 'weight') {
        weightInput.style.display = 'block';
        priceInput.style.display = 'none';
    } else {
        weightInput.style.display = 'none';
        priceInput.style.display = 'block';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const vendorPrice = document.getElementById('vendorPrice').value;
    const vendorWeight = document.getElementById('vendorWeight').value;
    const calculationType = calculationTypeSelect.value;

    if (calculationType === 'weight') {
        const desiredWeight = document.getElementById('desiredWeight').value;
        const pricePerGram = vendorPrice / vendorWeight;
        const desiredPrice = pricePerGram * desiredWeight;
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Actual Price: Rs ${desiredPrice.toFixed(2)}`;
    } else {
        const desiredPrice = document.getElementById('desiredPrice').value;
        const pricePerGram = vendorPrice / vendorWeight;
        const desiredWeight = desiredPrice / pricePerGram;
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = `Actual Weight: ${desiredWeight.toFixed(2)} grams`;
    }
});
