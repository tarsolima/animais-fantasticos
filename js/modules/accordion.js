export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.aciveClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.aciveClass);
    item.nextElementSibling.classList.toggle(this.aciveClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
