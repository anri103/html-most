document.addEventListener('DOMContentLoaded', () => {

    // Scrollable header
    function toggleScrollClass() {
        const windowScroll = window.scrollY || window.pageYOffset;
        const fixedMenu = document.querySelectorAll('.header-row');

        if (windowScroll > 200) {
            fixedMenu.forEach(row => {
                row.classList.add('js-scrollable');
            });
        } else {
            fixedMenu.forEach(row => {
                row.classList.remove('js-scrollable');
            });
        }
    }
    toggleScrollClass();
    window.addEventListener('scroll', toggleScrollClass);

    // Scrollspy
    const isMobile = () => window.matchMedia('(max-width: 991px)').matches;
    const getOffset = () => isMobile() ? 50 : 100;

    const easeInOutCubic = t =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const smoothScrollTo = (target, duration = 1100) => {
        const start = window.pageYOffset;
        const end = target.getBoundingClientRect().top + start - getOffset();
        const distance = end - start;
        let startTime = null;

        const step = timestamp => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = easeInOutCubic(progress);
            window.scrollTo(0, start + distance * eased);
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const menuLinks = document.querySelectorAll(
        '#primaryNav a[href^="#"], #mobileNav a[href^="#"]'
    );

    menuLinks.forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            e.preventDefault();
            smoothScrollTo(target);

            const offcanvas = document.getElementById('offcanvasMobileMenu');
            if (offcanvas?.classList.contains('show')) {
                bootstrap.Offcanvas.getInstance(offcanvas)?.hide();
            }
        });
    });

    new bootstrap.ScrollSpy(document.body, { target: '#primaryNav' });
    new bootstrap.ScrollSpy(document.body, { target: '#mobileNav' });

    //phone mask
    const maskPhone = document.querySelectorAll('.maskPhone')
    maskPhone.forEach(function (el) {
        IMask(el, {
            mask: '+{7} (000) 000-00-00'
        });
    });

    // Fancybox
    Fancybox.bind("[data-fancybox]", {});

    // teamSwiper
    const teamSwiper = document.querySelector('.teamSwiper');
    if (teamSwiper) {
        new Swiper('.teamSwiper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: false,
            freeMode: true,
            grabCursor: true,
            navigation: {
                nextEl: '.section-about-photos .btn-swiper-right',
                prevEl: '.section-about-photos .btn-swiper-left',
            }
        });
    }

});