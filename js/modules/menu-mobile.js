import outSideEvent from './outsideClick.js'


export function initShowMenu() {
    const menuHamb = document.querySelector('.hamburguer')

    function showMenu() {
        const menu = document.querySelector('.menu ul');    
        const menus = menuHamb.querySelectorAll('div');
        
        menu.classList.toggle('menu-open')
        
        menus.forEach((div) => {
            div.classList.toggle('active')
        });
    };

    menuHamb.addEventListener('click', showMenu)
}



export function initRemoveMenu() {
    function removeMenu() {
        const menuHamb = document.querySelector('.hamburguer')
        const menu = document.querySelector('.menu ul')    
        const menus = menuHamb.querySelectorAll('div')
        
        menus.forEach((div) => {
            div.classList.remove('active')
        })

        if ( window.pageYOffset > menu.offsetTop ) {
            menu.classList.remove('menu-open')
        }
    }
    document.addEventListener('scroll', removeMenu)
}


    

