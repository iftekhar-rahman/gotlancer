jQuery(document).ready(function($){


    // JS for search box
    $(function() {
        $("#search-box-trigger").on("click", function(e) {
            $("#search-box-wrapper").toggleClass("active");
        });
        $(document).on("click", function(e) {
            if ($(e.target).is("#search-box-wrapper, #search-box-trigger") === false) {
                $("#search-box-wrapper").removeClass("active");
            }
        });
    });

    $(".mobile-menu-trigger").on("click", function(){
        $(".header-area, .overlay").addClass("active");
    });
    $(".mobile-menu-close-trigger, .overlay").on("click", function(){
        $(".header-area, .overlay").removeClass("active");
    });

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
      });
      
      var imgs = $('.slider img');
      imgs.each(function(){
        var item = $(this).closest('.item');
        item.css({
        });
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


    //  Profile trigger start
	$('#dropdownMenuButton').on('click', function () {
		$('.dropdown-menu').toggleClass('show');
	});

	$('.available-status .online').on('click', function () {
		$(this).css({ backgroundColor: '#74B95C' });
		$('.available-status .away').css({ backgroundColor: '#ADBDCD' });
	});
	$('.available-status .away').on('click', function () {
		$(this).css({ backgroundColor: '#74B95C' });
		$('.available-status .online').css({ backgroundColor: '#ADBDCD' });
	});

	$(document).on('click', function (e) {
		var container = $('.dropdown-menu');
		if (!container.is(e.target) && e.target.className !== 'profile-image' && container.has(e.target).length === 0) {
			container.removeClass('show');
		}
	});
	//  Profile trigger end



    
    $('.mainmenu').meanmenu({
        meanMenuContainer: '.header-area .container',
        meanScreenWidth: 991,
        meanRevealPosition: "left",
        meanExpand: "+",
        meanContract: "-",
    });
    

});