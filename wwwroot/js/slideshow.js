let slideIndex = 1;

window.addEventListener("load",function(){
    showSlides(slideIndex);
})

setInterval(function () {
    
    slideIndex += 1;
    if (slideIndex >= 3) {
        slideIndex = 1;
    }

    showSlides(slideIndex)

}, 3000)


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if(slides.length > 0 && dots.length > 0){

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}