class Progress {
  constructor() {
    this.wrapper = document.querySelector('.js-progress');
    if (this.wrapper) {
      this.btn = this.wrapper.querySelector('.js-progress__btn');
      this.line = this.wrapper.querySelector('.js-progress__line');
      this.start = this.wrapper.dataset.start;
      this.increase = Number(this.wrapper.dataset.increase);
      this.count = Number(this.start);
      this.init();
    }
  }

  setLine(count) {
    if (count <= 100) {
      this.line.style.width = `${count}%`;
      this.line.innerText = `${count} %`;
    }
  }

  setBtn() {
    this.btn.innerText = `+ ${this.increase} %`;
  }

  onClick(e) {
    e.preventDefault();
    this.count += this.increase;
    this.setLine(this.count);
    if (this.count === 100) {
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

export default Progress;
