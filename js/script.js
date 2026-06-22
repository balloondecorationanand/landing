// main.js
// Hero Slider initialization for homepage banner section
const heroSlider = new Swiper(".heroSlider", {
    loop: true,
    speed: 1200,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});


// Counter animation on scroll using Intersection Observer

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

let count = 0;
            const speed = target / 120;

            const updateCounter = () => {
                count += speed;

if (count < target) {

    if (target >= 1000) {
        counter.innerText = Math.floor(count).toLocaleString();
    } else {
        counter.innerText = Math.floor(count);
    }

    requestAnimationFrame(updateCounter);

} else {

    if (target >= 1000) {
        counter.innerHTML = target.toLocaleString() + '+';
    } else {
        counter.innerHTML = target + '+';
    }
}
};

updateCounter();
observer.unobserve(counter);
}
});
}, { threshold: 0.4 });

counters.forEach(counter => {
    observer.observe(counter);
});


// Service Slider Initialization
// Used for sliders with the class "service-slider"
// Swiper starts only if more than one slide exists

document.querySelectorAll('.service-slider').forEach(function (slider) {

    let totalImages = slider.querySelectorAll('.swiper-slide').length;

    if (totalImages > 1) {

        new Swiper(slider, {
            loop: true,

            speed: 1000,

            autoplay: {
                delay: 2500,
                disableOnInteraction: false
            },

            effect: 'slide'
        });

    }

});


// Bootstrap Review Carousel Initialization
// Auto-plays every 3 seconds with looping enabled

var myCarousel = document.querySelector('#reviewCarousel');

var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    wrap: true,
    pause: false
});


// Scroll To Top Button Functionality
// Shows button after scrolling 400px and scrolls smoothly to top on click

const scrollBtn = document.getElementById("scrollTopBtn");

// Show / Hide button on scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollBtn.classList.add("show");
} else {
    scrollBtn.classList.remove("show");
}

});

// Smooth scroll to top on click
scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// OCCASION DROPDOWN HANDLING
// ================================

const occasionBtn = document.getElementById("occasionBtn");
const occasionList = document.getElementById("occasionList");

occasionBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    occasionList.classList.toggle("show");
});

// close dropdown on outside click
document.addEventListener("click", function () {
    occasionList.classList.remove("show");
});


// ================================
// UPDATE SELECTED OCCASION TEXT
// ================================

document.querySelectorAll(".occasion-list input")
.forEach(item => {

    item.addEventListener("change", function () {

        let selected = [];

        document.querySelectorAll(".occasion-list input:checked")
        .forEach(check => {
            selected.push(check.value);
    });

let displayText = "";

if (selected.length === 0) {
    displayText = 'Select Occasion <i class="bi bi-chevron-down"></i>';
}
else if (selected.length === 1) {
    displayText = selected[0] + ' <i class="bi bi-chevron-down"></i>';
}
else {
    displayText = selected[0] + ' +' + (selected.length - 1) + ' <i class="bi bi-chevron-down"></i>';
}

occasionBtn.innerHTML = displayText;

});

});


// ================================
// WHATSAPP FORM SUBMIT
// ================================

document.getElementById("bookingForm")
.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let venue = document.getElementById("venue").value;
    let location = document.getElementById("location").value;
    let pincode = document.getElementById("pincode").value;
    let budget = document.getElementById("budget").value;
    let date = document.getElementById("date").value;

    let occasions = [];

    document.querySelectorAll(".occasion-list input:checked")
    .forEach(item => {
        occasions.push(item.value);
});

let occasionText = occasions.join(", ");

// Format date as DD/MM/YYYY
let indianDate = "";

const PHONE_NUMBER = "917600514831";

if (date) {
    let d = new Date(date);

    indianDate =
        String(d.getDate()).padStart(2, '0') + "/" +
        String(d.getMonth() + 1).padStart(2, '0') + "/" +
        d.getFullYear();
}

let message = `🎈 *NEW BALLOON DECORATION AND EVENT INQUIRY*

    👤 *Name*: ${name}

    🎉 *Occasion*: ${occasionText}

    🏠 *Venue*: ${venue}

    📍 *Location*: ${location}

    📮 *Pincode*: ${pincode}

    📅 *Event Date*: ${indianDate}

    💰 *Budget*: ${budget}

Please share quotation and availability.`;

const url =
  `https://wa.me/${PHONE_NUMBER}?text=` +
encodeURIComponent(message);

window.open(url, "_blank");

// ================================
// RESET FORM
// ================================

document.getElementById("bookingForm").reset();

document.querySelectorAll(".occasion-list input").forEach(item => {
    item.checked = false;
});

occasionBtn.innerHTML =
    'Select Occasion <i class="bi bi-chevron-down"></i>';

occasionList.classList.remove("show");

// Close modal if exists
let modal = bootstrap.Modal.getInstance(
    document.getElementById('bookingModal')
);

if (modal) modal.hide();

});


// Mobile Sidebar (Bootstrap Offcanvas)
// Closes sidebar when any menu link is clicked

document.addEventListener("DOMContentLoaded", function () {

    const offcanvasElement = document.getElementById('mobileSidebar');

    if (!offcanvasElement) return;

    const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

    // Close sidebar when clicking any menu link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            offcanvas.hide();
});
});

});



// ================================
// NAV ACTIVE STATE + SCROLL SPY
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll('.nav-link');

    // Set default active (Home)
    const homeLink = document.querySelector('.nav-link[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }

    // Click active state
    navLinks.forEach(link => {
        link.addEventListener('click', function () {

            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

        });
});

// Scroll spy
    const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let scrollPos = window.scrollY + 120;

sections.forEach(section => {

    if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
    ) {

        navLinks.forEach(link => link.classList.remove("active"));

                const activeLink = document.querySelector(
                    '.nav-link[href="#' + section.id + '"]'
                );

if (activeLink) {
    activeLink.classList.add("active");
}

}

});

});

});
