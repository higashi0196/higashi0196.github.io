document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var navbarOffsetTop = navbar.offsetTop;

    window.addEventListener("scroll", function() {
        if (window.pageYOffset >= navbarOffsetTop) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });
});