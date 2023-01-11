export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  activeAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addEvent() {
    this.accordionList.forEach(item => item.addEventListener('click', () => this.activeAccordion(item)));
  }

  init() {
    this.activeAccordion(this.accordionList[0]);
    if (this.accordionList.length) {
      this.addEvent();
    }
    return this;
  }
}
