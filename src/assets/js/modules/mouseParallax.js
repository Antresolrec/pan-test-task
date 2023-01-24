class MouseParallax {
  constructor(el) {
    this.el = el;
    this.speed = this.el.getAttribute('data-speed');
    this.x = null;
    this.y = null;

    if (this.el) {
      this.init();
    }
  }

  options(e) {
    this.x = e.clientX / window.innerWidth;
    this.y = e.clientY / window.innerHeight;
    if (this.el.hasAttribute('data-reverse')) {
      this.style(true);
    } else {
      this.style();
    }
  }

  style(state) {
    if (state) {
      this.el.style.transform = `translate(${this.x * this.speed}px, ${
        this.y * this.speed
      }px)`;
    } else {
      this.el.style.transform = `translate(-${this.x * this.speed}px, -${
        this.y * this.speed
      }px)`;
    }
  }

  listener() {
    window.addEventListener('mousemove', (e) => {
      this.options(e);
    });
  }

  init() {
    this.listener();
  }
}

export default function initMouseParallax() {
  const mouseParallax = document.querySelectorAll('.js-mouse-parallax');
  if (mouseParallax) {
    mouseParallax.forEach((el) => {
      new MouseParallax(el);
    });
  }
}
