$('.slider').slick({
  dots: true,
  infinite: true, 
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,  
  waitForAnimate:true, 
  arrows:false  
});
$('.testimonials__carousel').slick({
  // бесконечная прокрутка 
  infinite: true,
  // три штуке в стоке  
  slidesToShow: 5,     
  // сколько будет листаца  
  slidesToScroll: 1,
  // скрыть стрелки
  arrows:true,   
 prevArrow:'<button class="arrow right"><img src="img/right.png" alt=""></button>',
 nextArrow:'<button class="arrow left"><img src="img/left.png" alt=""></button>',
  // двойной слайдер
  asNavFor:".testimonials__slider",
  // точки 	
  dots:false,
  // без анимации	
 waitForAnimate:false,
// с какогослайда начинать
 // initialSlide:3,
 // увеличение картинки в центре
 centerMode:true,
// убирает картинки по бокам
  centerPadding: 0,           
   
   // скорость прокрутки
  speed: 500,
  
  responsive: [

 {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
 ]
});
$('.testimonials__slider').slick({
  // бесконечная прокрутка 
  infinite: true,
  // три штуке в стоке  
  slidesToShow: 1,     
  // сколько будет листаца  
  slidesToScroll: 1,
  // скрыть стрелки
  arrows:false, 
  // двойной слайдер
  asNavFor:".testimonials__carousel",
  // точки  
  // dots:true,
  // без анимации 
 waitForAnimate:false,
 // увеличение картинки в центре
// centerMode:true,
// убирает картинки по бокам
 // centerPadding: 0,
   // скорость прокрутки
  speed: 500,
 
 
});
  $('.burger').click(function() {
        $('.burger').toggleClass('active');
        $('.menu').toggleClass('active');
        // скрол страницы пропадает
        $('body').toggleClass('lock'); 
 });

     $("body").on('click', '[href*="#"]', function(e){
   var fixed_offset = 63;
   $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
    
         $('.menu').removeClass('active');
         $('body').removeClass('lock');
         $('.burger').removeClass('active');

   var $this = $(this); 

        $(".menu a").removeClass("active");
       $this.addClass("active");

  });