(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $(".stickyNav").sticky({ 
            topSpacing: 0,
            zIndex: 999,
        });
        //Scroll To top Function apply
        $(window).scroll(function(){
            var ScrollToTop = $(window).scrollTop();
            
            //ScrollToTop Function
            if( ScrollToTop > 500){
                $(".ScrollToTop").fadeIn();
            }
            else{
                $(".ScrollToTop").fadeOut();
            }
        });

        //Scroll To top With animate
        $(".ScrollToTop").on('click', function(){
            $("body, html").animate({'scrollTop' : 0}, 1000, 'easeInOutExpo');
            return false
        });

        $(".testimonial-slides").owlCarousel({
            items : 1,
            dots : true,
            autoplay: true,
            loop :true,
        })
        $(".brand-slides").owlCarousel({
            items : 5,
            autoplay: true,
            loop :true,
            autoplayTimeout: 10000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
        })

        $('.video_play_btn').magnificPopup({
            type: 'video',
        });

        // WOW JS
        new WOW().init();

    });


    jQuery(window).load(function(){
        

    });


}(jQuery));

