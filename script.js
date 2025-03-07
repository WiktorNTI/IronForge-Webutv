document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logotyp');

    // Toggle menu on hamburger click
    if (hamburgerMenu && nav) {
        hamburgerMenu.addEventListener('click', function () {
            nav.classList.toggle('active');
            hamburgerMenu.classList.toggle('active'); // For animation (optional)
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburgerMenu.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('active');
                hamburgerMenu.classList.remove('active');
            }
        });

        // Close menu on nav link click
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                    hamburgerMenu.classList.remove('active');
                }
            });
        });
    }

    if (logo && nav) {
        logo.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                nav.classList.toggle('active');
            }
        });
    }
});