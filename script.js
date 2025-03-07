document.addEventListener('DOMContentLoaded', function () {
    const logo = document.querySelector('.logotyp');
    const nav = document.querySelector('nav');

    if (logo && nav) {
        // Toggle menu when logo is clicked (on small screens)
        logo.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Prevent default link behavior
                nav.classList.toggle('active');
                logo.classList.toggle('active'); // Toggle the active class for the menu indicator
                logo.setAttribute('aria-expanded', nav.classList.contains('active')); // Update ARIA attribute
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!logo.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                logo.classList.remove('active');
                logo.setAttribute('aria-expanded', false); // Update ARIA attribute
            }
        });

        // Close menu when a nav link is clicked
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                    logo.classList.remove('active');
                    logo.setAttribute('aria-expanded', false); // Update ARIA attribute
                }
            });
        });
    } else {
        console.error('Logo or navigation not found!');
    }
});