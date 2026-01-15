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
    const getOffset = () => isMobile() ? 50 : 90;

    const scrollToTarget = (target) => {
        const y = target.getBoundingClientRect().top + window.scrollY - getOffset();
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

    const links = document.querySelectorAll(
        '#primaryNav a[href^="#"], #mobileNav a[href^="#"]'
    );

    links.forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;

            e.preventDefault();

            const offcanvasEl = document.getElementById('offcanvasMobileMenu');
            const offcanvas = offcanvasEl && bootstrap.Offcanvas.getInstance(offcanvasEl);

            if (offcanvas && offcanvasEl.classList.contains('show')) {
                offcanvasEl.addEventListener('hidden.bs.offcanvas', () => {
                    scrollToTarget(target);
                }, { once: true });

                offcanvas.hide();
            } else {
                scrollToTarget(target);
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