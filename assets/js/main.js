// Slide
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
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


// Slider
jQuery(document).ready(function ($) {
    $('.slider_item-main').lightSlider({
        item: 4,
        slideMove: 4,
        speed: 600,
        enableDrag: false,
        // autoWidth:true,
        //slideMargin: 0,
        onSliderLoad: function () {
            $('.slider_item-main').removeClass('cS-hidden');
        }
    });
    // $('#lightgallery').lightGallery({
    //     thumbnail: true,
    // }); 
}); 

//Gallery
lightGallery(document.getElementById('lightgallery'));