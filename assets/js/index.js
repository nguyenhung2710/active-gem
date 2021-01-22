lightGallery(document.getElementById('lightgallery'));

jQuery(document).ready(function ($) {
    //Change Size 
    $(function() {
        $(".select__size-m").click(function(){
            $(".main__size").html("M");
            $(".main-size__input").val("MUA SIZE M");
        });
        $(".select__size-l").click(function(){
            $(".main__size").html("L");
            $(".main-size__input").val("MUA SIZE L");
        });
        $(".select__size-xl").click(function(){
            $(".main__size").html("XL");
            $(".main-size__input").val("MUA SIZE XL");
        });
        $(".select__size-xxl").click(function(){
            $(".main__size").html("XXL");
            $(".main-size__input").val("MUA SIZE XXL");
        });
    });

    //Add Item
    $(function(){
        var valueItem = $('#value-item').val();
        $('.down-item').click(function(){
            valueItem--;
            if(valueItem < 1) {
                $('.down-item').css("pointer-events", "none");
            };
            $("#value-item").val(valueItem);
        });
        $('.up-item').click(function(){
            valueItem++;
            if (valueItem >= 0) {
                $('.down-item').css("pointer-events", "auto");
            };
            $("#value-item").val(valueItem);
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

    // Product
    $(function(){
        $('.carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.carousel-thumb',
        });
        $('.carousel-thumb').slick({
            slidesToShow: 5,
            //slidesToScroll: 3,
            asNavFor: '.carousel',
            centerMode: false,
            focusOnSelect: true,
        });
    });

    //More product
    $(function(){
        $(".body_more--item").click(function(){
            $(".more-info-product").show(500);
            $(".body_more--item").hide();
        });
    })

    // Slider main
    $(function(){
        $('.carousel__item-main').slick({
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 4,
        });
    });

    // Gallery
    $(function(){
        $("#more-img").click(function(){
            $(".more-gallery").show(500);
            $("#more-img").hide();
            //$("#lightgallery").css("height", "28rem");
        });
    })

    //Hide & Show Rate
    $(function(){
        $(".write-cmt__bt").click(function(){
            $(".write-cmt__form").toggle(500);
        });
    });

    //Rate star
    $(".my-rating").starRating({
        starSize: 25,
        hoverColor: "#E3AA29",
        callback: function(currentRating, $el){
            // make a server call here
        }
    });

    //More cmt
    $(function(){
        $(".admin-cmt__more").click(function(){
            $(".user-cmt_hide").show(500);
            $(".admin-cmt__more").hide();
        })
    })
});