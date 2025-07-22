// --- EVERYTHING'S ATTRIBUTES UPDATE for MOBILE ---
function updateModalAttributes() {
    const isMobile = window.innerWidth <= 768;
    document.querySelectorAll('.agCard').forEach(card => {
        if (isMobile) {
            card.setAttribute('data-bs-toggle', 'modal');
            card.setAttribute('data-bs-target', '#cloverModal');
        } else {
            card.removeAttribute('data-bs-toggle');
            card.removeAttribute('data-bs-target');
        }
    });
    document.querySelectorAll('.pgCard').forEach(card => {
        if (isMobile) {
            card.setAttribute('data-bs-toggle', 'modal');
            card.setAttribute('data-bs-target', '#cloverModal');
        } else {
            card.removeAttribute('data-bs-toggle');
            card.removeAttribute('data-bs-target');
        }
    });
    document.querySelectorAll('.totCard').forEach(card => {
        if (isMobile) {
            card.setAttribute('data-bs-toggle', 'modal');
            card.setAttribute('data-bs-target', '#cloverModal');
        } else {
            card.removeAttribute('data-bs-toggle');
            card.removeAttribute('data-bs-target');
        }
    });
    document.querySelectorAll('.pfCard').forEach(card => {
        if (isMobile) {
            card.setAttribute('data-bs-toggle', 'modal');
            card.setAttribute('data-bs-target', '#cloverModal');
        } else {
            card.removeAttribute('data-bs-toggle');
            card.removeAttribute('data-bs-target');
        }
    });
    document.querySelectorAll('.tfrCard').forEach(card => {
        if (isMobile) {
            card.setAttribute('data-bs-toggle', 'modal');
            card.setAttribute('data-bs-target', '#cloverModal');
        } else {
            card.removeAttribute('data-bs-toggle');
            card.removeAttribute('data-bs-target');
        }
    });
    document.querySelectorAll('.jpCard').forEach(card => {
        if (isMobile) {
            card.setAttribute('data-bs-toggle', 'modal');
            card.setAttribute('data-bs-target', '#cloverModal');
        } else {
            card.removeAttribute('data-bs-toggle');
            card.removeAttribute('data-bs-target');
        }
    });
    document.querySelectorAll('.search-game-card').forEach(card => {
        if (isMobile) {
            card.setAttribute('data-bs-toggle', 'modal');
            card.setAttribute('data-bs-target', '#cloverModal');
        } else {
            card.removeAttribute('data-bs-toggle');
            card.removeAttribute('data-bs-target');
        }
    });
}
updateModalAttributes();
window.addEventListener('resize', updateModalAttributes);

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

// --- LATEST WINNERS CAROUSEL ---
$(document).ready(function () {
    $('#winner').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
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
                nav: true,
            },
            576: {
                items: 2,
                nav: true,
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
        const currentItem = event.item.index;
        const items = $(this).find('.owl-item');

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


// --- HERO CAROUSEL ---
const heroSwiper = new Swiper('.hero-carousel', {
    grabCursor: true,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".cusNextForHero",
        prevEl: ".cusPrevForHero",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2,
            centeredSlides: false,
        },
        1025: {
            slidesPerView: 3,
        },
    }
});

// --- ALL NAV CAROUSEL ---
const anSwiper = new Swiper('.all-nav-carousel', {
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    watchOverflow: true,
})
applySwiperBlurEffect(anSwiper, '.all-nav-carousel');

// --- SEARCH NAV CAROUSEL ---
const searchNavSwiper = new Swiper('.search-nav-carousel', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    freeMode: true,
    watchOverflow: true,
});

// --- ALL GAMES CAROUSEL ---
const agSwiper = new Swiper(".agSwiper", {
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    freeMode: true,
    watchOverflow: true,
});
// input for fade
applySwiperBlurEffect(agSwiper, '.agSwiper');

// --- POPULAR GAMES CAROUSEL ---
const pgSwiper = new Swiper(".pgSwiper", {
    grabCursor: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    freeMode: true,
    watchOverflow: true,
    navigation: {
        nextEl: '.cusNextForPG',
        prevEl: '.cusPrevForPG',
    },
});
// input for fade
applySwiperBlurEffect(pgSwiper, '.pgSwiper');

// --- TOT OF THE WEEK CAROUSEL ---
const totSwiper = new Swiper(".totSwiper", {
    grabCursor: true,
    freeMode: true,
    watchOverflow: true,
    slidesPerView: 1.3,
    spaceBetween: 10,
    breakpoints: {
        351: {
            slidesPerView: 1.5,
        },
        426: {
            slidesPerView: 1.8,
        },
        465: {
            slidesPerView: 2
        },
        526: {
            slidesPerView: 2.3
        },
        769: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    },
});
// input for fade
applySwiperBlurEffect(totSwiper, '.totSwiper');

// --- POOL FUN CAROUSEL ---
const pfSwiper = new Swiper('.pfSwiper', {
    grabCursor: true,
    freeMode: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 12,
    breakpoints: {
        376: {
            slidesPerView: 1.2,
        },
        450: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2.5,
        },
        1025: {
            slidesPerView: 3,
        },
        1180: {
            slidesPerView: 3.2,
        },
        1240: {
            slidesPerView: 3.5,
        },
        1375: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: '.cusNextForPF',
        prevEl: '.cusPrevForPF',
    },
});

// --- THE FISHING ROD CAROUSEL ---
const tfrSwiper = new Swiper(".tfrSwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    centeredSlides: true,
    slidesPerView: 1,
    coverflowEffect: {
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    breakpoints: {
        376: {
            slidesPerView: 1.5
        },
        476: {
            slidesPerView: 2
        },
        769: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// --- JACKPOT CAROUSEL ---
const jpSwiper = new Swiper('.jpSwiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        350: {
            slidesPerView: 2.2,
        },
        375: {
            slidesPerView: 2.4,
        },
        400: {
            slidesPerView: 2.5,
        },
        426: {
            slidesPerView: 2.7,
        },
        466: {
            slidesPerView: 3.1,
        },
        530: {
            slidesPerView: 3.5,
            spaceBetween: 14,
        },
        992: {
            slidesPerView: 4,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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


// ---LIBRARY NAV - SWIPER ---
const lnSwiper = new Swiper(".lib-nav-carousel", {
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
applySwiperBlurEffect(lnSwiper, '.lib-nav-carousel');


