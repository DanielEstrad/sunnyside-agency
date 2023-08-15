const burguerMenu = document.querySelector('.navigation__hamburguer')
const navigation = document.querySelector('.navigation')

burguerMenu.addEventListener("click", () => {
    const navigationMenu = document.querySelector('.navigation__menu')
    navigationMenu.classList.toggle('navigation__menu--active')
})