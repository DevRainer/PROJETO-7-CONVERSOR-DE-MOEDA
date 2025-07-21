const convertbutton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-corrency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    // Verifica se o valor de entrada é um número
    if (isNaN(inputCurrencyValue)) {
        alert("Por favor, insira um valor válido.");
        return;
    }
    console.log(currencySelect.value)
    const dolarToday = 5.25;
    const euroToday = 6.50;

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);

    let convertedValue;

    if (currencySelect.value === "dolar") {
        convertedValue = inputCurrencyValue / dolarToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(convertedValue);
    } else if (currencySelect.value === "euro") {
        convertedValue = inputCurrencyValue / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(convertedValue);
    }

    console.log(convertedValue);
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".corrency-img");

    if (currencySelect.value === "dolar") {
        currencyName.textContent = "Dólar Americano";
        currencyImage.src = "./assets/estados-unidos.png";

    } if (currencySelect.value === "euro") {
        currencyName.textContent = "Euro";
        currencyImage.src = "./assets/euro.png";
    } 
    convertValues(); // Atualiza o valor convertido ao mudar a moeda
}

currencySelect.addEventListener('change', changeCurrency);
convertbutton.addEventListener("click", convertValues);







































































/*const convertbutton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-corrency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")


    // Verifica se o valor de entrada é um número
    if (isNaN(inputCurrencyValue)) {
        alert("Por favor, insira um valor válido.");
        return;
    }


    console.log(currencySelect.value)
    const dolarToday = 5.25
    const euroToday = 6.50


    const convertedValue = inputCurrencyValue / dolarToday

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)

    console.log(convertedValue)

}

convertbutton.addEventListener("click", convertValues)

*/

