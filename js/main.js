jQuery(document).ready(function($){

    // Sticky Header with smooth animation
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 300) {
            $('.header-area').addClass('fixed');
        } else {
            $('.header-area').removeClass('fixed');
        }
    })

    // $(".header-area").sticky({ topSpacing: 0 });

    $('select').niceSelect();

    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
    });

    // homepage-slides
	// $(".homepage-slides").owlCarousel({
	// 	items: 1,
	// 	loop: true,
	// 	nav: true,
	// 	dots: false,
    //     autoplay: false,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	// });

        // perfectScrollbar
        // $(".nice-select .list").perfectScrollbar();

    // $("#range_49").ionRangeSlider({
    //     type: "single",
    //     min: 150,
    //     max: 250,
    //     from: 200,
    //     to: 250,
    //     prefix: "£",
    //     step: 1,
    //     onFinish: function(data) {
    //         maxValue = data.from;
    //         alert("Your Value: " + maxValue);
    //     }
    // });


    // $(".hero-slider").owlCarousel({
    //     items: 3,
    //     center: true,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 0,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     // responsive: {
    //     //     0: {
    //     //         items: 2,
    //     //         margin: 15,
    //     //         nav: false
    //     //     },
    //     //     580: {
    //     //         items: 3,
    //     //         margin: 3,
    //     //         nav: false
    //     //     },
    //     //     720: {
    //     //         items: 4,
    //     //         margin: 3,
    //     //         nav: false
    //     //     },
    //     //     960: {
    //     //         items: 5
    //     //     },
    //     //     1140: {
    //     //         items: 6
    //     //     }

    //     // }
    // });

    // $(".feature-carousel-wrap").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 0,
    //             nav: false
    //         },
    //         481: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         720: {
    //             items: 3,
    //             margin: 15,
    //             nav: false
    //         },
    //         960: {
    //             items: 3,
    //             margin: 25,
    //         },
    //         1140: {
    //             items: 4
    //         }

    //     }
    // });




	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
    // });
    

    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        prevArrow:'<button class="slick-prev"> < </button>',
        nextArrow:'<button class="slick-next"> > </button>',
        
        //         responsive: [                        
        //             {
        //               breakpoint: 576,
        //               settings: {
        //                 centerMode: false,
        //                 variableWidth: false,
        //               }
        //             },
        //         ]
      });
      
      var imgs = $('.slider img');
      imgs.each(function(){
        var item = $(this).closest('.item');
        item.css({
        //   'background-image': 'url(' + $(this).attr('src') + ')', 
        //   'background-position': 'center',            
        //   '-webkit-background-size': 'cover',
        //   'background-size': 'cover', 
        });
        // $(this).hide();
      });

    // Scroll To Top starts
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollTop').addClass('scrollBtn');
        } else {
            $('.scrollTop').removeClass('scrollBtn');
        }
    });
    $(".scrollTop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    }); // click() scroll top ENDS



    

    

});