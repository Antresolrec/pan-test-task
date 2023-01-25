/* eslint-disable */
const balloonTemplate = `
  <div class="balloon">
    <div class="balloon__title">Наш адрес</div>
    <div class="balloon__text">Санкт-Петербург, Владимирский проспект, 23, лит. А, офис 701</div>
    <a href="#" class="balloon__link">Схема проезда</a>
  </div>
`;
const libraryPath = 'https://api-maps.yandex.ru/2.1/?apikey=3a11d429-ede5-44bf-b35b-7d257f53ec29&lang=ru_RU';
const centerOfMap = [59.928194, 30.346644];
const mapContainer = document.querySelector('.js-map-container');
let visible = false;
let loaded = false;
let interval = null;

function initMap() {
  const myMap = new ymaps.Map('js-map', {
    center: centerOfMap,
    zoom: 15,
  });

  const myPlacemark = new ymaps.Placemark(centerOfMap, {
    balloonContent: balloonTemplate,
  }, {
    iconLayout: 'default#image',
    iconImageHref: 'content/icons/icon-marker.svg',
    iconImageSize: [50, 50],
    iconImageOffset: [-25, -50],
  });

  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)


  myMap.geoObjects.add(myPlacemark);

  myPlacemark.balloon.open();
}

function loadLibrary() {
  const mapLibrary = document.createElement('script');
  mapLibrary.src = libraryPath;
  document.body.append(mapLibrary);
}

function tryLoad() {
  if (!loaded && window.ymaps) {
    loaded = true;
    ymaps.ready(initMap);
    window.removeEventListener('scroll', loadMap);
    removeInterval();
  }
}

function addInterval() {
  if (!interval) {
    interval = setInterval(tryLoad, 500);
  }
}

function removeInterval() {
  clearInterval(interval);
  interval = null;
}

function loadMap() {
  if (mapContainer.classList.contains('_show')) {
    if (!visible) {
      visible = true;
      loadLibrary();
      addInterval();
    }
  }
}

window.addEventListener('scroll', loadMap);
loadMap();
/* eslint-enable */
