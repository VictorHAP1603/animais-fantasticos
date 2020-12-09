
export function initShowMenu() {
    const menuHamb = document.querySelector('.hamburguer')

    function showMenu() {
        const menu = document.querySelector('.menu ul')    
        menu.classList.toggle('menu-open')
    }

    menuHamb.addEventListener('click', showMenu)
}


export function initRemoveMenu() {
    function removeMenu() {
        const menu = document.querySelector('.menu ul')    
    
        if ( window.pageYOffset > menu.offsetTop ) {
            menu.classList.remove('menu-open')
        }
    }
    document.addEventListener('scroll', removeMenu)
}


    

