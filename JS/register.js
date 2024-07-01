function getElement(id) {
    return document.getElementById(id);
}

function getValue(element) {
    return element.value;
}

function isAllFieldEmpty(email, name, phone, password) {
    if (name === '' || email === '' || phone === '' || password === '') {
        return false
    }
    else {
        return true;
    }
}

getElement('register_btn').addEventListener('click', function () {
    const email = getValue(getElement('input_email'));
    const name = getValue(getElement('input_name'));
    const phone = getValue(getElement('input_phone'));
    const password = getValue(getElement('input_password'));

    if (isAllFieldEmpty(email, name, phone, password)) {
        window.location.href = 'after_login.html';
    }
    else {
        alert('Input field can not be empty');
    }
})