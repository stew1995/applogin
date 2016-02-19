window.onresize = function() {
    // Initial load page side bar
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
        regBtn.padding = "5% 30%";
        userBtn.margin = "2.5%";
        userBtn.padding = "5% 33%";
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

    // Initial load page center
    var i = document.getElementById("info").style;

      if (window.innerWidth < 700) {
        i.margin = "0 0 0 0";
      } else {
          i.margin = "5% 25% 0 25%";
      }

    // Initial load page text
    var text = document.getElementById("loadUpText").style;
      if(window.innerWidth < 860) {
        text.margin = "0";
      } else {
        text.margin = "2.5%";
      }

    // Navigation sizing when below 930px width
    var nav = document.getElementById("rightnav").style;
      if(window.innerWidth < 930) {
        nav.float = "none";
        nav.width = "100%";
      } else {
        nav.float ="right";
        nav.width = "25%";
      }
};
