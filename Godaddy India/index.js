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
function handleDropdown(dropdownId, dropdownToggle, action) {
  // Dropdowns
  const dropdown = document.getElementById(dropdownId);
  const allDropdowns = document.querySelectorAll('.dropdown');

  var DropdownToggle = document.getElementById(dropdownToggle);
  var allDropdownToggles = document.getElementsByClassName('toggle');
  var PricingLink = document.getElementById("pricingLink");

  // Close all dropdowns
  allDropdowns.forEach(d => {
    if (d.id !== dropdownId) {
      d.classList.remove('open');
    }
  });

   // Close all toggles
  //  allDropdownToggles.forEach(d => {
  //   if (d.id !== DropdownToggle) {
  //     d.classList.remove('dropdownToggle');
  //   }
  // });

  PricingLink.classList.remove('show');
  DropdownToggle.classList.remove('dropdownToggle');

  // Toggle the selected dropdown
  if (action === 'open') {
    const isOpen = dropdown.classList.toggle('open');
    if (isOpen) {
      PricingLink.classList.add('show');
      DropdownToggle.classList.add('dropdownToggle');
    } 
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