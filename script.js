
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

  document.getElementById("defaultOpen").click();

//slideshow (try add something like n=1 to start)

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}



//2 truths and a lie

function changeColor(id) {
  	document.getElementById(id).style.color = "#ff0000"; // forecolor
  	document.getElementById(id).style.backgroundColor = "#ff0000"; // backcolor
}

function makeRed() {
	document.getElementById("lie").style.color = "red";
}

function makeGreen() {
	document.getElementById("truth").style.color = "green";
}

function makeGreenTwo() {
	document.getElementById("correct").style.color = "green";
}