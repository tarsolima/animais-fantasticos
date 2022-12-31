export default class ScrollSuave {
  constructor(link, option) {
    this.linksInternos = document.querySelectorAll(link);
    this.option = option || { behavior: 'smooth', block: 'start' };
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.option);
  }

  addEvent() {
    this.linksInternos.forEach(link => link.addEventListener('click', this.scrollToSection));
  }

  init() {
    if (this.linksInternos.length) {
      this.addEvent();
    }
    return this;
  }
}
