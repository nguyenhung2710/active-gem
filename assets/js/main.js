jQuery(document).ready(function ($) {
    // Smooth scroll
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    // Modal
    $(document).ready(function () {
        var modal = $('.modal');
        var btn = $('.btn');
        var span = $('.close');
        modal.show();
        span.click(function () {
            modal.hide();
        });
        $(window).on('click', function (e) {
            if ($(e.target).is('.modal')) {
                modal.hide();
            }
        });
    });

    //Change Address
    $(function(){
        $(".address-item__active").click(function(){
            $(".address-item").toggle();
        });
        $("#addHn").click(function(){
            $(".address-item__active").val('Hà Nội');
            $(".address-item").hide();
        });
        $("#addDn").click(function(){
            $(".address-item__active").val('Đà Nẵng');
            $(".address-item").hide();
        });
        $("#addHcm").click(function(){
            $(".address-item__active").val('TP. HCM');
            $(".address-item").hide();
        });
    });

    //Change Size
    $(function(){
        $(".size-item__active").click(function(){
            $(".size-item").toggle();
        });
        $("#sizeM").click(function(){
            $(".size-item__active").val('Size M');
            $(".size-item").hide();
        });
        $("#sizeXL").click(function(){
            $(".size-item__active").val('Size XL');
            $(".size-item").hide();
        });
        $("#sizeXXL").click(function(){
            $(".size-item__active").val('Size XXL');
            $(".size-item").hide();
        });
    });

    //Carousel
    $(function() {
        $('.carousel-sec6').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        });
        $('.carousel-sec7').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    })
});
