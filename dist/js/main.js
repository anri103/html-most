document.addEventListener('DOMContentLoaded', () => {

    //phone mask
    const maskPhone = document.querySelectorAll('.maskPhone')
    maskPhone.forEach(function (el) {
        IMask(el, {
            mask: '+{7}(000)000-00-00'
        });
    });

    // Fancybox
    Fancybox.bind("[data-fancybox]", {});

    // subscribeForm after submit show modal modalThanks
    document.getElementById("subscribeForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const sf = new bootstrap.Modal(document.getElementById("modalThanks"));
        sf.show()
    });

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