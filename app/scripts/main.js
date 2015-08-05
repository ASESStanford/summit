$(document).ready(function($) {

  var width = $(document).width();

  var makeSlideshow = function(selector) {
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
      prevtext      : ' '
    });
  };

  makeSlideshow($('#speakers'));
  makeSlideshow($('#activities'));
  
});
