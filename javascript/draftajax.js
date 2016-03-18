// House main section Ajax

function houseContent() {
  centerContent();
  sideBar();
  rightBar();
}
var showHouse = document.getElementById("showHouse");
showHouse.addEventListener("click", houseContent);

function centerContent() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("textCenter").innerHTML = xhr.responseText;
    }
  };
xhr.open("GET","pages/housecenter.txt", true);
xhr.send();
}

function sideBar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("sideText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/housesidebar.txt", true);
  xhr.send();
}

function rightBar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("rightText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/houserightbar.txt", true);
  xhr.send();
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
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("textCenter").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/hallscenter.txt", true);
  xhr.send();
}

function hallsSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("sideText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/hallssidebar.txt", true);
  xhr.send();
}

function hallsRightbar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("rightText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/hallsrightbar.txt", true);
  xhr.send();
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
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("textCenter").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/profilecenter.txt", true);
  xhr.send();
}

function profileSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("sideText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/profilesidebar.txt", true);
  xhr.send();
}

function profileRightbar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("rightText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/profilerightbar.txt", true);
  xhr.send();
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
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("textCenter").innerHTML = xhr.responseText;
    }
  };
xhr.open("GET","pages/messagecenter.txt", true);
xhr.send();
}

function messageSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("sideText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/messagesidebar.txt", true);
  xhr.send();
}

function messageRightbar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("rightText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/messagerightbar.txt", true);
  xhr.send();
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
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("textCenter").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/livecenter.txt", true);
  xhr.send();
}

function liveSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("sideText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/livesidebar.txt", true);
  xhr.send();
}

function liveRightbar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("rightText").innerHTML = xhr.responseText;
    } else {
      "<p>An error has occured</p>";
    }
  };
  xhr.open("GET", "pages/liverightbar.txt", true);
  xhr.send();
}


// Support main section Ajax

function supportContent() {
  supportCenter();
  supportSidebar();
  supportRightbar();
}
var showSupport = document.getElementById("showSupport");
showSupport.addEventListener("click", supportContent);

function supportCenter() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("textCenter").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/supportcenter.txt", true);
  xhr.send();
}

function supportSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("sideText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/supportsidebar.txt", true);
  xhr.send();
}

function supportRightbar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("rightText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/supportrightbar.txt", true);
  xhr.send();
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
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("textCenter").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/registercenter.txt", true);
  xhr.send();
}

function registerSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("sideText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/registersidebar.php", true);
  xhr.send();
}

function registerRightbar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("rightText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/registerrightbar.txt", true);
  xhr.send();
}

// Login section AJAX

function loginContent() {
  loginCenter();
  loginSidebar();
  loginRightbar();
}
window.addEventListener("load", loginContent);


function loginCenter() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      var login = document.getElementById("textCenter").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/logincenter.txt", true);
  xhr.send();
}

function loginSidebar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("sideText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/loginsidebar.txt", true);
  xhr.send();
}

function loginRightbar() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("rightText").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "pages/loginrightbar.txt", true);
  xhr.send();
}

//Initial Load Register Button AJAX - doesnt work look into
function initialLoadRegisterContent() {
  RegisterCenter();
  RegisterSidebar();
  RegisterRightbar();
}
  var showRegister = document.getElementById("sideRegister");
  showRegister.addEventListener("click", registerContent);
  
  
