

/*var map = L.map('map', {
			center: new L.LatLng(33.821656,-84.373627),
			zoom: 12,
			layers: [food, shelter, marta],
		});

L.tileLayer('http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/101282/256/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                        maxZoom: 18
                        }).addTo(map);*/

var Marker = L.AwesomeMarkers.icon({
  icon: 'food', 
  color: 'red',
  labelAnchor: [7, -33]
});

var Shelter = L.AwesomeMarkers.icon({
  icon: 'umbrella', 
  color: 'blue',
  labelAnchor: [7, -33]
});

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


a = L.marker([33.847305,-84.366031], {icon: Marker}).bindPopup('<a href="http:/cookhallatlanta.com" target="blank"><b>Cook Hall</b></a> <br /> 3377 Peachtree Road NE, <br /> Atlanta');
b = L.marker([33.804274,-84.39369], {icon: Marker}).bindPopup('<a href="http://www.rthomasdeluxegrill.net" target="blank"><b>R. Thomas Deluxe Grill</b></a> <br /> 1812 Peachtree Street, NW, <br /> Atlanta');
c = L.marker([33.786691,-84.383776], {icon: Marker}).bindPopup('<a href="http://www.tapat1180.com" target="blank"><b>TAP</b></a> <br /> 1180 Peachtree Street, NE, <br /> Atlanta');
d = L.marker([33.781983,-84.380107], {icon: Marker}).bindPopup('<a href="http://www.flyingbiscuit.com" target="blank"><b>The Flying Biscuit Cafe</b></a> <br /> 1001 Piedmont Ave NE <br /> Atlanta');
e = L.marker([33.845665,-84.368305], {icon: Marker}).bindPopup('<a href="../../css/images/SouthernArt.pdf" target="blank"><b>Southern Art</b></a> <br /> 3315 Peachtree Road NE, Atlanta');
f = L.marker([33.839231,-84.379056], {icon: Marker}).bindPopup('<a href="http://www.cafeagora.com/" target="blank"><b>Cafe Agora</b></a> <br /> 262 East Paces Ferry, Atlanta');
g = L.marker([33.835702,-84.382188], {icon: Marker}).bindPopup('<a href="http://www.brioitalian.com/index.html" target="blank"><b>Brio Tuscan Grille</b></a> <br /> 2964 Peachtree Road, Atlanta');
h = L.marker([33.819927,-84.387209], {icon: Marker}).bindPopup('<a href="http://www.yelp.com/biz/jalisco-mexican-restaurant-atlanta" target="blank"><b> Jalisco </b></a> <br /> 2337 Peachtree Road NE, Atlanta');
i = L.marker([33.779451,-84.367983], {icon: Marker}).bindPopup('<a href="http://apresdiem.com/" target="blank"><b> Apres Diem </b></a> <br /> 931 Monroe Drive Northeast, Atlanta');
j = L.marker([33.783374,-84.383841], {icon: Marker}).bindPopup('<a href="http://www.cafeintermezzo.com/" target="blank"><b> Cafe Intermezzo </b></a> <br /> 1065 Peachtree Street at 11th, Atlanta');
k = L.marker([33.784105,-84.38206], {icon: Marker}).bindPopup('<a href="http://einsteinsatlanta.com/" target="blank"><b> Einstein&#39;s </b></a> <br /> 1077 Juniper St., Atlanta');
l = L.marker([33.783891,-84.383583], {icon: Marker}).bindPopup('<a href="http://www.micocinarestaurants.com/locations/midtown.html" target="blank"><b> Mi Cocina </b></a> <br /> 1080 Peachtree Street, Atlanta');
m = L.marker([33.784021,-84.382945], {icon: Marker}).bindPopup('<a href="https://www.facebook.com/CucinaAsellina" target="blank"><b> Cucina Asellina </b></a> <br /> 1075 Peachtree Street, Atlanta');
n = L.marker([33.783829,-84.383572], {icon: Marker}).bindPopup('<a href="http://www.rasushi.com/atlanta" target="blank"><b> Ra Sushi </b></a> <br /> 1080 Peachtree Street, Atlanta');

a1 = L.marker([33.801135,-84.391801], {icon: Shelter}).bindPopup('<a href="http://www.tuktukatl.com/" target="blank"><b>Tuk Tuk Thai Food Loft</b></a> <br /> 1745 Peachtree Street NE, Atlanta');
a2 = L.marker([33.846307,-84.367726], {icon: Shelter}).bindPopup('<a href="http://highlandbakery.com/" target="blank"><b>Highland Bakery</b></a> <br /> 3343 Peachtree Road NE, Atlanta');


b1 = L.marker([33.848,-84.367], {icon: Marta}).bindPopup('<a href="http://www.itsmarta.com/ns-buc-overview.aspx" target="blank"><b>Buckhead</b></a><br /> MARTA Station <br /> <div class="martaRed">Red Line</div>');
b2 = L.marker([33.845113,-84.358], {icon: Marta}).bindPopup('<a href="http://www.itsmarta.com/ne-len-overview.aspx" target="blank"><b>Lenox</b></a><br /> MARTA Station <br /> <div class="martaGold">Gold Line</div>');
b3 = L.marker([33.789242,-84.38650], {icon: Marta}).bindPopup('<a href="http://www.itsmarta.com/ne-art-overview.aspx" target="blank"><b>Arts Center</b></a><br /> MARTA Station <br /><div class="martaRed">Red Line</div> <div class="martaGold">Gold Line</div>');
b4 = L.marker([33.780910,-84.38623], {icon: Marta}).bindPopup('<a href="http://www.itsmarta.com/ns-mid-overview.aspx" target="blank"><b>Midtown</b></a><br /> MARTA Station <br /> <div class="martaRed">Red Line</div> <div class="martaGold">Gold Line</div>');
//L.marker([33.782179,-84.369078], {icon: Marker}).addTo(map)
  //.bindLabel('Park Tavern').bindPopup('<b>Park Tavern</b> <br /> 500 10th Street N.E., <br /> Atlanta, GA 30309');
  
c1 = L.marker([33.85356,-84.359508], {icon: start});
c2 = L.marker([33.781751,-84.372811], {icon: finish});

var food = L.layerGroup([a,b,c,d,e,f,g,h,i,j,k,l,m,n]);
var shelter = L.layerGroup([a1, a2]);
var marta = L.layerGroup([b1, b2, b3, b4]);
var start = L.layerGroup([c1, c2]);
 
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
				[33.781751,-84.372811]], {});

var cmAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    cmUrl = 'http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/101282/256/{z}/{x}/{y}.png';
 
 var regular   = L.tileLayer(cmUrl, {styleId: 101282, attribution: cmAttr});

		var map = L.map('map', {
			center: new L.LatLng(33.821656,-84.373627),
			zoom: 12,
			layers: [regular, food, shelter, marta, start, path],
		});


L.tileLayer('http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/101282/256/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                        maxZoom: 18
                        }).addTo(map);




var baseLayers = {};

var overlayMaps = {
    
    "Food": food,
    "Shelter": shelter,
    "MARTA": marta
    //"All scheduled new libraries": all
};

L.control.layers(baseLayers, overlayMaps).addTo(map);
 
