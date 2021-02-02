export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    const classData = tabContent[index].dataset.anime;

    tabContent.forEach((tab) => {
      tab.classList.remove("ativo");
    });

    tabContent[index].classList.add("ativo", classData);
  }

  if (tabMenu.length && tabContent.length) {
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
