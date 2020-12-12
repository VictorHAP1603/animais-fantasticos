import outSideClick from './outsideClick.js'

export default function initDropDown() {

    const liSobre = document.querySelectorAll('[data-drop]')

    liSobre.forEach(menu => {
        ['touchstart', 'click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick)
        })
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.toggle('active')
        
        outSideClick(this, ['touchstart', 'click'], () => {
            this.classList.remove('active')
        });
    };
    
}  