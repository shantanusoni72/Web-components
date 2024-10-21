// Handle Dropdown
function handleDropdown(dropdownId, dropdownToggle, action) {
    // Dropdowns
    const dropdown = document.getElementById(dropdownId);
    const allDropdowns = document.querySelectorAll('.dropdown');

    var DropdownToggle = document.getElementById(dropdownToggle);
    var allDropdownToggles = document.querySelectorAll('.toggle');
    var PricingLink = document.getElementById("pricingLink");

    // Close all dropdowns
    allDropdowns.forEach(d => {
        if (d.id !== dropdownId) {
            d.classList.remove('open');
        }
    });

    // Close all toggles
    allDropdownToggles.forEach(d => {
        if (d.id !== DropdownToggle) {
            d.classList.remove('dropdownToggle');
        }
    });

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

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

document.querySelector('.close-btn').addEventListener('click', toggleSidebar);

document.querySelector('.hamburger').addEventListener('click', toggleSidebar);

// Function to open the sub-menu
function openSubMenu(menuId, dropdown) {
    const allSubMenus = document.querySelectorAll('.sub-menu');
    allSubMenus.forEach(subMenu => {
        if (subMenu.id !== menuId) {
            subMenu.classList.remove('open');
        }
    });

    const subMenu = document.getElementById(menuId);
    subMenu.classList.add('open');
    document.getElementById('close-btn').style.display = 'none';
}

// Function to close the sub-menu
function closeSubMenu() {
    const allSubMenus = document.querySelectorAll('.sub-menu');
    allSubMenus.forEach(subMenu => {
        subMenu.classList.remove('open');
        document.getElementById('close-btn').style.display = 'inline';
    });
}

// Hide SearchSVG onClick SearchInput
var searchInput = document.getElementById("searchInput");
var searchSVG = document.getElementById("searchSVG");

searchInput.addEventListener('click', function () {
  if (window.innerWidth >= 992) {
    searchSVG.style.display = "none";
    searchInput.style.transition = "0.2s";
    searchInput.style.paddingInline = "2%";
  }
})

// Show SearchSVG onClick Document
document.addEventListener('click', function (event) {
  if(window.innerWidth >= 992) {
    if (event.target !== searchInput && event.target !== searchSVG) {
      searchSVG.style.display = "block";
      searchInput.style.transition = "0.2s";
      searchInput.style.paddingInline = "5%";
    }
  }
});

// Change Tabs
function opentab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "grid";
  }