const api = 'https://api.exchangerate-api.com/v4/latest/USD';

let search = document.querySelector('.searchBox');
let convert = document.querySelector('.convert');
let fromCurrency = document.querySelector(".from");
let toCurrency = document.querySelector(".to");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");

let resultFrom;
let resultTo;
let searchValue;

fromCurrency.addEventListener('change', (event) => {
    resultFrom = event.target.value;
});

toCurrency.addEventListener('change', (event) => {
    resultTo = event.target.value;
});

search.addEventListener('input', () => {
    searchValue = parseFloat(search.value);
});

convert.addEventListener('click', getResults);

function getResults() {
    if (!resultFrom || !resultTo || !searchValue) {
        alert("Please fill all fields");
        return;
    }

    fetch(api)
        .then(response => response.json())
        .then(displayResults);
}

function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];

    let result = (toRate / fromRate) * searchValue;

    finalValue.innerHTML = result.toFixed(2);
    finalAmount.style.display = "block";
}

function clearVal() {
    location.reload();
}