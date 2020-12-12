
export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-anime="scroll-menu"] a[href^="#"]');
    
    function scrollToSection(event) {
        event.preventDefault();
        const link = event.target;
        const href = link.getAttribute('href');
    
        const section = document.querySelector(href);
       
    
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
    }
    
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection)
    })
}
