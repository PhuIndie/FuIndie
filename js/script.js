const wrapper_login = document.querySelector('.wrapper-login');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('#loginbtn');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper_login.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper_login.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper_login.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=>{
    wrapper_login.classList.remove('active-popup');
});