var Marker = L.AwesomeMarkers.icon({
  icon: 'food', 
  color: 'red',
  labelAnchor: [7, -33]
})

var map = L.map('map', {
			center: new L.LatLng(33.821656,-84.373627),
			zoom: 12,
		});

L.tileLayer('http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/98490/256/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                        maxZoom: 18
                        }).addTo(map);



var start = L.icon({
    iconUrl: '../dayOfPeachtree/map/images/flag_green3.png',

    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [4, 30], // point of the icon which will correspond to marker's location
});

var finish = L.icon({
    iconUrl: '../dayOfPeachtree/map/images/flag_red3.png',

    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [4, 30], // point of the icon which will correspond to marker's location
});

var Marta = L.icon({
    iconUrl: '../dayOfPeachtree/map/images/martaF.png',

    iconSize:     [26, 26], // size of the icon
    iconAnchor:   [20,10], // point of the icon which will correspond to marker's location
    popupAnchor:  [-7,-7], // point from which the popup should open relative to the iconAnchor
    labelAnchor: [0, 0]
});


L.marker([33.847305,-84.366031], {icon: Marker}).addTo(map)
  .bindLabel('Cook Hall').bindPopup('<a href="http:/cookhallatlanta.com" target="blank"><b>Cook Hall</b></a> <br /> 3377 Peachtree Road NE, <br /> Atlanta GA 30325');
L.marker([33.804274,-84.39369], {icon: Marker}).addTo(map)
  .bindLabel('R. Thomas Deluxe Grill').bindPopup('<a href="http://www.rthomasdeluxegrill.net" target="blank"><b>R. Thomas Deluxe Grill</b></a> <br /> 1812 Peachtree Street, NW, <br /> Atlanta, Georgia 30309');
L.marker([33.786691,-84.383776], {icon: Marker}).addTo(map)
  .bindLabel('TAP').bindPopup('<a href="http://www.tapat1180.com" target="blank"><b>TAP</b></a> <br /> 1180 Peachtree Street, NE, <br /> Atlanta, GA 30303');
L.marker([33.781983,-84.380107], {icon: Marker}).addTo(map)
  .bindLabel('The Flying Biscuit Cafe').bindPopup('<a href="http://www.flyingbiscuit.com" target="blank"><b>The Flying Biscuit Cafe</b></a> <br /> 1001 Piedmont Ave NE <br /> Atlanta, GA 30309');

L.marker([33.848,-84.367], {icon: Marta}).addTo(map)
  .bindLabel('Buckhead MARTA').bindPopup('<a href="http://www.itsmarta.com/ns-buc-overview.aspx" target="blank"><b>Buckhead</b></a><br /> MARTA Station <br /> <div class="martaRed">Red Line</div>');
L.marker([33.845113,-84.358], {icon: Marta}).addTo(map)
  .bindLabel('Lenox MARTA').bindPopup('<a href="http://www.itsmarta.com/ne-len-overview.aspx" target="blank"><b>Lenox</b></a><br /> MARTA Station <br /> <div class="martaGold">Gold Line</div>');
L.marker([33.789242,-84.38650], {icon: Marta}).addTo(map)
  .bindLabel('Arts Center MARTA').bindPopup('<a href="http://www.itsmarta.com/ne-art-overview.aspx" target="blank"><b>Arts Center</b></a><br /> MARTA Station <br /><div class="martaRed">Red Line</div> <div class="martaGold">Gold Line</div>');
L.marker([33.780910,-84.38623], {icon: Marta}).addTo(map)
  .bindLabel('Midtown MARTA').bindPopup('<a href="http://www.itsmarta.com/ns-mid-overview.aspx" target="blank"><b>Midtown</b></a><br /> MARTA Station <br /> <div class="martaRed">Red Line</div> <div class="martaGold">Gold Line</div>');
//L.marker([33.782179,-84.369078], {icon: Marker}).addTo(map)
  //.bindLabel('Park Tavern').bindPopup('<b>Park Tavern</b> <br /> 500 10th Street N.E., <br /> Atlanta, GA 30309');
  
L.marker([33.85356,-84.359508], {icon: start}).addTo(map).bindLabel('Start');
L.marker([33.781751,-84.372811], {icon: finish}).addTo(map).bindLabel('Finish');


 
 var path = L.polyline([
				[33.85356,-84.359508],
				[33.849568,-84.362941],
				[33.848891,-84.364743],
				[33.848998,-84.365687],
				[33.846859,-84.368091],
				[33.845327,-84.368691],
				[33.840372,-84.377317],
				[33.840301,-84.378519],
				[33.839017,-84.380236],
				[33.834134,-84.382854],
				[33.8295,-84.387445],
				[33.822797,-84.387445],
				[33.817913,-84.388947],
				[33.81588,-84.390879],
				[33.815167,-84.391608],
				[33.812992,-84.392509],
				[33.811851,-84.392209],
				[33.806039,-84.393926],
				[33.802544,-84.39281],
				[33.800547,-84.392638],
				[33.799406,-84.392166],
				[33.79855,-84.391265],
				[33.79723,-84.389119],
				[33.796696,-84.387875],
				[33.794734,-84.387724],
				[33.789081,-84.384077],
				[33.786584,-84.383154],
				[33.784462,-84.382961],
				[33.783196,-84.383862],
				[33.781751,-84.384034],
				[33.781751,-84.372811]], {}).addTo(map);
 
