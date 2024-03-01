const h2 = document.createElement("h2");
h2.textContent = "Get to know me!";
document.querySelector("body").appendChild(h2);

//tabs 

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  } 

var indexValue = 1;
showImg(indexValue)

function side_slide(e) {
    showImg(indexValue +=e);
}

function showImg(e) {
    var i;
    const img = document.querySelectorAll('img');
    if(e > img.length) {
        indexValue = 1
    }
    if(e < 1) {
        indexValue = img.length
    }
    for(i = 0; i < img.length; i++) {
        img[i].style.display = "none"
    }
    img[indexValue - 1].style.display = "block"
}