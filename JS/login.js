const validPassword = '1234'
const validUserName = 'check@gmail.com'

function getElement(id) {
    return document.getElementById(id);
}

function createElement(tagName) {
    if (tagName == 'p') {
        return document.createElement('p');
    }
}

document.getElementById('submit_btn').addEventListener('click', function () {
    const userNameField = getElement('input_userName');
    // console.log(userNameField)
    const userName = userNameField.value;
    // console.log(userName)

    const passwordField = getElement('input_password');
    // console.log(userNameField)
    const password = passwordField.value;
    // console.log(password)

    if (userName === validUserName && password === validPassword) {
        console.log('sign in');
        window.location.href = 'after_login.html';
    }
    else {
        const p = createElement('p');
        p.style.color = 'red';
        p.style.fontWeight = 'bold';
        if (userName != validUserName && password != validPassword) {
            p.innerText = 'User name and password both are incorrect.';
        }
        else if (userName != validUserName) {
            p.innerText = 'User name is incorrect.';
        }
        else if (password != validPassword){
            p.innerText = 'Password is incorrect.';
        }

        getElement('signin_container').appendChild(p);
    }
})