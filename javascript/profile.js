// Profile Javascript
//Right bar

function groupNext() {
  var hideWhoAdd = document.getElementById("hideWhoAdd").style;
  var groupNext = document.groupCreate.groupNext;
  var groupBox = document.getElementById("groupAdding").style;
  var saveGroup = document.getElementById("saveGroup").style;
  if(hideWhoAdd.display === "block" && groupBox.display === "block") {
    hideWhoAdd.display = "none";
    groupBox.display = "none";
    saveGroup.display = "none";
    groupNext.value = "Next";
  }
    else {
      hideWhoAdd.display = "block";
      groupBox.display = "block";
      saveGroup.display = "block";
      groupNext.value = "Close";
    }

  var name = document.getElementById("inputGroupName").value;
  var output = document.getElementById("groupNameValue");

  output.innerHTML = name;

}
var groupNextBtn = document.getElementById("groupNext");
groupNextBtn.addEventListener("click", groupNext);

function showCreatedGroups() {
  var groups = document.getElementById("createdGroups").style;

  if(groups.display === "block") {
    groups.display = "none";
  }
    else {
      groups.display = "block";
    }
};

var b = document.getElementById("showCreatedGroups");
b.addEventListener("click", showCreatedGroups);

//PHP LOAD FOR GROUPS

function showGroupsLoad() {
  ajaxGet("lib/viewGroup.php", function(data){
    document.getElementById("createdGroupLoad").innerHTML = data;

  });
}

var showProfileGroups = document.getElementById("showCreatedGroups");
showProfileGroups.addEventListener("click", showGroupsLoad);

function showCreatedGroupName(){
  var name = document.getElementById("inputGroupName").value;
  var output = document.getElementById("groupNameValue");

  name = output;
  document.write(output);
}

var groupNameShow = document.getElementById("group");


function putNameInField(){
  var input = document.getElementById(("groundFriendInput")).value;
  var field = document.getElementById("groupAdding").value;

  if(input != ""){
    document.housemateInGroup.groupAdding.value = input;
  }
}

var addHousemateGroup = document.getElementById("addHousemate");
addHousemateGroup.addEventListener("click", putNameInField);
//Notes section

function showNotes(){
  ajaxGet("lib/createNote.php", function(data){
    document.getElementById("notesContent").innerHTML = data;
  });
}
window.addEventListener("load", showNotes);

//Show user bio to edit
function showBio() {
  ajaxGet("lib/userBiography.php", function(data){
    document.getElementById("userBio").innerHTML = data;
  });
}

window.addEventListener("load", showBio);
//Profile center

//Makes textarea readOnly and editable
//true and false

document.getElementById('editBio').onclick = function() {
   document.getElementById('inputBio').readOnly = false;
};

document.getElementById("doneBio").onclick = function() {
  document.getElementById("inputBio").readOnly = true;
};


//Profile side bar table
//Profile Picture

function showPictureUpload() {
  var upload = document.getElementById("uploadProfileImage").style;
  var btn = document.getElementById("changeProfilePicture");

  if(upload.display === "block"){
    upload.display = "none";
    btn.value = "Choose Profile Picture";
    btn.style.margin = "0 25%";
  } else {
    upload.display = "block";
    btn.value = "Back";
    btn.style.margin = "0 45%";
  }
}
var showPicUpload = document.getElementById("changeProfilePicture");
showPicUpload.addEventListener("click", showPictureUpload);

//Show Picture after upload

function loadImageFileAsURL() {
  var filesSelected = document.getElementById("inputFileToLoad").files;
    if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    if (fileToLoad.type.match("image.*")) {
      var fileReader = new FileReader();
      fileReader.onload = function(fileLoadedEvent) {
      var imageLoaded = document.createElement("img");
      imageLoaded.width = 150;
      imageLoaded.height = 150;
      imageLoaded.src = fileLoadedEvent.target.result;
      document.getElementById("loadProfileImage").appendChild(imageLoaded);
    };
    fileReader.readAsDataURL(fileToLoad);
    }
  }
}

var pictureUpload = document.getElementById("inputFileToLoad");
pictureUpload.addEventListener("change", loadImageFileAsURL);





//Change table content
//Edit Name
function editName() {
  var x = document.getElementById("myTable").rows[0].cells;
  var y = document.getElementById("nameChange").value;
    x[1].innerHTML = y;
};


var d = document.getElementById("editName");
d.addEventListener("click", editName);

//Change Password
function editPassword() {
  var x = document.getElementById("myTable").rows[2].cells;
  var y = document.getElementById("passwordChange").value;

  x[1].innerHTML = y;
};

var f = document.getElementById("editPassword");
f.addEventListener("click", editPassword);


//Change Email
function editEmail() {
  var x = document.getElementById("myTable").rows[3].cells;
  var y = document.getElementById("passwordChange").value;

  x[1].innerHTML = y;
};

var g = document.getElementById("editEmail");
g.addEventListener("click", editEmail);


//Change Mobile

function changeMobile() {
  var x = document.getElementById("myTable").rows[4].cells;
  var y = document.getElementById("mobileChange").value;

  x[1].innerHTML = y;
};

var h = document.getElementById("editMobile");
h.addEventListener("click", changeMobile);

//Edit Home Number

function changeHome() {
  var x = document.getElementById("myTable").rows[5].cells;
  var y = document.getElementById("homeChange").value;

  x[1].innerHTML = y;
};

var i = document.getElementById("editHome");
i.addEventListener("click", changeHome);

//Change Address

function editAddress() {
  var x = document.getElementById("myTable").rows[6].cells;
  var y = document.getElementById("addressChange").value;

  x[1].innerHTML = y;
};

var j = document.getElementById("editAddress");
j.addEventListener("click", editAddress);

//Change Course

function editCourse() {
  var x = document.getElementById("myTable").rows[8].cells;
  var y = document.getElementById("courseChange").value;

  x[1].innerHTML = y;
};

var k = document.getElementById("editCourse");
k.addEventListener("click", editCourse);

//Edit Year of Study

function editYearStudy() {
  var x = document.getElementById("myTable").rows[9].cells;
  var y = document.getElementById("yearStudyChange").value;

  x[1].innerHTML = y;
};

var l = document.getElementById("editStudyYear");
l.addEventListener("click", editYearStudy);


//Edit Accomodation
function editAccomodation() {
  var x = document.getElementById("myTable").rows[10].cells;
  var y = document.getElementById("housingChange").value;

  x[1].innerHTML = y;
};

var m = document.getElementById("editHousing");
m.addEventListener("click", editAccomodation);


//Edit Hobbies
function editHobbies() {
  var x = document.getElementById("myTable").rows[12].cells;
  var y = document.getElementById("hobbieChange").value;

  x[1].innerHTML = y;
};

var n = document.getElementById("editHobbie");
n.addEventListener("click", editHobbies);

//Edit Interest
function editInterests() {
  var x = document.getElementById("myTable").rows[13].cells;
  var y = document.getElementById("interestChange").value;

  x[1].innerHTML = y;
};

var o = document.getElementById("editInterest");
o.addEventListener("click", editInterests);

//Edit Society
function editSocieties() {
  var x = document.getElementById("myTable").rows[14].cells;
  var y = document.getElementById("societyChange").value;

  x[1].innerHTML = y;
};

var p = document.getElementById("editSociety");
p.addEventListener("click", editSocieties);

 function showSingleName () {
     //Basic Information
     var name = document.getElementById("singleNameEdit").style;
     //var table = document.getElementById("myTable").style;
        if(name.display === "none") {
          name.display = "block";
          //table.display = "none";
        } else {
          name.display = "none";
          //table.display = "block";
        }
   };

   var nameChange = document.getElementById("nameBtn");
   nameChange.addEventListener("click", showSingleName);



   function showSinglePasseword() {
     var password = document.getElementById("singlePasswordEdit").style;
     //var table = document.getElementById("myTable").style;
        if(password.display === "none") {
          password.display = "block";
          //table.display = "none";
        } else {
          password.display = "none";
          //table.display = "block";
        }
   };

   var changePassword = document.getElementById("passwordBtn");
   changePassword.addEventListener("click", showSinglePasseword);

   function showSingleEmail() {
     var email = document.getElementById("singleEmailEdit").style;
     //var table = document.getElementById("myTable").style;
        if(email.display === "none") {
          email.display = "block";
          //table.display = "none";
        } else {
          email.display = "none";
          //table.display = "block";
        }
   };

   var changeEmail = document.getElementById("emailBtn");
   changeEmail.addEventListener("click", showSingleEmail);

   function showSingleMobile() {
     var mobile = document.getElementById("singleMobileEdit").style;
     //var table = document.getElementById("myTable").style;
        if(mobile.display === "none") {
          mobile.display = "block";
          //table.display = "none";
        } else {
          mobile.display = "none";
          //table.display = "block";
        }
   };

   var changeMobile = document.getElementById("mobileBtn");
   changeMobile.addEventListener("click", showSingleMobile);

   function showSingleHome() {
     var home = document.getElementById("singleHomeEdit").style;
     //var table = document.getElementById("myTable").style;
        if(home.display === "none") {
          home.display = "block";
          //table.display = "none";
        } else {
          home.display = "none";
          //table.display = "block";
        }
   };

   var changeHome = document.getElementById("homeBtn");
   changeHome.addEventListener("click", showSingleHome);

   function showSingleAddress() {
     var address = document.getElementById("singleAddressEdit").style;
     //var table = document.getElementById("myTable").style;
        if(address.display === "none") {
          address.display = "block";
          //table.display = "none";
        } else {
          address.display = "none";
          //table.display = "block";
        }
   };

   var changeAddress = document.getElementById("addressBtn");
   changeAddress.addEventListener("click", showSingleAddress);

   function showSingleCourse() {
     var course = document.getElementById("singleCourseEdit").style;

     //var table = document.getElementById("myTable").style;
        if(course.display === "none") {
          course.display = "block";
          //table.display = "none";
        } else {
          course.display = "none";
          //table.display = "block";
        }
   };

   var changeCourse = document.getElementById("courseBtn");
   changeCourse.addEventListener("click", showSingleCourse);

   function showSingleYear() {
     var year = document.getElementById("singleYearEdit").style;

     //var table = document.getElementById("myTable").style;
        if(year.display === "none") {
          year.display = "block";
          //table.display = "none";
        } else {
          year.display = "none";
          //table.display = "block";
        }
   };

   var changeYear = document.getElementById("yearBtn");
   changeYear.addEventListener("click", showSingleYear);

   function showSingleHousing() {
     var housing = document.getElementById("singleHousingEdit").style;

     //var table = document.getElementById("myTable").style;
        if(housing.display === "none") {
          housing.display = "block";
          //table.display = "none";
        } else {
          housing.display = "none";
          //table.display = "block";
        }
   };

   var changeHousing = document.getElementById("housingBtn");
   changeHousing.addEventListener("click", showSingleHousing);

   function showSingleHobbie() {
     var hobbie = document.getElementById("singleHobbieEdit").style;

     //var table = document.getElementById("myTable").style;
        if(hobbie.display === "none") {
          hobbie.display = "block";
          //table.display = "none";
        } else {
          hobbie.display = "none";
          //table.display = "block";
        }
   };

   var changeHobbie = document.getElementById("hobbieBtn");
   changeHobbie.addEventListener("click", showSingleHobbie);

   function showSingleSociety() {
     var society = document.getElementById("singleSocietyEdit").style;

     //var table = document.getElementById("myTable").style;
        if(society.display === "none") {
          society.display = "block";
          //table.display = "none";
        } else {
          society.display = "none";
          //table.display = "block";
        }
   };

   var changeSociety = document.getElementById("societyBtn");
   changeSociety.addEventListener("click", showSingleSociety);

//This changes pages to support page so that the user can change their details

function changeAccountDetials() {
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

var goToSupport = document.getElementById("goToSupport");
goToSupport.addEventListener("click", changeAccountDetials);



   //AJAX Get
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
