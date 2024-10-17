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
function handleDropdown(dropdownId, action) {
  const dropdown = document.getElementById(dropdownId);
  var header = document.querySelector(".header");

  if (action === 'open') {
    var allElements = document.body.children;
    // for (var i = 0; i < allElements.length; i++) {
    //   allElements[i].classList.remove("blur");
    // }

    dropdown.classList.toggle('open');

    // for (var i = 0; i < allElements.length; i++) {
    //   if (allElements[i] !== dropdown) {
    //     allElements[i].classList.add("blur");
    //     header.classList.remove("blur");
    //   }
    // }
  }
}

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