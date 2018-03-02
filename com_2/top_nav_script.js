function topNavFunc() {
    var x = document.getElementById("myTopnav");
    if (x.className === "top-bar") {
        x.className += " responsive";
    } else {
        x.className = "top-bar";
    }
}