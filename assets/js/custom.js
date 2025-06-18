// --- ALL GAMES CAROUSEL ---
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

// SIDEBAR ACTIVE/NOT-ACTIVE
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".main-menu a");

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
