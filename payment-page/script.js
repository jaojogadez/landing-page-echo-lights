const form = document.querySelector("form"); // Form
const numberCard = document.getElementById("placeholder-card"); // Number HTML
const nameCard = document.getElementById("name"); // Name HTML
const dateCard = document.getElementById("date"); // Date HTML
const cvcCard = document.getElementById("cvc"); // CVC HTML
const inputName = document.getElementById("cardholder-name"); // Input Name
const inputNumberCard = document.getElementById("cardholder-number"); // Input Number
const inputExpDate = document.getElementById("cardholder-expdate"); // Input Expdate
const inputMMYY = document.getElementById("cardholder-mmyy"); // Input MMYY
const inputCVC = document.getElementById("cardholder-cvc"); // Input CVC
const nameField = document.getElementById("nameField");
const checkName = document.querySelector("#nameField .bi-check2-circle")
const errorName = document.querySelector("#nameField .bi-x-circle")

numberCard.innerText = "0000 0000 0000 0000";
nameCard.innerText = "Jane Appleseed";
dateCard.innerText = "00/00";
//cvcCard.innerText = "000";

form.addEventListener("submit", (event) => {
    event.preventDefault()
})


inputName.addEventListener("input", () => {
    const valueName = inputName.value
    const regexName = /^[a-zA-ZÀ-ÿ\s]+$/ // Regex para permitir apenas letras e valida a string inteira
    const isValidName = regexName.test(valueName)
    if (isValidName === true){
        console.log("Padrão Atendido")
        errorName.classList.add("d-none")
        checkName.classList.remove("d-none")
        inputName.classList.add("form-control-check")
        inputName.classList.remove("form-control-error")
        nameField.classList.remove("form-message-error-name")
        nameField.classList.remove("form-message-error-null")
    }
    else{
        console.log("Padrão Não Atendido")
        checkName.classList.add("d-none")
        errorName.classList.remove("d-none")
        inputName.classList.remove("form-control-check")
        inputName.classList.add("form-control-error")
        nameField.classList.add("form-message-error-name")
        nameField.classList.remove("form-message-error-null")
        if(valueName === ""){
            nameField.classList.add("form-message-error-null")
            inputName.classList.remove("form-control-check")
        }
    }
})

