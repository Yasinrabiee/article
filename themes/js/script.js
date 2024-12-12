$(window).scroll(function() {
  if($(this).scrollTop() > 300)
    $(`.btn-top`).fadeIn();
  else
    $(`.btn-top`).fadeOut();
});

$(`.btn-top`).click(function() {
  $(`html,body`).animate({
    scrollTop: 0
  },1000);
});
