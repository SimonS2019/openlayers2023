window.onload = init;

function init(){
  // Controls
  const fullScreenControl = new ol.control.FullScreen();
  const mousePositionControl = new ol.control.MousePosition();
  const overViewMapControl = new ol.control.OverviewMap({
    collapsed: false,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()      
      })
    ]
  });
  const scaleLineControl = new ol.control.ScaleLine();
  const zoomSliderControl = new ol.control.ZoomSlider();
  const zoomToExtentControl = new ol.control.ZoomToExtent();

  const map = new ol.Map({
    view: new ol.View({
      center: [-12080385, 7567433],
      zoom: 3, 
      maxZoom: 6,
      minZoom: 2,
      rotation: 0
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    target: 'js-map',
    keyboardEventTarget: document,
    controls: ol.control.defaults().extend([
      fullScreenControl,
      mousePositionControl,
      overViewMapControl,
      scaleLineControl,
      zoomSliderControl,
      zoomToExtentControl
    ])
  })
  

  const popupContainerElement = document.getElementById('popup-coordinates');
  const popup = new ol.Overlay({
    element: popupContainerElement,
    positioning: 'top-right'
  })

  map.addOverlay(popup);

  map.on('click', function(e){
    const clickedCoordinate = e.coordinate;
    popup.setPosition(undefined);
    popup.setPosition(clickedCoordinate);
    popupContainerElement.innerHTML = clickedCoordinate;
  })
  
  // DragRotate Interaction
  const dragRotateInteraction = new ol.interaction.DragRotate({
    condition: ol.events.condition.altKeyOnly
  })

  map.addInteraction(dragRotateInteraction)

  // Draw Interaction
  const drawInteraction = new ol.interaction.Draw({
    type: 'Polygon',
    freehand: true
  })
  map.addInteraction(drawInteraction);

  drawInteraction.on('drawend', function(e){
    let parser = new ol.format.GeoJSON();
    let drawnFeatures = parser.writeFeatures([e.feature]);
    console.log(drawnFeatures);
  })
}


