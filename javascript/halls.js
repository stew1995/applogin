//House Javascript
//Determine what the button says

function flat11(){
  surroundFlatsValue();
}

var change = document.getElementById("userHallsFlat");
change.addEventListener("change", flat11);



function surroundFlatsValue(value) {
  //Field with users flat name in it
  var value = document.getElementById("userHallsFlat").value;
  //Radio Names in span
  var radioName1 = document.getElementById("surrFlatNum1");
  var radioName2 = document.getElementById("surrFlatNum2");
  var radioName3 = document.getElementById("surrFlatNum3");
  var radioName4 = document.getElementById("surrFlatNum4");
  var radioName5 = document.getElementById("surrFlatNum5");
  //Radio button value
  var radioValue1 = document.getElementById("surrFlatNum1");
  var radioValue2 = document.getElementById("surrFlatNum1").value;
  var radioValue3 = document.getElementById("surrFlatNum3").value;
  var radioValue4 = document.getElementById("surrFlatNum1").value;
  var radioValue5 = document.getElementById("surrFlatNum1").value;


  if(value = 1.1){
    radioName1.innerHTML = "1.2";
    radioName2.innerHTML = "1.3";
    radioName3.innerHTML = "1.4";
    radioName4.innerHTML = "1.5";
    radioName5.innerHTML = "1.6";
    }  if(value = 1.2) {
      radioName1.innerHTML = "1.1";
      radioName2.innerHTML = "1.3";
      radioName3.innerHTML = "1.4";
      radioName4.innerHTML = "1.5";
      radioName5.innerHTML = "1.6";
      } if (value = 1.3) {
        radioName1.innerHTML = "1.1";
        radioName2.innerHTML = "1.2";
        radioName3.innerHTML = "1.4";
        radioName4.innerHTML = "1.5";
        radioName5.innerHTML = "1.6";
        } if (value = 1.4) {
          radioName1.innerHTML = "1.1";
          radioName2.innerHTML = "1.2";
          radioName3.innerHTML = "1.3";
          radioName4.innerHTML = "1.5";
          radioName5.innerHTML = "1.6";
        }else if(value = 1.5) {
            radioName1.innerHTML = "1.2";
            radioName2.innerHTML = "1.3";
            radioName3.innerHTML = "1.4";
            radioName4.innerHTML = "1.6";
            radioName5.innerHTML = "2.1";
          }else if(value = 1.6) {
            radioName1.innerHTML = "1.3";
            radioName2.innerHTML = "1.4";
            radioName3.innerHTML = "1.5";
            radioName4.innerHTML = "2.1";
            radioName5.innerHTML = "2.2";
          }else if(value = 2.1) {
              radioName1.innerHTML = "1.4";
              radioName2.innerHTML = "1.5";
              radioName3.innerHTML = "1.6";
              radioName4.innerHTML = "2.2";
              radioName5.innerHTML = "2.3";
              }

}


//Center
//Show halls from select menu

function showHalls(hall){
  if(hall == "") {
    document.getElementById("hallsoutput").innerHTML = "Select a Halls";
    return;
  } else {
      if(window.XMLHttpRequest){
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xhr = new XMLHttpRequest();
      } else {
        // code for IE6, IE5
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200) {
          document.getElementById("hallsoutput").innerHTML = xhr.responseText;
        }
      };
      xhr.open("GET", "getHalls.php?q="+hall, true);
      xhr.send();
  }
}
