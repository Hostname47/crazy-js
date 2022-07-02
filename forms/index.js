let output = document.querySelector('.price-output');
let price = document.querySelector('#min-price');

output.textContent = price.value;

price.addEventListener('input', () => {
    output.textContent = price.value;
});