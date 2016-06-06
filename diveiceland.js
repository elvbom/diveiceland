$(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) { //scrollar upp
        if (currentTop > (0.10*$(window).height())) {
            var p = $("#menu").css("background-color", "rgba(54, 128, 191, 1)");
            var p = $("#menu ul").css("border-bottom", "none");
            // var p = $("#menu ul li").css("font-size", "0.8em");
            var p = $("#menu ul li").css("padding", "1% 2% 1% 2%");

        } else {
            var p = $("#menu").css("background-color", "rgba(120, 120, 120, 0)");
            var p = $("#menu ul").css("border-bottom", "solid white 1px");
            var p = $("#menu ul li").css("padding", "2%");

        }
    } else { //scrollar ner
        if (currentTop > (0.10*$(window).height())) {
            var p = $("#menu").css("background-color", "rgba(54, 128, 191, 1)");
            var p = $("#menu ul").css("border-bottom", "none");
            // var p = $("#menu ul li").css("font-size", "0.8em");
            var p = $("#menu ul li").css("padding", "1% 2% 1% 2%");

        } else if (currentTop > (0.20*$(window).height())) {
        }
    } 
    this.previousTop = currentTop;
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


$(function() {
    $("#pagewrapper").bind('mousemove', function(e){
        $(this).css({backgroundPosition: (-0.02)*(e.pageX) + 'px'});
    });      
});