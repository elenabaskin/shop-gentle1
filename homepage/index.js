// nav bar
function displayNav() {
  var nav = document.getElementById("topNav");
  if (nav.className === "navigation") {
    nav.className += " responsive";
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
  let slides = document.getElementsByClassName("slides"); //slides are now a variable
  let dots = document.getElementsByClassName("dot"); //dots are not a variable
  //if statements
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  //for statement to only display one slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
