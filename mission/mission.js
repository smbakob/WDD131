
const themeSelector = document.querySelector('select');

function changeTheme() {
    const body = document.querySelector('body');
    const logos = document.querySelectorAll('.logo');

    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logos.forEach(logo => logo.src = './images/byui-logo_white.png');
    } else {
        body.classList.remove('dark');
        logos.forEach(logo => logo.src = './images/byui-logo_blue.webp');
    }
}


themeSelector.addEventListener('change', changeTheme);


window.addEventListener('DOMContentLoaded', changeTheme);
