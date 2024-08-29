document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    var menuToggle = document.getElementById('navbarNav');
    var bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function() {
            if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
                bsCollapse.hide();
            }
        });
    });
});
