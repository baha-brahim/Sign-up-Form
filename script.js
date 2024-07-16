var password = document.querySelector("#password");
var cPassword = document.querySelector("#cPassword");
var mail = document.querySelector("#mail");
var number = document.querySelector("#number");

cPassword.addEventListener("blur" , () => {
    if (password.value !== cPassword.value) {
        passConfError.innerHTML = "*Passwords do not match";
    } else {
        passConfError.innerHTML = "";
    }
    
})

mail.addEventListener("blur" , () => {
    var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if (!(regex.test(mail.value))) {
        mail.classList.add("input-invalid");
    } else {
        mail.classList.remove("input-invalid");
    }
})

number.addEventListener("blur" ,() => {
    var numberRegex = /^\d+(\.\d+)?$/;
    if (!(numberRegex.test(number.value))) {
        number.classList.add("input-invalid");
    } else {
        number.classList.remove("input-invalid");
    }
})

var form = document.querySelector("form");
form.addEventListener("submit" , (event) => {
    if (password.value !== cPassword.value) {
        passConfError.innerHTML = "*Passwords do not match";
        event.preventDefault();
        return false;
    }

    if (mail.classList.contains("input-invalid")) {
        event.preventDefault();
        return false;
    }

    if (number.classList.contains("input-invalid")) {
        event.preventDefault();
        return false;
    } 
    console.log("Form submitted successfully!")
})