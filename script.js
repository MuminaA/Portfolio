function toggleMenu() {
    // target elements
    const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.hamburger-icon')

    // add open class to elements
    menu.classList.toggle('open')
    icon.classList.toggle('open')
}