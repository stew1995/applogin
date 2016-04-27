//This code allows the user to change the layout of the website,
//code that will be included in this will be changing the layout,
//and the code to change the size if need be.

function changeLayout(){
  //Radio button variables
  //House
  var housesection1 = document.getElementById("houseSection1").checked;
  var housesection2 = document.getElementById("houseSection2").checked;
  var housesection3 = document.getElementById("houseSection3").checked;
  //Halls
  var hallsection1 = document.getElementById("hallsSection1").checked;
  var hallsection2 = document.getElementById("hallsSection2").checked;
  var hallsection3 = document.getElementById("hallsSection3").checked;
  //Profile
  var profilesection1 = document.getElementById("profileSection1").checked;
  var profilesection2 = document.getElementById("profileSection2").checked;
  var profilesection3 = document.getElementById("profileSection3").checked;
  //Social
  var socialsection1 = document.getElementById("socialSection1").checked;
  var socialsection2 = document.getElementById("socialSection2").checked;
  var socialsection3 = document.getElementById("socialSection3").checked;
  //Maps
  var mapsection1 = document.getElementById("mapSection1").checked;
  var mapsection2 = document.getElementById("mapSection2").checked;
  var mapsection3 = document.getElementById("mapSection3").checked;
  //Support
  var supportsection1 = document.getElementById("supportSection1").checked;
  var supportsection2 = document.getElementById("supportSection2").checked;
  var supportsection3 = document.getElementById("supportSection3").checked;
  //Choice of where the section should move to
  var side  = document.getElementById("layoutSide").checked;
  var center = document.getElementById("layoutCenter").checked;
  var right = document.getElementById("layoutRight").checked;

  //Source
  var sidesource = document.getElementById("sideText");
  var centersource = document.getElementById("textCenter");
  var rightsource = document.getElementById("rightText");



  var el = 'pages/', source;
  if (housesection1 === true){
    el += 'housesidebar.html';
    source = sidesource;
  }else if (housesection2 === true){
    el += 'housecenter.html';
    source = centersource;
  } else if (housesection3 === true){
    el += 'houserightbar.html';
    source = rightsource;
  } else if (hallsection1 === true){
    el += 'hallssidebar.html';
    source = sidesource;
  } else if (hallsection2 === true){
    el += 'hallscenter.html';
    source = centersource;
  } else if (hallsection3 === true){
    el += 'hallsrightbar.html';
    source = rightsource;
  } else if (profilesection1 === true){
    el += 'profilesidebar.html';
    source = sidesource;
  } else if (profilesection2 === true){
    el += 'profilecenter.html';
    source = centersource;
  } else if (profilesection3 === true){
    el += 'profilerightbar.html';
    source = rightsource;
  } else if (socialsection1 === true){
    el += 'socialsidebar.html';
    source = sidesource;
  } else if (socialsection2 === true){
    el += 'socialcenter.html';
    source = centersource;
  } else if (socialsection3 === true){
    el += 'socialrightbar.html';
    source = rightsource;
  } else if (supportsection1 === true){
    el += 'supportsidebar.html';
    source = sidesource;
  } else if (supportsection2 === true){
    el += 'supportcenter.html';
    source = centersource;
  } else if (supportsection3 === true){
    el += 'supportrightbar.html';
    source = rightsource;
  } else if (mapssection1 === true) {
    el += 'mapsidebar.html';
    source = sidesource;
  } else if (mapsection2 === true) {
    el += 'mapcenter.html';
    source = centersource;
  } else if (mapsection3 === true) {
    el += 'maprightbar.html';
    source = rightsource;
  }


  var loc;
  if (side === true){
      loc = 'sideText';
  } else if (center === true){
    loc = 'textCenter';
  } else if (right === true){
    loc = 'rightText';
  }

  if (el && el !== 'pages/' && loc && source){
    ajaxGet(el, function(data){
      var existing = document.getElementById(loc).innerHTML;
      document.getElementById(source).innerHTML = existing;
      document.getElementById(loc).innerHTML = data;
    });
  }
}

var layoutChange = document.getElementById("layoutComplete");
layoutChange.addEventListener("click", changeLayout);
