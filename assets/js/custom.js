// Carousel for All Games
$(document).ready(function () {
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
});

// bottom navigation
function setActive(clickedItem) {
    // Remove active class from all items
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to clicked item
    clickedItem.classList.add('active');
}
