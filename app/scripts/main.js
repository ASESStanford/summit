var makeSlideshow = function(selector, width) {
  selector.bjqs({
    animtype      : 'slide',
    height        : '100vh',
    width         : width,
    responsive    : true,
    showmarkers   : false, 
    keyboardnav   : true, 
    hoverpause    : true,
    automatic     : false,
    nexttext      : '&nbsp;', 
    prevtext      : ' ', 
    usecaptions   : false,
    responsive    : true,
    animduration  : 300
  });
};

$(document).ready(function($) {

  var width = $(document).width();

  makeSlideshow($('#speakers'), width);
  makeSlideshow($('#activities'), width);

  $(window).resize(function() {
    var width = $(window).width();
    $('.slideshow').each(function() {
      var numSlides = $(this).find('li').length; 
      $(this).css('max-width', width + 'px');
      $(this).find('li.speaker.bjqs-slide').css('width', width + 'px');
      $(this).find('.bjqs').css('width', width + 'px');
      $(this).find('div.bjqs-wrapper').css('width', width + 'px');
      $(this).find('ul.bjqs').css({
        width: (width * (numSlides))  + 'px'
      });
      $(this).find('ul li').css('width', width + 'px');
    });    
  });
  
});

