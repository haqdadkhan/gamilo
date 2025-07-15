// --- FADE EFFECT - FUNCTION ---
function applySwiperBlurEffect(swiper, containerSelector) {
    const container = document.querySelector(containerSelector);
    const updateBlur = () => {
        container.classList.toggle('show-left-blur', !swiper.isBeginning);
        container.classList.toggle('show-right-blur', !swiper.isEnd);
    };
    swiper.on('slideChange', updateBlur);
    swiper.on('touchMove', updateBlur);
    updateBlur();
}
document.addEventListener('DOMContentLoaded', function () {
    // ---LIBRARY NAV - SWIPER ---
    const anSwiper = new Swiper(".lib-nav-carousel", {
        grabCursor: true,
        slidesPerView: 'auto',
        spaceBetween: 8,
        watchOverflow: true,
        navigation: {
            nextEl: '.cusNextForLIB',
            prevEl: '.cusPrevForLIB',
        },
    });

    // Apply blur effect if needed
    applySwiperBlurEffect(anSwiper, '.lib-nav-carousel');
});
