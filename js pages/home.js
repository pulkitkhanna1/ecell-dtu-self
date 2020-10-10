



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



  //-----------------------------testimonial large autoplay------------------------------------------------//
  var swiper = new Swiper('.swi3', {
    slidesPerView: 'auto',

    centeredSlides: true,
    spaceBetween: 0,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //-----------------------------testimonial small devices autoplay------------------------------------------------//

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
// -------------------------------CONTACT FORM---------------------------------------------------------------------//

    function validateName() {
            var name = document.getElementById('conname').value;
            if(name.length == 0) {
              alert("Name can't be blank") ;
              return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct and full name") ;//Validation Message
              return false;
            }
            return true;
          }

          function validatePhone() {
            var phone = document.getElementById('conphone').value;
            if(phone.length == 0) {
              alert("Phone number can't be blank") ;//Validation Message
              return false;
            }

            if(!phone.match(/^[0]?[789]\d{9}$/)) {
             alert("Please enter a correct phone number") ;//Validation Message
             return false;
           }

           return true;

         }

         function validateEmail () {

          var email = document.getElementById('conmail').value;
          if(email.length == 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }


        function validateForm() {
          if (!validateName() || !validatePhone() || !validateEmail()) {


            return false;
          }
          else {
            submitted=true;
            alert("Form submitted");//Validation Message
            return true;
          }
        }

// =======================sponsor strip===========================
        var swiper = new Swiper('.swiper-container', {
          loop: true,
          spaceBetween: 0,
          fadeEffect: {
            crossFade: true
          },
          autoplay: {
            delay: 800,
            disableOnInteraction: false,
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            // when window width is >= 640px
            780: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }
        });

