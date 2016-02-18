/*Navigation Javascript*/

function show() {
  var login = document.getElementById("login").style;
  if (login.display === "block") {
    login.display = "none";
  }
  else {
    login.display = "block";
  }
};

function navLogin() {
  var navBox = document.getElementById("rightnav").style;
  var navLog = document.getElementById("navLog").style;
  var username = document.getElementById("user").style;
  if (username.display === "none") {
      username.display = "block";
      navBox.width = "35%";
      navLog.display = "none";

    }
      else {
        username.display = "none";
      }
};

function navPassword() {
  var password = document.getElementById("pass").style;
  var username = document.getElementById("user").style;
  if(username.display === "block") {
    password.display = "block";
    username.display = "none";
  }
    else {
      password.display = "block";
    }
};

function closeNavLogin() {
  var password = document.getElementById("pass").style;
  var navBox = document.getElementById("rightnav").style;
  var navLog = document.getElementById("navLog").style;
  if(password.display === "none") {
    password.display = "block";
  }
    else {
      password.display = "none";
      navBox.width = "25%";
      navLog.display = "block";
    }
};

function advancesrc() {
  var content = document.getElementById("searchContent").style;
      if (content.display=="block") {
          content.display = "none";
        }
          else {
            content.display="block";
          }
};

function closeadvancesrc(checkEm) {
  var content = document.getElementById("searchContent").style;
  var chk = document.getElementsByTagName('input');
  for (var i = 0; i < chk.length; i++) {
      if (chk[i].type == 'checkbox') {
          if (chk[i].name == 'advancesearch') {
              chk[i].checked = checkEm;
          }
      }
  }
  if (content.display == "none") {
    content.display = "block";
  }
    else {
      content.display = "none";
    }
};

function showSearch() {
  var search = document.getElementById("topSearch").style;
  if (search.display === "block") {
      search.display = "none";
    }
      else {
        search.display = "block";
      }
};

function uncheck(checkEm) {
    var chk = document.getElementsByTagName('input');
    for (var i = 0; i < chk.length; i++) {
        if (chk[i].type == 'checkbox') {
            if (chk[i].name == 'checklist') {
                chk[i].checked = checkEm;
            }
        }
    }
};

function socialPadShow() {
  var social = document.getElementById("navSocial").style;
  if (social.display = "none") {
      social.display = "block";
  }
  else {
    social.display = "none";
  }
};


window.onresize = function() {
  var i = document.getElementById("info").style;
  if (window.innerWidth < 700) {
    i.margin = "0 0 0 0";
  } else {
    i.margin = "5% 25% 0 25%";
  }
};

window.onresize = function() {
    var username = document.getElementById("loginUser").style;
    var password = document.getElementById("loginPass").style;
    var userBtn = document.getElementById("loginButton").style;
    var regBtn = document.getElementById("registerButton").style;
    if(window.innerWidth < 1175) {
      username.margin = "5% 2.5%";
      username.width = "95%";
      password.margin = "5% 2.5%";
      password.width = "95%";
      regBtn.float = "none";
      regBtn.margin = "2.5% 2.5% -10% 2.5%";
      regBtn.padding = "5% 39%";
      userBtn.margin = "2.5%";
      userBtn.padding = "5% 41.5%";
    }
    else {
      username.margin = "0 2.5%";
      username.width = "40%";
      password.margin = "0 2.5%";
      password.width = "40%";
      regBtn.float = "right";
      regBtn.margin = "5% 10% 2% 10%";
      regBtn.padding = "5% 7.5%";
      userBtn.margin = "5% 10% 2% 10%";
      userBtn.padding = "5% 7.5%";
    }
};
