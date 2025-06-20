// --- LATEST WINNERS CAROUSEL ---
$(document).ready(function () {
    $('#winner').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 2,
                nav: false,
            },
            769: {
                items: 3,
                nav: true,
            },
            1025: {
                items: 4,
                nav: true,
            },
            1200: {
                items: 4,
                nav: true,
            }
        }
    });

    // Add animation to items when they become active
    $('#winner').on('changed.owl.carousel', function (event) {
        var currentItem = event.item.index;
        var items = $(this).find('.owl-item');

        // Reset all items
        items.removeClass('active-animate');

        // Animate the active items
        setTimeout(function () {
            items.eq(currentItem).addClass('active-animate');
            if (items.eq(currentItem + 1).length) {
                items.eq(currentItem + 1).addClass('active-animate');
            }
        }, 50);
    });

    // Trigger initial animation
    setTimeout(function () {
        $('#winner .owl-item.active').addClass('active-animate');
        $('#winner .owl-item.active').next().addClass('active-animate');
    }, 300);
});

// --- ALL NAV CAROUSEL ---
$(document).ready(function (e) {
    $(".all-nav-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        autoWidth: true,
        // responsive: {
        //     0: { items: 2 },
        //     480: { items: 3 },
        //     768: { items: 4 },
        //     992: { items: 5 },
        //     1200: { items: 6 }
        // }
    });
});

// --- BOTTOM NAV JS ---
function setActive(clickedItem) {
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.classList.remove('active');
    });
    clickedItem.classList.add('active');
}

// --- SIDEBAR JS ---
// SIDEBAR Active/Not Active
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".sidebar-menu .menu-items .menu-item a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100 && window.scrollY < section.offsetTop + section.offsetHeight - 100) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.parentElement.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.parentElement.classList.add("active");
        }
    });
});

// Menu item active state
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
    });
});
