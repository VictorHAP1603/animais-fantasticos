

export default function initModal() {
    const modalLi = document.querySelector('[data-modal="abrir"]')
    const close = document.querySelector('[data-modal="fechar"]')
    const modal = document.querySelector('[data-modal="container"]')
 
    if (modalLi && close && modal) {
        function toggleModal(event) {
            event.preventDefault();
            modal.classList.toggle('ativo')
        }

        function closeModalContainer(event) {
            if (event.target === modal) {
                toggleModal(event);
            }
        }
    
        modalLi.addEventListener('click', toggleModal)
        close.addEventListener('click', toggleModal)
        modal.addEventListener('click', closeModalContainer)
    }
}