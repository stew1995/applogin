//Search Bar Javascript to load content from database
function getXMLHTTPRequestObject() {
  if(window.XMLHttpRequest) {
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    alert("You cannot run the search bar")
  }
}
  //XMLHTTP Object
  var searchReq = getXMLHTTPRequestObject();
  //called from on key up
  //Start AJAX
  function search() {
    //Advance search variables
    var malecheck = document.getElementById("malesearch").checked;
    var femalecheck = document.getElementById("femalesearch").checked;
    var nonsmokercheck = document.getElementById("nonsmokersearch").checked;
    var smokercheck = document.getElementById("smokersearch").checked;
    var hallscheck = document.getElementById("hallssearch").checked;

      if(searchReq.readyState == 4 || searchReq.readyState == 0) {
        if(malecheck == false && femalecheck == false && nonsmokercheck == false
           && smokercheck == false && hallscheck == false && groupcheck == false) {
          var str = escape(document.getElementById('query').value);
          searchReq.open("GET", 'lib/search/searchexec.php?search=' + str, true);
          searchReq.send(null);
          searchReq.onreadystatechange = handleSearchResults;
        } else if (malecheck == true && femalecheck == false && nonsmokercheck == false
           && smokercheck == false && hallscheck == false) {
             var str = escape(document.getElementById('query').value);
             searchReq.open("GET", 'lib/search/searchusermale.php?search=' + str, true);
             searchReq.send(null);
             searchReq.onreadystatechange = handleSearchResults;
          } else if (malecheck == false && femalecheck == true && nonsmokercheck == false
             && smokercheck == false && hallscheck == false) {
               var str = escape(document.getElementById('query').value);
               searchReq.open("GET", 'lib/search/searchuserfemale.php?search=' + str, true);
               searchReq.send(null);
               searchReq.onreadystatechange = handleSearchResults;
             } else if (malecheck == false && femalecheck == false && nonsmokercheck == true
                && smokercheck == false && hallscheck == false) {
                  var str = escape(document.getElementById('query').value);
                  searchReq.open("GET", 'lib/search/searchnonsmoker.php?search=' + str, true);
                  searchReq.send(null);
                  searchReq.onreadystatechange = handleSearchResults;
                } else if (malecheck == false && femalecheck == false && nonsmokercheck == false
                   && smokercheck == true && hallscheck == false) {
                     var str = escape(document.getElementById('query').value);
                     searchReq.open("GET", 'lib/search/searchsmoker.php?search=' + str, true);
                     searchReq.send(null);
                     searchReq.onreadystatechange = handleSearchResults;
                   } else if (malecheck == false && femalecheck == false && nonsmokercheck == false
                      && smokercheck == false && hallscheck == true) {
                        var str = escape(document.getElementById('query').value);
                        searchReq.open("GET", 'lib/search/searchhall.php?search=' + str, true);
                        searchReq.send(null);
                        searchReq.onreadystatechange = handleSearchResults;
                      }
        }

  function handleSearchResults() {
    if(searchReq.readyState == 4) {
      var ss = document.getElementById('searchResult');
      var str1 = document.getElementById('query');
      var curLeft = 0;
      ss.style.visibility = "visible";
      if(str1.offsetParent) {
        while(str1.offsetParent) {
          curLeft += str1.offserLeft;
          str1 = str1.offsetParent;
        }
      }
      var str = searchReq.responseText.split("\n");
      if(str.length==1) {
        ss.innerHTML = '';
        ss.style.visibility = "hidden";
      } else {
        ss.InnerHTML - '';
        for(i=0; i < str.length - 1; i++) {
              var suggest = '<div style="cursor : pointer;" onmouseover="javascript:suggestOver(this);" ';
                suggest += 'onmouseout="javascript:suggestOut(this);" ';
                suggest += 'onclick="javascript:setSearch(this.innerHTML);" ';
                suggest += 'class="small">' + str[i] + '</div>';
          ss.innerHTML += suggest;
        }
      }
    }
  }
