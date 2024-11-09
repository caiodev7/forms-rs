function validator(){
    const name = document.querySelector("#fname")
    const lastName = document.querySelector("#lname")
    const messageErro = document.querySelector(".message-erro")
    const messageErro2 = document.querySelector(".message-erro2")
    const emailErro = document.querySelector("#email")

    const nameValue = name.value
    const lastNameValue = lastName.value
    const emailValue = email.value

    if(nameValue === ''){
        name.classList.add("erro")
        messageErro.textContent = "This filed is required"
    }
    if(lastNameValue === ''){
        lastName.classList.add("erro")
        messageErro2.textContent = "This filed is required"
    }
    if(emailValue === ''){
        email.classList.add("erro")
        emailErro.textContent = "This filed is required"
    }
}