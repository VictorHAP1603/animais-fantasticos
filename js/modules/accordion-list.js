export default function initAccordion() {
    function accordionList() {
        const dd = this.nextElementSibling;
        dd.classList.toggle('showDD')
        this.classList.toggle('ativo')
    }
    
    const listaFaq = document.querySelectorAll('[data-anime="accordion"] dt');
    listaFaq.forEach((item) => {
        item.addEventListener('click', accordionList)
    })
}
