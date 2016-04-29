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
    if(searchReq.readyState == 4 || searchReq.readyState == 0) {
      var str = escape(document.getElementById('query').value);
      searchReq.open("GET", 'searchexec.php?search=' + str, true);
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
      if(str.lenght==1) {
        ss.innerHTML = '';
        ss.style.visibility = "hidden";
      } else {
        ss.InnerHTML - '';
        for(i=0; i < str.length - 1; i++) {
          var suggest = '<div style="cursor: pointer;" onmouseover = "javascript:suggestOver(this);"';
          suggest += 'onmouseout = "javascript:suggestOut(this);"';
          suggest += 'onclick="javascript:setSearch(this.innerHTML);"';
          suggest += 'class="small">' + str[i] + '</div>';
          ss.innerHTML += suggest;
        }
      }
    }
  }
