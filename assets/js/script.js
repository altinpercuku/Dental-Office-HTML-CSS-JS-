const form = document.querySelector('#login-form');
const username = document.querySelector('#usrnm');
const password = document.querySelector('#pswrd');
const message = document.querySelector('.message')

// Validimi i formes

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let messages = []
    if (username.value == "" || password.value == ""){
        messages.push("All fields should be filled!")
    }
    else if (password.value.length < 8 || password.value.length == null){
        messages.push("Password should contain more than 8 characters!")
    }
    if (messages.length !== 0){
        message.classList.add('alert')
        message.classList.add('alert-danger')
        for (let i=0;i<messages.length;i++){
            message.textContent = messages[i]
        }
    }
    else{
        window.location.href = form.getAttribute("action");
    }
})