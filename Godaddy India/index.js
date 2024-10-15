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

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  // Toggle dropdown visibility
  dropdownToggle.addEventListener("click", function () {
      dropdownMenu.classList.toggle("show");
  });

  // Close the dropdown when clicking outside
  window.addEventListener("click", function (event) {
      if (!event.target.matches('.dropdown-toggle')) {
          if (dropdownMenu.classList.contains("show")) {
              dropdownMenu.classList.remove("show");
          }
      }
  });
});