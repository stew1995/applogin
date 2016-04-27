// House main section Ajax

function houseContent() {
  centerContent();
}
var showHouse = document.getElementById("showHouse");
showHouse.addEventListener("click", houseContent);

function centerContent() {
  ajaxGet("pages/housecenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
      ajaxGet("pages/housesidebar.html", function(data){
        document.getElementById("sideText").innerHTML = data;
          ajaxGet("pages/houserightbar.html", function(data){
            document.getElementById("rightText").innerHTML = data;
            var si = document.createElement('script');
            si.src = 'javascript/house.js';
            document.head.appendChild(si);
          });
      });
  });
}

// Halls main section Ajax
function hallsContent() {
  hallsCenter();
}
var showHalls = document.getElementById("showHalls");
showHalls.addEventListener("click", hallsContent);

function hallsCenter() {
  ajaxGet("pages/hallscenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
      ajaxGet("pages/hallssidebar.html", function(data){
        document.getElementById("sideText").innerHTML = data;
          ajaxGet("pages/hallsrightbar.html", function(data){
            document.getElementById("rightText").innerHTML = data;
            var si = document.createElement('script');
            si.src = 'javascript/halls.js';
            document.head.appendChild(si);
          });
      });
  });
}

//Profile main section
function profileContent() {
  profileCenter();
}
var showProfile = document.getElementById("showProfile");
showProfile.addEventListener("click", profileContent);

function profileCenter() {
  ajaxGet("pages/profilecenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
      ajaxGet("pages/profilesidebar.html", function(data){
        document.getElementById("sideText").innerHTML = data;
          ajaxGet("pages/profilerightbar.html", function(data){
            document.getElementById("rightText").innerHTML = data;
            var si = document.createElement('script');
            si.src = 'javascript/profile.js';
            document.head.appendChild(si);
          });
      });
  });
}
//Social Pad section Ajax

function showSocialSection() {
  ajaxGet("pages/socialcenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
      ajaxGet("pages/socialsidebar.html", function(data){
        document.getElementById("sideText").innerHTML = data;
          ajaxGet("pages/socialrightbar.html", function(data){
          document.getElementById("rightText").innerHTML = data;
          var si = document.createElement('script');
          si.src = 'javascript/social.js';
          document.head.appendChild(si);
        });
      });
    });
  }

  var showSocial = document.getElementById('socialPad');
  showSocial.addEventListener("click", showSocialSection);
// Support main section Ajax

function supportContent() {
  supportCenter();
}
var showSupport = document.getElementById("showSupport");
showSupport.addEventListener("click", supportContent);

function supportCenter() {
  ajaxGet("pages/supportcenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
    ajaxGet("pages/supportsidebar.html", function(data){
      document.getElementById("sideText").innerHTML = data;
      ajaxGet("pages/supportrightbar.html", function(data){
        document.getElementById("rightText").innerHTML = data;
        var si = document.createElement('script');
        si.src = 'javascript/support.js';
        document.head.appendChild(si);
        var layoutChange = document.createElement('script');
        layoutChange.src = 'javascript/changeLayout.js';
        document.head.appendChild(layoutChange);
      });
    });
  });
}

//Register Section AJAX

function registerContent() {
  registerCenter();
}
var showRegister = document.getElementById("showRegister");
showRegister.addEventListener("click", registerContent);

function registerCenter() {
  ajaxGet("pages/registercenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
      ajaxGet("pages/registersidebar.html", function(data){
        document.getElementById("sideText").innerHTML = data;
          ajaxGet("pages/registerrightbar.html", function(data){
          document.getElementById("rightText").innerHTML = data;
          var si = document.createElement('script');
          si.src = 'javascript/validation.js';
          document.head.appendChild(si);
        });
      });
    });
  }

// Login section AJAX

function loginContent() {
  loginCenter();
}
window.addEventListener("load", loginContent);


function loginCenter() {
  ajaxGet("pages/logincenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
      ajaxGet("pages/loginsidebar.html", function(data){
        document.getElementById("sideText").innerHTML = data;
          ajaxGet("pages/loginrightbar.html", function(data){
            document.getElementById("rightText").innerHTML = data;
            var si = document.createElement('script');
            si.src = 'javascript/login.js';
            document.head.appendChild(si);
          });
      });
  });
}


function getMap(){
  ajaxGet("pages/mapcenter.html", function(data) {
    document.getElementById('textCenter').innerHTML = data;
    ajaxGet("pages/mapsidebar.html", function(data) {
      document.getElementById('textCenter').innerHTML = data;
      ajaxGet("pages/maprightbar.html", function(data) {
        document.getElementById('textCenter').innerHTML = data;
        var si = document.createElement('script');
        si.src = 'javascript/maps.js';
        document.head.appendChild(si);
      });
    });
  });
}

var showMaps = document.getElementById("showMaps");
showMaps.addEventListener("click", getMap);
//Get Ajax


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
