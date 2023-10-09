window.onload = init;

function init(){
  const map = new ol.Map({
    view: new ol.View({
      center: [0, 0],
      zoom: 3,
      //extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516]
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        zIndex: 1,
        visible: false,
        extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
        opacity: 0.1
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
        visible: false,
        extent: [12400753.576694038, -5658730.000549673, 17174426.336716905, -980228.5067132516],
        opacity: 0.1
      }),

      // Bing Maps Basemap Layer
      new ol.layer.Tile({
        source: new ol.source.BingMaps({
          key: "Your Bingmaps API KEY Here",
          imagerySet: 'CanvasGray'  // Road, CanvasDark, CanvasGray
        }),
        visible: false
      })
    ]
  })
  map.addLayer(layerGroup);

  // CartoDB BaseMap Layer
  const cartoDBBaseLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png',
      attributions: '© CARTO'
    }),
    visible: false
  })
  map.addLayer(cartoDBBaseLayer);

  // TileDebug
  const tileDebugLayer = new ol.layer.Tile({
    source: new ol.source.TileDebug(),
    visible: false
  })
  map.addLayer(tileDebugLayer);

  // Stamen basemap layer
  const stamenBaseLayer = new ol.layer.Tile({
    source: new ol.source.Stamen({
      layer: 'terrain-labels',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: false
  })
  map.addLayer(stamenBaseLayer);

  const stamenBaseMapLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
      url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg',
      attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: true
  })
  map.addLayer(stamenBaseMapLayer);
}


