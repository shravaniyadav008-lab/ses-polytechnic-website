// ================= FACULTY DETAILS SHOW =================

function showFaculty(id) {

    var boxes = document.querySelectorAll(".detail-box");

    boxes.forEach(function(box) {
        box.style.display = "none";
    });

    var selected = document.getElementById(id);
    if(selected){
        selected.style.display = "block";
    }
}


// ================= SLIDER =================

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {

    if(slides.length === 0) return;

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    index++;

    if (index >= slides.length) {
        index = 0;
    }

    slides[index].classList.add("active");

}

if(slides.length > 0){
    slides[0].classList.add("active");
    setInterval(showSlide, 4000);
}


// ================= FACULTY DETAILS BUTTON =================

let buttons = document.querySelectorAll(".details-btn");

buttons.forEach(function(btn) {

    btn.addEventListener("click", function() {

        let detailBox = this.nextElementSibling;

        if (!detailBox) return;

        if (detailBox.style.display === "block") {
            detailBox.style.display = "none";
            this.innerText = "More Details";
        } else {
            detailBox.style.display = "block";
            this.innerText = "Hide Details";
        }

    });

});


// ================= SCROLL ANIMATION =================

const faders = document.querySelectorAll('.fade-in');

if(faders.length > 0){

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add('show');
        observer.unobserve(entry.target);

    });

}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

}


// ================= LAB CARD SCROLL =================

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


// ================= GALLERY LIGHTBOX =================

var images = document.querySelectorAll(".gallery-img");
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");
var closeBtn = document.querySelector(".close");

images.forEach(function(img) {

    img.addEventListener("click", function() {

        if(lightbox && lightboxImg){
            lightbox.style.display = "flex";
            lightboxImg.src = this.src;
        }

    });

});

if(closeBtn && lightbox){

closeBtn.onclick = function() {
    lightbox.style.display = "none";
}

}


// ================= MOBILE MENU TOGGLE =================

document.addEventListener("DOMContentLoaded", function(){

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

if(toggle && menu){

toggle.addEventListener("click", function(){

menu.classList.toggle("show");

});

}

});
