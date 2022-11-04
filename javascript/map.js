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

  // SEVEN WONDERS OF THE WORLD
  var marker1 = L.marker([27.174961, 78.042385]).addTo(mymap);
  var marker2 = L.marker([40.334245, 116.477652]).addTo(mymap);
  var marker3 = L.marker([30.328611, 35.441944]).addTo(mymap);
  var marker4 = L.marker([-22.951389, -43.2108334]).addTo(mymap);
  var marker5 = L.marker([-13.163056, -72.545556]).addTo(mymap);
  var marker6 = L.marker([20.682778, -88.569167]).addTo(mymap);
  var marker7 = L.marker([41.890169, 12.492269]).addTo(mymap);

// add unique marker symbols
//add custom pop up windows for each
//pop up window info: name of landmark in bold, a photo the landmark,
  //and a short paragraph about each landmark

marker1.bindPopup('<img src="https://en.wikipedia.org/wiki/Taj_Mahal#/media/File:Taj_Mahal_in_India_-_Kristian_Bertel.jpg" width=100 height=100/><b>India\'s Taj Mahal</b><br>The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.')
marker2.bindPopup('<img src="https://en.wikipedia.org/wiki/Great_Wall_of_China#/media/File:The_Great_Wall_of_China_at_Jinshanling-edit.jpg"/><b>Great Wall of China</b></br>The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng) is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe.')
marker3.bindPopup('<img src="https://en.wikipedia.org/wiki/Petra#/media/File:Treasury_petra_crop.jpeg"/><b>Petra in Jordan</b><br>Petra (Arabic: ٱلْبَتْرَاء, romanized: Al-Batrāʾ; Ancient Greek: Πέτρα, "Rock", Nabataean: 𐢛𐢚𐢓𐢈‎), originally known to its inhabitants as Raqmu or Raqēmō, is a historic and archaeological city in southern Jordan. It is adjacent to the mountain of Jabal Al-Madbah, in a basin surrounded by mountains forming the eastern flank of the Arabah valley running from the Dead Sea to the Gulf of Aqaba.')
marker4.bindPopup('<img src="https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)#/media/File:Christ_the_Redeemer_-_Cristo_Redentor.jpg"/><b>Brazil\'s statue of Christ the Redeemer</b><br>Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ], local pronunciation: [ˈkɾiɕtŭ̥ xe̞dẽˈtoɦ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide. It is made of reinforced concrete and soapstone.')
marker5.bindPopup('<img src="https://en.wikipedia.org/wiki/Machu_Picchu#/media/File:Before_Machu_Picchu.jpg"/><b>Peru\'s Machu Picchu</b><br>Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a 2,430-meter (7,970 ft) mountain ridge. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers (50 mi) northwest of Cusco. The Urubamba River flows past it, cutting through the Cordillera and creating a canyon with a tropical mountain climate.')
marker6.bindPopup('<img src="https://en.wikipedia.org/wiki/Chichen_Itza#/media/File:Chichen_Itza_3.jpg"/><b>Mexico\'s Chichen Itza Pyramid</b><br>Chichen Itza was a large pre-Columbian city built by the Maya people of the Terminal Classic period. The archeological site is located in Tinúm Municipality, Yucatán State, Mexico.')
marker7.bindPopup('<img src="https://en.wikipedia.org/wiki/Colosseum#/media/File:Colosseo_2020.jpg"/><b>The Colosseum in Rome</b><br>The Colosseum (/ˌkɒləˈsiːəm/ KOL-ə-SEE-əm; Italian: Colosseo [kolosˈsɛːo]) is an oval amphitheatre in the centre of the city of Rome, Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built, and is still the largest standing amphitheatre in the world today, despite its age.')

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
