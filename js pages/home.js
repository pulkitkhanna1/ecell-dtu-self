



  //-----------------------------------scroll parallax-----------------------------------

function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
   duration: '200%',
   triggerElement: '.about-title',
   triggerHook: 0

  })
  .setPin('.about-title')

  .addTo(controller);
}

splitScroll();



// -----------------------------------------navbar small----------------

function toggle_div(){
  var element = document.getElementById('sidebar');
  element.classList.toggle('active')
};


//--------------------------------------------vertical swiper----------------------------------------


  var swiper = new Swiper('.swi1', {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

// ------------------------------stats esummit page----------------------------------------------

  // number count for stats, using jQuery animate

$('.counting').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 3000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});




  //-----------------------------testimonial autoplay------------------------------------------------

  var swiper = new Swiper('.swi2', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.pagination2',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
