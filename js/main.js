$(function () {
  $('.slider__inner').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    // autoplay: true,
  });
  $('#collapse__accordion').accordion({
    animate: false,
    collapsible: true,
    active: true,
  });

  (function($) {

    var tabs =  $(".tabs li a");
    
    tabs.click(function() {
      var content = this.hash.replace('/','');
      tabs.removeClass("active");
      $(this).addClass("active");
      $("#content").find('p').hide();
      $(content).fadeIn(200);
    });
  
  })(jQuery);

});