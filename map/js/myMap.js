var Marker = L.AwesomeMarkers.icon({
  icon: 'food', 
  color: 'red',
  labelAnchor: [7, -33]
})

var Cook = L.marker([33.847305,-84.366031], {icon: Marker}).bindLabel('Cook Hall Atlanta').bindPopup('<b>Cook Hall Atlanta</b> <br /> 3377 Peachtree Road NE, <br /> Atlanta GA 30325'),
    RThomas = L.marker([33.804274,-84.39369], {icon: Marker}).bindLabel('R. Thomas').bindPopup('<b>R. Thomas</b> <br /> 1812 Peachtree Street, NW, <br /> Atlanta, Georgia 30309'),
    TAP = L.marker([33.786691,-84.383776], {icon: Marker}).bindLabel('TAP').bindPopup('<b>TAP</b> <br /> 1180 Peachtree Street, NE, <br /> Atlanta, GA 30303'),
    Flying = L.marker([33.781983,-84.380107], {icon: Marker}).bindLabel('Flying Biscuit').bindPopup('<b>Flying Biscuit</b> <br /> 1001 Piedmont Ave NE <br /> Atlanta, GA 30309'),
    Park = L.marker([33.782179,-84.369078], {icon: Marker}).bindLabel('Park Tavern').bindPopup('<b>Palmetto Branch</b> <br /> 500 10th Street N.E., <br /> Atlanta, GA 30309'),
    
    
//var cmAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
   // cmUrl = 'http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/98490/256/{z}/{x}/{y}.png';

//var regular   = L.tileLayer(cmUrl, {styleId: 997, attribution: cmAttr});

		map = L.map('map', {
			center: new L.LatLng(33.821656,-84.373627),
			zoom: 12,
			layers: [Cook, RThomas,TAP, Flying, Park],
		});


L.tileLayer('http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/98490/256/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                        maxZoom: 18
                        }).addTo(map);

//var baseLayers = {};


//L.control.layers(baseLayers).addTo(map);
    
//var marker = L.marker([33.751748,-84.391479]).bindLabel('Look revealing label!').addTo(map);
    
//var popup = L.popup()
    //.setLatLng([33.751748,-84.491479])
    //.setContent("I am a standalone popup.")
    //.openOn(map);