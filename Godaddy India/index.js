function opentab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "flex";
}

function handleDropdown(dropdownName, command) {
  var i;
  var x = document.getElementsByClassName("dropdown");
  if (command == "close") {
    for (i = 0; i < x.length; i++) {
      if (x[i].style.display == "flex") {
        x[i].style.display = "none";
      }
    }
  } else if (command == "open") {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(dropdownName).style.display = "flex";
  }
}

var logo = document.querySelector(".logo");
logo.addEventListener("click", function() {
  handleDropdown("null", "close");
})