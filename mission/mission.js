const themeSelector = document.querySelector('select')

function changeTheme() {
    const body = document.querySelector('body')
    const logo = document.querySelector('.logo')

    if (themeSelector.value === 'dark') {
        body.classList.add('dark')
        logo.src = './images/byui-logo_white.png'
    } else {
        body.classList.remove('dark')
        logo.src = './images/byui-logo_blue.webp'
    }}
    themeSelector.addEventListener('change', changeTheme)
