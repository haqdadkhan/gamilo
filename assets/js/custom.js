// --- ALL GAMES CAROUSEL ---
$(document).ready(function (e) {
    $(".all-games-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        autoWidth: true,
        responsive: {
            0: { items: 2 },
            480: { items: 3 },
            768: { items: 4 },
            992: { items: 5 },
            1200: { items: 6 }
        }
    });
    $('.all-games-carousel').on('click', '.nav-link', function (e) {
        e.stopPropagation();
    });

    e.stopPropagation();
});

// --- BOTTOM NAV JS ---
function setActive(clickedItem) {
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    clickedItem.classList.add('active');
}
