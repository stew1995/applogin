//Side bar

function showViewGroupInputs() {
  var content = document.getElementById("inputOptions").style;
  var input = document.getElementById("searchGroupInput");

  var output = document.getElementById("oldGroupName");

  output.innerHTML = input.value;
  hideShow(content);

}

var manageGroupBtn = document.getElementById("manageGroupBtn");
manageGroupBtn.addEventListener("click", showViewGroupInputs);
var editGroupBtn = document.getElementById("editGroupBtn");
editGroupBtn.addEventListener("click", showViewGroupInputs);
var rvmGroupBtn = document.getElementById("rvmGroupBtn");
rvmGroupBtn.addEventListener("click", showViewGroupInputs);


function showViewGroupOptions() {
  var content = document.getElementById("viewGroupInputs").style;
  var text = document.getElementById("groupInformationText").style;
  showHide(text);
  hideShow(content);
}

var showViewGroup = document.getElementById("viewGroupBtn");
showViewGroup.addEventListener("click", showViewGroupOptions);


function showCreateGroupOptions(){
  var content = document.getElementById("createGroupInputs").style;
  var view = document.getElementById("viewGroupInputs").style;
  var text = document.getElementById("groupInformationText").style;
  if(view.display === "block") {
    view.display = "none";
  }
  showHide(text);
  hideShow(content);

}

var showCreateGroup = document.getElementById("createGroupBtn");
showCreateGroup.addEventListener("click", showCreateGroupOptions);

//View groups from database
function showGroups() {
  ajaxGet("lib/viewGroup.php", function(data){
    document.getElementById("houseGroupsOutput").innerHTML = data;
  });
}

var viewGroups = document.getElementById("viewGroupsBtn");
viewGroups.addEventListener("click", showGroups);
//Center
//Create an element of group from the user input


function createGroupElem(){
  var text = document.getElementById("createGroupName");
  var btn = document.createElement("button");
  btn.value = text;
  btn.width = "25%";
  btn.height = "40px";
  btn.colour = "red";
  document.getElementById("houseGroupOutput").appendChild(btn);
}

var create = document.getElementById('submitCreateGroup');
create.addEventListener("click", createGroup);



function showHide(text){
  if(text.display === "none"){
    text.display = "block";
  } else {
    text.display = "none";
  }
}

function hideShow(content) {
  if(content.display === "block") {
    content.display = "none";
  } else {
    content.display = "block"
  }
}

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
