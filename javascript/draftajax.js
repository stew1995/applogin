// House main section Ajax

function houseContent() {
  centerContent();
  sideBar();
  rightBar();
}
var showHouse = document.getElementById("showHouse");
showHouse.addEventListener("click", houseContent);

function centerContent() {
  ajaxGet("pages/housecenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
  });
}

function sideBar() {
  ajaxGet("pages/housesidebar.html", function(data){
    document.getElementById("sideText").innerHTML = data;
  });
}

function rightBar() {
  ajaxGet("pages/houserightbar.html", function(data){
    document.getElementById("rightText").innerHTML = data;
  });
}

// Halls main section Ajax
function hallsContent() {
  hallsCenter();
  hallsRightbar();
  hallsSidebar();
}
var showHalls = document.getElementById("showHalls");
showHalls.addEventListener("click", hallsContent);

function hallsCenter() {
  ajaxGet("pages/hallscenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
  });
}

function hallsSidebar() {
  ajaxGet("pages/hallssidebar.html", function(data){
    document.getElementById("sideText").innerHTML = data;
  });
}

function hallsRightbar() {
  ajaxGet("pages/hallsrightbar.html", function(data){
    document.getElementById("rightText").innerHTML = data;
  });
}

//Profile main section
function profileContent() {
  profileCenter();
  profileSidebar();
  profileRightbar();
}
var showProfile = document.getElementById("showProfile");
showProfile.addEventListener("click", profileContent);

function profileCenter() {
  ajaxGet("pages/profilecenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
  });
}

function profileSidebar() {
  ajaxGet("pages/profilesidebar.html", function(data){
    document.getElementById("sideText").innerHTML = data;
  });
}

function profileRightbar() {
  ajaxGet("pages/profilerightbar.html", function(data){
    document.getElementById("rightText").innerHTML = data;
  });
}
// Messages section AJAX

function messageContent() {
  messageCentercontent();
  messageSidebar();
  messageRightbar();
}
var showMessage = document.getElementById("showMessage");
showMessage.addEventListener("click", messageContent);

function messageCentercontent() {
  ajaxGet("pages/messagecenter.html",function(data){
    document.getElementById("textCenter").innerHTML = data;
  });
}

function messageSidebar() {
  ajaxGet("pages/messagesidebar.html", function(date){
    document.getElementById("sideText").innerHTML = data;
  });
}

function messageRightbar() {
  ajaxGet("pages/messagerightbar.html", function(date){
    document.getElementById("rightText").innerHTML = data;
  });
}

/* Live Feed AJAX */

function liveContent() {
  liveCenter();
  liveSidebar();
  liveRightbar();
}
var showLive = document.getElementById("showLive");
showLive.addEventListener("click", liveContent);

function liveCenter() {
  ajaxGet("pages/livecenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
  });
}

function liveSidebar() {
  ajaxGet("pages/livesidebar.html", function(data){
    document.getElementById("sideText").innerHTML = data;
  });
}

function liveRightbar() {
  ajaxGet("pages/liverightbar.txt", function(data){
    document.getElementById("rightText").innerHTML = data;
  });
}


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
      });
    });
  });
}

//Register Section AJAX

function registerContent() {
  registerCenter();
  registerSidebar();
  registerRightbar();
}
var showRegister = document.getElementById("showRegister");
showRegister.addEventListener("click", registerContent);

function registerCenter() {
  ajaxGet("pages/registercenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
  });
}

function registerSidebar() {
  ajaxGet("pages/registersidebar.html", function(data){
    document.getElementById("sideText").innerHTML = data;
  });
}

function registerRightbar() {
  ajaxGet("pages/registerrightbar.html", function(data){
    document.getElementById("rightText").innerHTML = data;
  });
}

// Login section AJAX

function loginContent() {
  loginCenter();
  loginSidebar();
  loginRightbar();
}
window.addEventListener("load", loginContent);


function loginCenter() {
  ajaxGet("pages/logincenter.html", function(data){
    document.getElementById("textCenter").innerHTML = data;
  });
}

function loginSidebar() {
  ajaxGet("pages/loginsidebar.html", function(data){
    document.getElementById("sideText").innerHTML = data;
  });
}

function loginRightbar() {
  ajaxGet("pages/loginrightbar.html", function(data){
    document.getElementById("rightText").innerHTML = data;
  });
}

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
