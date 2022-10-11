// nav bar
function displayNav() {
  var nav = document.getElementById("topNav");
  if (nav.className === "navigation") {
    nav.className += " responsive"; //makes the nav bar go into the 3 bars instead of being written across
  } else {
    nav.className = "navigation";
  }
}

//slideshow starts with first image
let slideIndex = 1;
showSlides(slideIndex);

// next/previous controls
function plusSlides(n) {
  //n for current slide number
  showSlides((slideIndex += n));
}

// image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i; //i for index
  let slides = document.getElementsByClassName("slides"); //slides are being pulled from html
  let dots = document.getElementsByClassName("dot"); //dots are also being pulled
  //if statements for user to change slides
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  //for loop
  for (i = 0; i < slides.length; i++) {
    //every time index is less than # of slides, index goes up by 1
    slides[i].style.display = "none"; //so only selected slide appears
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); //changes color of dot corresponding with slide #
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
