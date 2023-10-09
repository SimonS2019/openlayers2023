window.onload = init;

function init(){
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 3,
      extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516]
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        zIndex: 1,
        visible: true,
        extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
        opacity: 0.4
      })
    ],
    target: 'js-map'
  })

  // Layer Group
  const layerGroup = new ol.layer.Group({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
          url: 'https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        }),
        zIndex: 0,
        visible: true,
        extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
        opacity: 0.1
      })
    ]
  })
  map.addLayer(layerGroup);

  // Print out mouse click coordinates
  map.on('click', function(e){
    console.log(e.coordinate);
  })
}


