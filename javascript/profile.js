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
//Profile center



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
        var css = document.createElement('link');
        css.rel= 'stylesheet';
        css.type = 'text/css';
        css.href = 'CSS/support.css';
        document.head.appendChild(css);
      });
    });
  });
}

var goToSupport = document.getElementById("goToSupport");
goToSupport.addEventListener("click", changeAccountDetials);

//Notes section

function showNotes(){
  ajaxGet("lib/createNote.php", function(data){
    document.getElementById("notesContent").innerHTML = data;
  });
}
window.addEventListener("load", showNotes);

//Show user bio to edit
window.onload = function() {
  ajaxGet("lib/userBiography.php", function(data){
    document.getElementById("userBio").innerHTML = data;
  });
}


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
