
export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section')    

    if(tabMenu.length && tabContent.length) {
    
        function activeTab(index) {
            const classData = tabContent[index].dataset.anime

            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove('ativo')
                
            }
            tabContent[index].classList.add('ativo', classData);
        }
        
        
        tabMenu.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index) 
            });
        });
    };
};
