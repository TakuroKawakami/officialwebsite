$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });

});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
  $('a[href^="#"]').on('click', function(){
    $('.menu').removeClass('is-active');
  });

});
