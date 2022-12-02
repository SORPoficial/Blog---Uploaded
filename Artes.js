// SCROLL REVEAL
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase', { delay: 200 });
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

// GO TOP BTN
let mybutton = document.getElementsByClassName('myBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// LOADER
window.addEventListener('load', () => {
    const container_loader = document.querySelector('.container_loader')
    container_loader.style.opacity = 0
    container_loader.style.visibility = 'hidden'
})

// COLLABSIBLE
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});
}
