// --- SWIPE OVER EACH SECT NAV ---
const navScrollContainer = document.querySelector('.nav-scroll-container');
let isNavDragging = false;
let navStartX;
let navScrollLeft;

// Drag to scroll functionality
navScrollContainer.addEventListener('mousedown', (navEvent) => {
    isNavDragging = true;
    navScrollContainer.classList.add('grabbing');
    navStartX = navEvent.pageX - navScrollContainer.offsetLeft;
    navScrollLeft = navScrollContainer.scrollLeft;
});

navScrollContainer.addEventListener('mouseleave', () => {
    isNavDragging = false;
    navScrollContainer.classList.remove('grabbing');
});

navScrollContainer.addEventListener('mouseup', () => {
    isNavDragging = false;
    navScrollContainer.classList.remove('grabbing');
});

navScrollContainer.addEventListener('mousemove', (navEvent) => {
    if (!isNavDragging) return;
    navEvent.preventDefault();
    const navX = navEvent.pageX - navScrollContainer.offsetLeft;
    const navWalk = (navX - navStartX) * 2;
    navScrollContainer.scrollLeft = navScrollLeft - navWalk;
});

// Touch support for mobile devices
navScrollContainer.addEventListener('touchstart', (navEvent) => {
    isNavDragging = true;
    navScrollContainer.classList.add('grabbing');
    navStartX = navEvent.touches[0].pageX - navScrollContainer.offsetLeft;
    navScrollLeft = navScrollContainer.scrollLeft;
});

navScrollContainer.addEventListener('touchend', () => {
    isNavDragging = false;
    navScrollContainer.classList.remove('grabbing');
});

navScrollContainer.addEventListener('touchmove', (navEvent) => {
    if (!isNavDragging) return;
    const navX = navEvent.touches[0].pageX - navScrollContainer.offsetLeft;
    const navWalk = (navX - navStartX) * 2;
    navScrollContainer.scrollLeft = navScrollLeft - navWalk;
});

// Dynamic edge blur effect
function updateNavEdgeBlur() {
    const navMaxScroll = navScrollContainer.scrollWidth - navScrollContainer.clientWidth;
    const navScrollPos = navScrollContainer.scrollLeft;

    if (navScrollPos <= 10) {
        navScrollContainer.style.maskImage = 'linear-gradient(90deg, transparent 0, #000 10px, #000 calc(100% - 10px), transparent 100%)';
        navScrollContainer.style.webkitMaskImage = 'linear-gradient(90deg, transparent 0, #000 10px, #000 calc(100% - 10px), transparent 100%)';
    } else if (navScrollPos >= navMaxScroll - 10) {
        navScrollContainer.style.maskImage = 'linear-gradient(90deg, transparent 0, #000 10px, #000 calc(100% - 10px), transparent 100%)';
        navScrollContainer.style.webkitMaskImage = 'linear-gradient(90deg, transparent 0, #000 10px, #000 calc(100% - 10px), transparent 100%)';
    } else {
        navScrollContainer.style.maskImage = 'linear-gradient(90deg, transparent 0, #000 15px, #000 calc(100% - 15px), transparent 100%)';
        navScrollContainer.style.webkitMaskImage = 'linear-gradient(90deg, transparent 0, #000 15px, #000 calc(100% - 15px), transparent 100%)';
    }
}

// Initial check
updateNavEdgeBlur();

// Update on scroll
navScrollContainer.addEventListener('scroll', updateNavEdgeBlur);

// Update on resize
window.addEventListener('resize', updateNavEdgeBlur);

// --- SWIPE OVER EACH GAME SECT ---
const container = document.querySelector('.scroll-container');
let isDown = false;
let startX;
let scrollLeft;

// Drag to scroll functionality
container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.classList.add('grabbing');
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('mouseleave', () => {
    isDown = false;
    container.classList.remove('grabbing');
});

container.addEventListener('mouseup', () => {
    isDown = false;
    container.classList.remove('grabbing');
});

container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll multiplier
    container.scrollLeft = scrollLeft - walk;
});

// Touch support for mobile devices
container.addEventListener('touchstart', (e) => {
    isDown = true;
    container.classList.add('grabbing');
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => {
    isDown = false;
    container.classList.remove('grabbing');
});

container.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll multiplier
    container.scrollLeft = scrollLeft - walk;
});

// Dynamic edge blur effect
function updateEdgeBlur() {
    const maxScroll = container.scrollWidth - container.clientWidth;
    const scrollPos = container.scrollLeft;

    // Remove all classes first
    container.classList.remove('can-scroll-left', 'can-scroll-right');

    // Add classes based on scroll position
    if (scrollPos > 10) {
        container.classList.add('can-scroll-left');
    }
    if (scrollPos < maxScroll - 10) {
        container.classList.add('can-scroll-right');
    }
}

// Initial check
updateEdgeBlur();

// Update on scroll
container.addEventListener('scroll', updateEdgeBlur);

// Update on resize
window.addEventListener('resize', updateEdgeBlur);


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


// --- PERSONAL CENTRE JS ---
// Tab switching functionality
document.querySelectorAll('.sidebar-menu a').forEach(item => {
    if (item.getAttribute('data-tab')) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active class from all tabs and menu items
            document.querySelectorAll('.sidebar-menu a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });

            // Add active class to clicked menu item
            this.classList.add('active');

            // Show corresponding tab content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    }
});

// Function to copy referral code
function copyReferralCode() {
    const copyText = document.getElementById("referralCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Referral code copied: " + copyText.value);
}

// Show only dashboard tab by default
document.querySelectorAll('.tab-content').forEach(tab => {
    if (tab.id !== 'dashboard') {
        tab.classList.remove('active');
    }
});

// Theme switching functionality
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? null : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    // Update icon
    const icon = document.querySelector('.theme-toggle i');
    if (newTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Save preference to localStorage
    if (newTheme) {
        localStorage.setItem('theme', newTheme);
    } else {
        localStorage.removeItem('theme');
    }
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const icon = document.querySelector('.theme-toggle i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}
