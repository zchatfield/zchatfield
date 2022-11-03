src="secret_key.js"

function mapDisplay(){

  var mymap = L.map('mapid');

/*  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',{
      maxZoom: 18,
      id: 'mapbox/satellite-streets-v11',
      accessToken: mapbox_access_token,
  }).addTo(mymap);
*/

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
  }).addTo(mymap);

/*
  var marker = L.marker([51.5, -0.09]).addTo(mymap);

  var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
  }).addTo(mymap);

  var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
  ]).addTo(mymap);

  var polyline = L.polyline([
    [51.506, -0.08],
    [51.502, -0.06],
    [51.507, -0.047]
  ]).addTo(mymap);

  marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
  circle.bindPopup("I am a circle.");
  polygon.bindPopup("I am a polygon.");

  marker.on('click', function(e){
    mymap.setView(e.latlng, 13);
  });

  circle.on('click', function(e){
    mymap.setView(e.latlng, 13);
  });

  polygon.on('click', function(e){
    mymap.setView(e.latlng, 13);
  });
*/
  var options = {
    key: geocoder_api_key,
    limit:10
  };

  var control = L.control.openCageSearch(options).addTo(mymap);

  var ZoomViewer = L.Control.extend({
    onAdd: function(){
      var gauge = L.DomUtil.create('div');
      gauge.style.width = '200px';
      gauge.style.background = 'rgba(255,255,255,0.5)';
      gauge.style.textAlign = 'left';
      mymap.on('zoomstart zoom zoomend', function(ev){
        gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
      })
      return gauge;
    }
  });

  (new ZoomViewer).addTo(mymap);

  mymap.setView([0, 0], 1);
};
