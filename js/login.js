const container = document.getElementsByClassName('login_container')[0];

function e(event) {
    const email = document.getElementsByClassName('email')[0].value;
    const password = document.getElementsByClassName('pw')[0].value;
    const login = document.getElementsByClassName('bt')[0]; 

    if (email.length >= 1 && password.length >= 1) {
        return login.style.opacity = 1;
    } else {
        return login.style.opacity = 0.5;
    }
};

function log() {
    container.addEventListener('keyup', e);
}

log ();