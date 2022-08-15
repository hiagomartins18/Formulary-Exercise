const MainContainer = document.querySelector (".form-box")
const thanksContainer = document.querySelector (".thank-you")
const submitButton = document.querySelector (".button-submit")

const form = document.querySelector (".forms")
const fname = document.getElementById ("fname")
const lname = document.getElementById ("lname")
const emailN = document.getElementById ("email")
const password = document.getElementById ("passw")


submitButton.addEventListener ("click", () =>{

    thanksContainer.classList.remove("hidden")
    MainContainer.style.display = "none"
})
