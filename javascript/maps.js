//Map load
var locations = [
  ['Portsmouth Univeristy Library', 50.793659, -1.097766, 'U', 'unibuilding'],
  ['Richmond Building', 50.7980676, -1.1017053, 'U', 'unibuilding'],
  ['Portland Building', 50.7985186, -1.1014946, 'U', 'unibuilding'],
  ['Liongate Building', 50.7988986, -1.1005894, 'U', 'unibuilding'],
  ['Buckenham Building', 50,7984136, -1.1007175, 'U', 'unibuilding'],
  ['Anglesea Building', 50.7977499, -1.0986508, 'U', 'unibuilding'],
  ['Mildam Building', 50.7972227, -1.0990903, 'U', 'unibuilding'],
  ['Burnaby Building', 50.7979984, -1.1001526, 'U', 'unibuilding'],
  ['Park Building', 50.7974825, -1.096412, 'U', 'unibuilding'],
  ['Fratton Train Station', 50.793334, -1.0761587, 'T', 'trainstations'],
  ['Portsmouth and Southsea', 50.7984946, -1.0923121, 'T', 'trainstations'],
  ['Portsmouth Habour', 50.7969534, -1.1100187, 'T', 'trainstations'],
  ['James Watson', 50.7961719, -1.0962788, 'A', 'accomodation'],
  ['Bateson', 50.7960593, -1.0927163, 'A', 'accomodation'],
  ['Langstone', 50.7972496, -1.0436987, 'A', 'accomodation'],
  ['Harry Law', 50.796347, -1.0931205, 'A', 'accomodation'],
  ['Rees', 50.7885181, -1.0991036, 'A', 'accomodation'],
  ['Margaret Rule', 50.7973122, -1.0922735, 'A', 'accomodation']
];

var gmarker = [];
window.onload = function() {

  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(50.8, -1.1), zoom: 13
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  //University Building Marker
  for(i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      label: locations[i][3],
      map: map
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i){
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(map, marker);
      }
    })(marker, i));
  }

//Filer Locations depending on the users preference
//Show locations from dropdown in table
changeLocation = function(place) {
  var table = document.getElementById("mapLocationTable");
  var all = [
    ['Portsmouth Univeristy Library'],['Richmond Building'],['Portland Building'],
    ['Liongate Building'],
    ['Buckenham Building'],
    ['Anglesea Building'],
    ['Mildam Building'],
    ['Burnaby Building'],
    ['Park Building'],
    ['James Watson'],
    ['Bateson'],
    ['Langstone'],
    ['Harry Law'],
    ['Rees'],
    ['Margaret Rule'],
    ['Fratton Train Station'],
    ['Portsmouth and Southsea'],
    ['Portsmouth Habour']
  ];
  var uni = [['Portsmouth Univeristy Library'],['Richmond Building'],['Portland Building'],
  ['Liongate Building'],
  ['Buckenham Building'],
  ['Anglesea Building'],
  ['Mildam Building'],
  ['Burnaby Building'],
  ['Park Building']];
  var train =
  [['Fratton Train Station'],
  ['Portsmouth and Southsea'],
  ['Portsmouth Habour']];
  var accom =
  [['James Watson'],
  ['Bateson'],
  ['Langstone'],
  ['Harry Law'],
  ['Rees'],
  ['Margaret Rule']];

  if(place === "unibuilding"){
   uni.forEach(function(locations) {
     var row = document.createElement("tr");
     locations.forEach(function(location){
       var cell = document.createElement("td");
       cell.textContent = location;
       row.removeChild(cell);
       row.appendChild(cell);
     });
     table.appendChild(row);
   });
 } else if (place === "accomodation") {
   accom.forEach(function(locations) {
     var row = document.createElement("tr");
     locations.forEach(function(location){
       var cell = document.createElement("td");
       cell.textContent = location;
       row.appendChild(cell);
     });
     table.appendChild(row);
   });
 } else if (place === "trainstations") {
   train.forEach(function(locations) {
     var row = document.createElement("tr");
     locations.forEach(function(location){
       var cell = document.createElement("td");
       cell.textContent = location;
       row.appendChild(cell);
     });
     table.appendChild(row);
   });
 } else {
   all.forEach(function(locations) {
     var row = document.createElement("tr");
     locations.forEach(function(location){
       var cell = document.createElement("td");
       cell.textContent = location;
       row.appendChild(cell);
     });
     table.appendChild(row);
   });
 }
 }

//Puts location created into table on rightside
//Name and the description of the location


//Function for user defined location to show on map
function setLocation() {
  var name = document.getElementById("locName");
  var lat = document.getElementById("locLati");
  var lng = document.getElementById("locLong");
  var lbl = document.getElementById("locLabel");
  var err = document.getElementById("locationErr");
  if(lat.value == ""||lng.value == "") {
    err.innerHTML = "Enter a Latitude or Longitude";
    return;
  }

  var position = new google.maps.LatLng(parseFloat(lat),
                                        parseFloat(lng));

  var marker = new google.maps.Marker({
      position: position,
      label: lbl.value,
      map: map
  });
  map.setCenter(position);
  google.maps.event.addListener(marker, 'click', (function(marker, i){
    return function() {
      infowindow.setContent(name.value);
      infowindow.open(map, marker);
    }
  })(marker, i));
}

var setLoc = document.getElementById("completeLocation");
setLoc.addEventListener("click", setLocation);
}

//Show what is in the map from database in table
//location is this.value
function showLocations(location) {
  ajaxGet("lib/showLocations.php?q="+location, function(data){
    document.getElementById("locations").innerHTML = data;
});
}

var showLoc = document.getElementById("locationCategory");
showLoc.addEventListener("onchange", showLocations(this.value));





//AJAX GET
function ajaxGet(URL, callback) {


  var ajaxObj = new XMLHttpRequest();
  ajaxObj.open("GET", URL, true); // The TRUE implies asynchronous
  ajaxObj.onreadystatechange = function() {
    if (ajaxObj.status === 200){
      if (ajaxObj.readyState === 4){
        callback(ajaxObj.responseText);
   }
   }
  };
  ajaxObj.send();
}
