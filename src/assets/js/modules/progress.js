export default class Progress {
  constructor() {
    this.wrapper = document.querySelector('.js-progress');

    if (this.wrapper) {
      this.btn = this.wrapper.querySelector('.js-progress__btn');
      this.line = this.wrapper.querySelector('.js-progress__line');
      this.end = Number(this.wrapper.dataset.end);
      this.start = Number(this.wrapper.dataset.start);
      this.increase = Number(this.wrapper.dataset.increase);

      this.init();
    }
  }

  setLine(count) {
    if (count <= this.end) {
      this.line.style.width = `${count}%`;
      this.line.innerText = `${count} %`;
    }
  }

  setBtn() {
    this.btn.innerText = `+ ${this.increase} %`;
  }

  onClick(e) {
    e.preventDefault();

    this.start += this.increase;
    this.setLine(this.start);

    if (this.start === this.end) {
      this.btn.setAttribute('disabled', true);
      this.btn.removeEventListener('click', this.onClick);
    }
  }

  addListener() {
    this.btn.addEventListener('click', this.onClick);
  }

  init() {
    this.onClick = this.onClick.bind(this);
    this.setBtn();
    this.setLine(this.start);
    this.addListener();
  }
}
