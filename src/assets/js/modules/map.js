/* eslint-disable */

const centerOfMap = [59.928194, 30.346644];
const balloonTemplate = `
  <div class="balloon">
    <div class="balloon__title">Наш адрес</div>
    <div class="balloon__text">Санкт-Петербург, Владимирский проспект, 23, лит. А, офис 701</div>
    <a href="#" class="balloon__link">Схема проезда</a>
  </div>
`;

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

ymaps.ready(initMap);

/* eslint-enable */
