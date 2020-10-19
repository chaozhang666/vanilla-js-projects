const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rateShow = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exhange rates and update the DOM
function calculate() {
    const currency_one = currencyOne.value;
    const currency_two = currencyTwo.value;
    fetch(`https://prime.exchangerate-api.com/v5/7316452261b7952251069925/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.conversion_rates[currency_two]);
            const rate = data.conversion_rates[currency_two];
            rateShow.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountTwo.value = (amountOne.value * rate).toFixed(2); //2 decimal
        }); 
}

// Event listeners
currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input",calculate);
currencyTwo.addEventListener("change",calculate);
amountTwo.addEventListener("input",calculate);

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});

calculate();
