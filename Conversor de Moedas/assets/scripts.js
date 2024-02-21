
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-to-convert")
const currencyToUp = document.querySelector(".select-to-up")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const valueToConvert = document.querySelector(".valueToConvert")
    const valueconverted = document.querySelector(".valueConverted")

    const dolarToday = 4.95
    const euroToday = 5.20
    const libraToday = 6.20

    if (currencySelect.value == "dolar") {
        valueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        valueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        valueconverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencyToUp.value == "real") {
        valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        
    }
    }
    

function changecurrency() {
    const currencyName = document.querySelector(".currency-name")
    const americanflag = document.querySelector(".americanflag")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        americanflag.src = "./img/estados-unidos (1) 1.png"

    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        americanflag.src = "./img/euro.png"

    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        americanflag.src = "./img/libra.png"

    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        americanflag.src = "./img/brasil 2.png"

    }
  
}

currencySelect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertValues)
