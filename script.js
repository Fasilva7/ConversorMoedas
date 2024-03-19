const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConvert = document.querySelector(".currency-value");

    const dolarToday = 5.2;
    const euroToday = 6.2;
    const bitcoinToday = 7.5;
    const libraToday = 6.0

    if (currencySelect.value === "dolar") {
        const convertedValue = inputCurrencyValue / dolarToday;
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    }
    else if (currencySelect.value === "euro") {
        const convertedValue = inputCurrencyValue * euroToday;
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    }

    else if (currencySelect.value === "bitcoin") {
        const convertedValue = inputCurrencyValue * bitcoinToday ;
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(convertedValue);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency(){
    const currencyName = document.querySelector('#currency-name')
    const currencyImage = document.querySelector('#currency-img')

    if (currencySelect.value ==='dolar'){
        currencyName.textContent = 'Dólar ';
        currencyImage.src ='./eua.png'
    }
    if (currencySelect.value ==='euro'){
        currencyName.textContent ='Euro';
        currencyImage.src ='./bandeira-uniao-europeia.webp'
    }
    if (currencySelect.value === 'bitcoin'){
        currencyName.textContent = 'Bitcoin'
        currencyImage.src = './Bitcoin.svg.png'
    }
    
}

convertButton.addEventListener('click', convertValues);
currencySelect.addEventListener('change', changeCurrency);
