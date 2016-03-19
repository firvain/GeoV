const ol = require('openlayers');
function createMap(el) {
  const myMap = new ol.Map({
    target: el,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.MapQuest({
          layer: 'sat',
        }),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4,
    }),
  });
  return myMap;
}

export default createMap;
