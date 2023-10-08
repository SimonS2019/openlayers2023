window.onload = init;
function init(){
  const map = new ol.Map({
    view: new ol.View({
      center: [-11957828, 7979541],
      zoom: 3,
      maxZoom: 6,
      minZoom: 2,
      rotation: 0.5
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'js-map'
  })
}

