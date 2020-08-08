$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        nextArrow: '<button type="button" class="slick-next"><img src="img/slider/chevron-right-solid.png"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/chevron-left-solid.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false
              }
            },
                        
          ]
    });
});
          