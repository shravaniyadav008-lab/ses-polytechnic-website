// Faculty Details Show Function

function showFaculty(id) {

    var boxes = document.querySelectorAll(".detail-box");

    boxes.forEach(function(box) {
        box.style.display = "none";
    });

    document.getElementById(id).style.display = "block";

}



/* ================= SLIDER ================= */

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");

}

setInterval(showSlide, 4000);


/* ================= FACULTY DETAILS ================= */

let buttons = document.querySelectorAll(".details-btn");

buttons.forEach(function(btn) {

    btn.addEventListener("click", function() {

        let detailBox = this.nextElementSibling;

        if (detailBox.style.display === "block") {
            detailBox.style.display = "none";
            this.innerText = "More Details";
        } else {
            detailBox.style.display = "block";
            this.innerText = "Hide Details";
        }

    });

});

/* Scroll Animation */

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('show');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

window.addEventListener("scroll", reveal);

/* LAB CARD SCROLL ANIMATION */

let reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    let windowHeight = window.innerHeight;

    reveals.forEach(function(card) {

        let position = card.getBoundingClientRect().top;

        if (position < windowHeight - 100) {
            card.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

function reveal() {

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }

    }
}

window.addEventListener("scroll", reveal);


// Lightbox Gallery

var images = document.querySelectorAll(".gallery-img");
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var close = document.querySelector(".close");

images.forEach(function(img) {

    img.addEventListener("click", function() {

        lightbox.style.display = "flex";
        lightboxImg.src = this.src;

    });

});

close.onclick = function() {
    lightbox.style.display = "none";
}

// Mobile Menu Toggle

document.addEventListener("DOMContentLoaded", function(){

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

if(toggle){
toggle.addEventListener("click", function(){
menu.classList.toggle("show");
});
}

});
