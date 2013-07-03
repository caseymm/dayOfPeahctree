

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

var Group = L.AwesomeMarkers.icon({
  icon: 'group', 
  color: 'blue',
  labelAnchor: [7, -33]
});

var Shopping = L.AwesomeMarkers.icon({
  icon: 'tags', 
  color: 'blue',
  labelAnchor: [7, -33]
});

var Hospital = L.AwesomeMarkers.icon({
  icon: 'h-sign', 
  color: 'blue',
  labelAnchor: [7, -33]
});

var Museum = L.AwesomeMarkers.icon({
  icon: 'bookmark-empty', 
  color: 'blue',
  labelAnchor: [7, -33]
});

var Offices = L.AwesomeMarkers.icon({
  icon: 'building', 
  color: 'blue',
  labelAnchor: [7, -33]
});

var School = L.AwesomeMarkers.icon({
  icon: 'pencil', 
  color: 'blue',
  labelAnchor: [7, -33]
});

var Hotel = L.AwesomeMarkers.icon({
  icon: 'suitcase', 
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

a1 = L.marker([33.801135,-84.391801], {icon: Group}).bindPopup('<a href="http://www.tuktukatl.com/" target="blank"><b>Tuk Tuk Thai Food Loft</b></a> <br /> 1745 Peachtree Street NE, Atlanta');
a2 = L.marker([33.846307,-84.367726], {icon: Group}).bindPopup('<a href="http://highlandbakery.com/" target="blank"><b>Highland Bakery</b></a> <br /> 3343 Peachtree Road NE, Atlanta');
a3 = L.marker([33.830471,-84.366031], {icon: Group}).bindPopup('<b>The Cathedral of St. Philip</b> <br /> Church');
a4 = L.marker([33.82943,-84.385704], {icon: Group}).bindPopup('<b>Second-Ponce de Leon Baptist Church</b> <br /> Church');
a5 = L.marker([33.828163,-84.386246], {icon: Group}).bindPopup('<b>Cathedral of Christ the King</b> <br /> Church');
a6 = L.marker([33.823223,-84.386848], {icon: Group}).bindPopup('<b>Covenant Presbyterian Latchkey</b> <br /> Church');
a7 = L.marker([33.796772,-84.389648], {icon: Group}).bindPopup('<b>Peachtree Christian Church</b> <br /> Church');
a8 = L.marker([33.790142,-84.384964], {icon: Group}).bindPopup('<b>First Presbyterian Church</b> <br /> Church');
a9 = L.marker([33.845604,-84.3685], {icon: Group}).bindPopup('<b>Peachtree Road United Methodist</b> <br /> Church');
a10 = L.marker([33.796013,-84.387939], {icon: Group}).bindPopup('<b>The Temple</b> <br /> Synagogue');
a23 = L.marker([33.799999,-84.392639], {icon: Group}).bindPopup('<b>Atlanta Masonic Center</b> <br /> Lodge');

a27 = L.marker([33.790806,-84.3862], {icon: Group}).bindPopup('<b>Pershing Point Park</b> <br /> Park');
a28 = L.marker([33.7869,-84.382736], {icon: Group}).bindPopup('<b>Peachtree Cir. at 15th St. Triangle</b> <br /> Park');
a29 = L.marker([33.844196,-84.371178], {icon: Group}).bindPopup('<b>Charlie Loudermilk Park</b> <br /> Park');

a11 = L.marker([33.819141,-84.386993], {icon: Shopping}).bindPopup('<b>Peachtree-Battle Shopping Center</b> <br /> Shopping');
a12 = L.marker([33.816879,-84.390511], {icon: Shopping}).bindPopup('<b>Peachtree Square Shopping Center</b> <br /> Shopping');
a13 = L.marker([33.782036,-84.384399], {icon: Shopping}).bindPopup('<b>Colony Square Mall</b> <br /> Shopping');
a14 = L.marker([33.838978,-84.38031], {icon: Shopping}).bindPopup('<b>The Peach Shopping Center</b> <br /> Shopping');
a15 = L.marker([33.840137,-84.37925], {icon: Shopping}).bindPopup('<b>Buckhead Plaza</b> <br /> Shopping and Offices');

a16 = L.marker([33.808571,-84.395271], {icon: Hospital}).bindPopup('<b>Piedmont Hospital</b> <br /> Hospital');

a17 = L.marker([33.795593,-84.387619], {icon: Museum}).bindPopup('<b>Rhodes Hall</b> <br /> Historic House Museum');
a18 = L.marker([33.788338,-84.383568], {icon: Museum}).bindPopup('<b>Woodruff Arts Center</b> <br /> Museum');
a19 = L.marker([33.783485,-84.38353], {icon: Museum}).bindPopup('<b>Margaret Mitchell House and Museum</b> <br /> Historic House Museum');

a20 = L.marker([33.793865,-84.387474], {icon: Offices}).bindPopup('<b>SunTrust: Pershing Point</b> <br /> Offices');
a21 = L.marker([33.781452,-84.38427], {icon: Offices}).bindPopup('<b>Federal Reserve Bank of Atlanta</b> <br /> Offices');
a22 = L.marker([33.841831,-84.37587], {icon: Offices}).bindPopup('<b>Terminus</b> <br /> Offices');

a24 = L.marker([33.796848,-84.390961], {icon: School}).bindPopup('<b>Savannah College of Art and Design Atlanta</b> <br /> School');
a25 = L.marker([33.790047,-84.385651], {icon: School}).bindPopup('<b>Atlanta College of Art</b> <br /> School');
a26 = L.marker([33.792076,-84.385384], {icon: School}).bindPopup('<b>E Rivers Elementary School</b> <br /> School');

a30 = L.marker([33.83493,-84.382637], {icon: Hotel}).bindPopup('<b>Lowes Atlanta Hotel</b> <br /> Hotel');
a31 = L.marker([33.845333,-84.370377], {icon: Hotel}).bindPopup('<b>InterContinental Buckhead Atlanta</b> <br /> Hotel');
a32 = L.marker([33.844746,-84.368797], {icon: Hotel}).bindPopup('<b>Grand Hyatt Atlanta in Buckhead</b> <br /> Hotel');
a33 = L.marker([33.819553,-84.389938], {icon: Hotel}).bindPopup('<b>Embassy Suites Atlanta - Buckhead</b> <br /> Hotel');
a34 = L.marker([33.799446,-84.392479], {icon: Hotel}).bindPopup('<b>Residence Inn Atlanta Midtown/17th Street</b> <br /> Hotel');

b1 = L.marker([33.848,-84.367], {icon: Marta}).bindPopup('<a href="http://www.itsmarta.com/ns-buc-overview.aspx" target="blank"><b>Buckhead</b></a><br /> MARTA Station <br /> <div class="martaRed">Red Line</div>');
b2 = L.marker([33.845113,-84.358], {icon: Marta}).bindPopup('<a href="http://www.itsmarta.com/ne-len-overview.aspx" target="blank"><b>Lenox</b></a><br /> MARTA Station <br /> <div class="martaGold">Gold Line</div>');
b3 = L.marker([33.789242,-84.38650], {icon: Marta}).bindPopup('<a href="http://www.itsmarta.com/ne-art-overview.aspx" target="blank"><b>Arts Center</b></a><br /> MARTA Station <br /><div class="martaRed">Red Line</div> <div class="martaGold">Gold Line</div>');
b4 = L.marker([33.780910,-84.38623], {icon: Marta}).bindPopup('<a href="http://www.itsmarta.com/ns-mid-overview.aspx" target="blank"><b>Midtown</b></a><br /> MARTA Station <br /> <div class="martaRed">Red Line</div> <div class="martaGold">Gold Line</div>');
//L.marker([33.782179,-84.369078], {icon: Marker}).addTo(map)
  //.bindLabel('Park Tavern').bindPopup('<b>Park Tavern</b> <br /> 500 10th Street N.E., <br /> Atlanta, GA 30309');
  
c1 = L.marker([33.85356,-84.359508], {icon: start});
c2 = L.marker([33.781751,-84.372811], {icon: finish});

var food = L.layerGroup([a,b,c,d,e,f,g,h,i,j,k,l,m,n]);
var shelter = L.layerGroup([a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34]);
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
    "View Point/Shelter": shelter,
    "MARTA": marta
    //"All scheduled new libraries": all
};

L.control.layers(baseLayers, overlayMaps).addTo(map);
 
