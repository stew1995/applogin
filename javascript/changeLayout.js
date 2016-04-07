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
  var socialsectiom3 = document.getElementById("socialSection3").checked;
  //Support
  var supportsection1 = document.getElementById("supportSection1").checked;
  var supportsection2 = document.getElementById("supportSection2").checked;
  var supportsection3 = document.getElementById("supportSection3").checked;
  //Choice of where the section should move to
  var side  = document.getElementById("layoutSide").checked;
  var center = document.getElementById("layoutCenter").checked;
  var right = document.getElementById("layoutRight").checked;

  //House Section 1 - default side bar
  //Section 1 Side
  //Section 1 Center
  //Section 1 Right

  if(housesection1 === true ||side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(chr.readyState == 4 && xhr.status == 200) {
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "housesidebar.txt", true);
    xhr.send();
  }

  if(housesection1 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "housesidebar.txt", true);
    xhr.send();
  }

  if(housesection1 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "housesidebar.txt", true);
    xhr.send();
  }

  //House section 2 - default center
  //Section 2 side
  //Section 2 center
  //Section 3 right

  if(housesection2 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "housecenter.txt", true);
    xhr.send();
  }

  if(housesection2 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "housecenter.txt", true);
    xhr.send();
  }

  if(housesection2 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "housecenter.txt", true);
    xhr.send();
  }

  //House section 3 - default rightbar
  //Section 3 side
  //Section3 center
  //Section3 right

  if(housesection3 === true || side === true){
      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById("sideText").innerHTML = xhr.responseText;
        }
      };
      xhr.open("GET", "houserightbar.txt", true);
      xhr.send();
  }

  if(housesection3 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "houserightbar.txt", true);
    xhr.send();
  }

  if(housesection3 === true || righ === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "houserightbar.txt", true);
    xhr.send();
  }

  //Halls Section 1 - default side
  //Section 1 side
  //Section 1 center
  //Section 1 right

  if(hallsection1 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "hallssidebar.txt", true);
    xhr.send();
  }

  if(hallsection1 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    };
    xhr.open("GET", "hallssidebar.txt", true);
    xhr.send();
  }

  if(hallsection1 === true|| right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "hallssidebar.txt", true);
    xhr.send();
  }

  //Halls Section 2 - default center
  //Section 2 side
  //Section 2 center
  //Section 2 right

  if(hallsection2 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "hallscenter.txt", true);
    xhr.send();
  }

  if(hallsection2 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "housecenter.txt", true);
    xhr.send();
  }

  if(hallsection2 === true|| right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "housecenter.txt", true);
    xhr.send();
  }

  //Halls Section 3 - default right
  //Section 3 side
  //Section 3 center
  //Section 3 right

  if(hallsection3 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "hallsrightbar.txt", true);
    xhr.send();
  }

  if(hallsection3 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "hallsrightbar.txt", true);
    xhr.send();
  }

  if(hallsection3 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "hallsrightbar.txt", true);
    xhr.send();

  //Profile Section 1 - default side
  //Section 1 side
  //Section 1 center
  //Section 1 right

  if(profilesection1 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilesidebar.txt", true);
    xhr.send();
  }

  if(profilesection1 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilesidebar.txt", true);
    xhr.send();
  }

  if(profilesection1 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilesidebar.txt", true);
    xhr.send();
  }

  //Profile Section 2 - default center
  //Section 2 side
  //Section 2 center
  //Section 2 right

  if(profilesection2 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilecenter.txt", true);
    xhr.send();
  }

  if(profilesection2 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("centerText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilecenter.txt", true);
    xhr.send();
  }

  if(profilesection2 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilecennter.txt", true);
    xhr.send();
  }

  //Profile Section 3 - default right
  //Section 3 side
  //Section 3 center
  //Section 3 right

  if(profilesection3 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilerightbar.txt", true);
    xhr.send();
  }

  if(profilesection3 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilerightbar.txt", true);
    xhr.send();
  }

  if(profilesection3 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "profilerightbar.txt", true);
    xhr.send();
  }

  //Social Section 1 - default side
  //Section 1 side
  //Section 1 center
  //Section 1 right

  if(socialsection1 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialsidebar.txt", true);
    xhr.send();
  }

  if(socialsection1 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialsidebar.txt", true);
    xhr.send();
  }

  if(socialsection1 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialsidebar.txt", true);
    xhr.send();
  }

  //Social Section 2 - default center
  //Section 2 side
  //Section 2 center
  //Section 2 right

  if(socialsection2 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialcenter.txt", true);
    xhr.send();
  }

  if(socialsection2 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialcenter.txt", true);
    xhr.send();
  }

  if(socialsection2 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialcenter.txt", true);
    xhr.send();
  }

  //Social Section 3 - default right
  //Section 3 side
  //Section 3 center
  //Section 3 right

  if(socialsection3 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialrightbar.txt", true);
    xhr.send();
  }

  if(socialsection3 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialrightbar.txt", true);
    xhr.send();
  }

  if(socialsection3 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "socialrightbar.txt", true);
    xhr.send();
  }

  //Support Section 1 - default side
  //Section 1 side
  //Section 1 center
  //Section 1 right

  if(supportsection1 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportsidebar.php", true);
    xhr.send();
  }

  if(supportsection1 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportsidebar.php", true);
    xhr.send();
  }

  if(supportsection1 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportsidebar.php", true);
    xhr.send();
  }

  //Support Section 2 - default center
  //Section 2 side
  //Section 2 center
  //Section 2 right

  if(supportsection2 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportcenter.php", true);
    xhr.send();
  }

  if(supportsection2 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportcenter.php", true);
    xhr.send();
  }

  if(supportsection2 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportcenter.php", true);
    xhr.send();
  }

  //Support Section 3 - default right
  //Section 3 side
  //Section 3 center
  //Section 3 right

  if(supportsection3 === true || side === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("sideText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportrightbar.php", true);
    xhr.send();
  }

  if(supportsection3 === true || center === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("textCenter").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportrightbar.php", true);
    xhr.send();
  }

  if(supportsection3 === true || right === true){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById("rightText").innerHTML = xhr.responseText;
      }
    }
    xhr.open("GET", "supportrightbar.php", true);
    xhr.send();
  }
}

var layoutChange = document.getElementById("layoutComplete");
layoutChange.addEventListener("click", changeLayout);
