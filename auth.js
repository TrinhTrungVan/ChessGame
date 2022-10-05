const authModal = document.querySelector('.auth-form');
const showModal = false;

const signinBtn = document.querySelector('.menu-sign-in');
signinBtn.addEventListener('click', () => {
    authModal.style.visibility = 'visible';
    authModal.style.opacity = '1';
});

const closeModal = document.querySelector('.auth-form-close');
closeModal.addEventListener('click', () => {
    if (!showModal) {
        authModal.style.visibility = 'hidden';
        authModal.style.opacity = '0';
    }
});

let modeAuth = true;
const repeatPassword = document.querySelector('.repeat-password');
const submitBtn = document.querySelector('.submit-btn');
const switchModeAuthBtn = document.querySelector('.switch-mode-auth');
switchModeAuthBtn.addEventListener('click', () => {
    if (modeAuth) {
        modeAuth = false;
        switchModeAuthBtn.innerHTML = 'Sign in';
        document.querySelector('.auth-question').innerText = 'Already have an account?';
        repeatPassword.classList.remove('hidden');
        submitBtn.innerText = 'Sign up';
    } else {
        modeAuth = true;
        switchModeAuthBtn.innerHTML = 'Sign up';
        document.querySelector('.auth-question').innerText = `Don't have an account?`;
        submitBtn.innerText = 'Sign in';
        repeatPassword.classList.add('hidden');
    }
});
