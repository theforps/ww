document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (!menuToggle || !mobileMenu) {
        console.warn('Mobile menu elements not found');
        return;
    }

    function toggleMobileMenu() {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
        body.classList.toggle('menu-open');

        const isOpen = mobileMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isOpen);
        menuToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
    }

    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Открыть меню');

    menuToggle.addEventListener('click', toggleMobileMenu);

    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Открыть меню');
        });
    });

    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.setAttribute('aria-label', 'Открыть меню');
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});
