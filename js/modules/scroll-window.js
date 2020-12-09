
export default function initScrollWindow() {
    
    const sections = document.querySelectorAll('[data-anime="scroll"]')
    const windowMetade = window.innerHeight * 0.6;  
    
    if(sections.length) {

        function animateScroll() {
            
            sections.forEach((item) => {
                const sectionTop = item.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                
                if (isSectionVisible) {
                    item.classList.add('ativo')
                } else {
                    item.classList.remove('ativo')
                }
            });    
        };

        animateScroll();
        window.addEventListener('scroll', animateScroll)
    }
}
