// nav bar
function displayNav() {
  var nav = document.getElementById("topNav");
  if (nav.className === "navigation") {
    nav.className += " responsive";
  } else {
    nav.className = "navigation";
  }
}
