'use strict';

let formRegistration = document.querySelector('#form-registration');
let formUser = document.querySelector('#form-user');
let textWrong = document.querySelectorAll('.text-wrong');

if (!!formRegistration) {
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let repeatPassword = document.querySelector('#repeat-password');
    
    formRegistration.addEventListener('submit', event => {
        event.preventDefault();
        console.dir(textWrong);
        let regStr = /^\w+([._-]\w+)*@\w+([._-]\w+)*\.\w{2,3}$/;
        if (!regStr.test(email.value)) {
            textWrong[0].classList.remove('unvisible');
        } else {
            textWrong[0].classList.add('unvisible');
        }
        if (!/[a-z]/.test(password.value) || 
            !/[A-Z]/.test(password.value) || 
            !/\d/.test(password.value) ||
            password.value.length < 6) {
            textWrong[1].classList.remove('unvisible');
        } else {
            textWrong[1].classList.add('unvisible');
        }
        if (password.value !== repeatPassword.value) {
            textWrong[2].classList.remove('unvisible');
        } else {
            textWrong[2].classList.add('unvisible');
        }
    })
}

if (!!formUser) {
    formUser.addEventListener('submit', event => {
        event.preventDefault();
let firstName = document.querySelector('#first-name');    
let lastName = document.querySelector('#last-name');
let yearBirthday = document.querySelector('#year-birthday');
let phone = document.querySelector('#phone');
let skype = document.querySelector('#skype');
const CURRENT_YEAR = 2021;

let abc = /^[A-Z][a-z]*(-[A-Z][a-z]*)*$/;
if (!abc.test(firstName.value) || firstName.value > 20) {
    textWrong[0].classList.remove('unvisible');
} else {
    textWrong[0].classList.add('unvisible');
}
if (!abc.test(lastName.value) || lastName.value > 20) {
    textWrong[1].classList.remove('unvisible');
} else {
    textWrong[1].classList.add('unvisible');
}
let year = +yearBirthday.value;
if (year < 1900 || year > CURRENT_YEAR) {
    textWrong[2].classList.remove('unvisible');
} else {
    textWrong[2].classList.add('unvisible');
}
if (!!phone.value) {
    let phoneStr = /^\+?[0-9() -]{10,}/;
    let ppp = /\D*[ ()+-]*/g;
    let gg = phone.value.replace(ppp, '');
    if (!phoneStr.test(phone.value) || gg.length < 10 || gg.length > 12) {
        textWrong[3].classList.remove('unvisible');
    } else {
        textWrong[3].classList.add('unvisible');
    }
}
if (!!skype.value) {
    let skypeStr = /^[0-9a-zA-Z.-]+$/;
    if (!skypeStr.test(skype.value)) {
        textWrong[4].classList.remove('unvisible');
    } else {
        textWrong[4].classList.add('unvisible');
    }
}
    })
}