$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        speed: 700,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
                breakpoint: 1190,
                settings:{
                    arrows: false,
                    slidesToShow: 3,
                },
                
            },
            {
                breakpoint: 900,
                settings:{
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings:{
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 540,
                settings:{
                    arrows: false,
                    slidesToShow: 2,
                },
            },
        ],
    });
    $('.header__burger').click(function(event){ 
        $('.header__burger, nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});