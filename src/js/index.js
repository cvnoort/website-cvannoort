function showMenu () {
    document.getElementById("nav-name").style.display = "none";
    document.getElementById("nav-dropdown").style.display = "none";
    document.getElementById("nav-info").style.display = "flex";
}

document.querySelector("#nav-dropdown").addEventListener("click", showMenu);
