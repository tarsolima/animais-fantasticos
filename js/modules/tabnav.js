export default class tabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
  }

  activeTab(index) {
    this.tabContent.forEach(section => section.classList.remove('ativo'));
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add('ativo', direcao);
  }

  addEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu && this.tabContent) {
      this.activeTab(0);
      this.addEvent();
    }
    return this;
  }
}
