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

    // swiperTeamDesktop
    const swiperTeamDesktop = document.querySelector('.swiperTeamDesktop');
    if (swiperTeamDesktop) {
        new Swiper('.swiperTeamDesktop', {
            // effect: 'coverflow',
            slidesPerView: 'auto',
            spaceBetween: 20,
            // centeredSlides: true,
            loop: true,
            // coverflowEffect: {
            //     rotate: 0,
            //     stretch: -375,
            //     depth: 900,
            //     modifier: 1,
            //     slideShadows: false,
            // },
            navigation: {
                nextEl: '.btn-swiper-next',
                prevEl: '.btn-swiper-prev',
            }
        });
    }

    // swiperTeamMobile
    const swiperTeamMobile = document.querySelector('.swiperTeamMobile');
    if (swiperTeamMobile) {
        new Swiper('.swiperTeamMobile', {
            slidesPerView: 'auto',
            spaceBetween: 8,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: '.btn-swiper-next',
                prevEl: '.btn-swiper-prev',
            }
        });
    }

});