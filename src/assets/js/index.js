import initForm from './modules/form-validator/index';
import Select from './modules/select';
import Header from './modules/header';
import BackToTop from './modules/backToTop';
import ScrollTo from './modules/scrollToBlock';
import Slider from './modules/slider';
import ShowBlock from './modules/showBlock';
import initDrop from './modules/dropMenu';
import initSpollers from './modules/spollers';
import initMouseParallax from './modules/mouseParallax';
import Progress from './modules/progress';
import './modules/burger';
import './modules/map';

function initModules() {
  new Header();
  new BackToTop();
  new ScrollTo();
  new Select();
  new Slider();
  new ShowBlock();
  new Progress();
  initSpollers();
  initDrop();
  initForm();
  initMouseParallax();

  document.body.classList.add('_js-loaded');
}

document.addEventListener('DOMContentLoaded', initModules);
