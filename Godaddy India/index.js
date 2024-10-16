// Change Tabs
function opentab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  const isMobile = window.innerWidth <= 450;
  if (isMobile) {
    document.getElementById(tabName).style.display = "block";
  } else {
    document.getElementById(tabName).style.display = "flex";
  }
}

// Handle Dropdown
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

// Hide Dropdown onClick Logo
var logo = document.querySelector(".logo");
logo.addEventListener("click", function () {
  handleDropdown("null", "close");
})

// Hide SearchSVG onClick SearchInput
var searchInput = document.getElementById("searchInput");
var searchSVG = document.getElementById("searchSVG");

searchInput.addEventListener('click', function () {
  searchSVG.style.display = "none";
  searchInput.style.transition = "0.2s";
  searchInput.style.paddingInline = "2%";
})

// Show SearchSVG onClick Document
document.addEventListener('click', function (event) {
  if (event.target !== searchInput && event.target !== searchSVG) {
    searchSVG.style.display = "block";
    searchInput.style.transition = "0.2s";
    searchInput.style.paddingInline = "5%";
  }
});

var heroBtnOne = document.getElementById("HeroBtnOne");
var heroBtnTwo = document.getElementById("HeroBtnTwo");

var heroSVGone = document.getElementById("HeroSVGone");
var heroSVGtwo = document.getElementById("HeroSVGtwo");

heroBtnOne.addEventListener("mouseover", function () {
  heroSVGone.style.display = "block";
  heroSVGone.style.transition = "0.2s";
})

heroBtnTwo.addEventListener("mouseover", function () {
  heroSVGtwo.style.display = "block";
  heroSVGtwo.style.transition = "0.2s";
})

// Hide RightArrow onHover Document

// document.addEventListener('mouseover', function (event) {
//   if (event.target !== heroBtnOne || event.target !== heroBtnTwo) {
//     if(heroSVGone.style.display === "block" || heroSVGtwo.style.display === "block") {
//       heroSVGone.style.display = "none";
//       heroSVGtwo.style.display = "none";
//     }
//   }
// });