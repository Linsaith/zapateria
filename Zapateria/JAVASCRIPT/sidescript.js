// Function to open the side menu
function openMenu() {
    document.getElementById("sideMenu").style.width = "250px";
    document.body.style.marginLeft = "250px"; // Shifting content when the menu opens
}

// Function to close the side menu
function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";
    document.body.style.marginLeft = "0"; // Reset content margin when the menu closes
}

// Function to restore the page to the homepage section
function restoreHome() {
    document.getElementById("inicio").scrollIntoView({ behavior: 'smooth' });
}
