var slide_index = 1;
// displaySlides(slide_index);

function plusSlides(n) {
    displaySlides(slide_index += n);
}

function currentSlide(n) {
    displaySlides(slide_index = n);
}


function displaySlides(n) {
    var i;
    var slides = document.getElementsByClassName("showSlide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slide_index = 1 }
    if (n < 1) { slide_index = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('active');
    }
    slides[slide_index - 1].style.display = "block";
    dots[slide_index - 1].classList.add('active');
}

function showPanel(val) {
    let header = document.querySelector('#mainHeader');
    if (val) {
        header.classList.add('active');
    }
    else {
        header.classList.remove('active');
    }
}