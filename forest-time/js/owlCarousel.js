$(document).ready(function(){
    $('#partner-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 450,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
    });

    $('#lastest-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    nav:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 450,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
    });
});
