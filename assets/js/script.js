
$(document).ready(function() {
    // communities section box slide animation
    $('.box').click(function() {
        $('p').slideToggle();
    })
    $(window).scroll(function() {
        if ($(document).scrollTop() > 70) {
            $('.nav').addClass('affix');
        } else {
            $('.nav').removeClass('affix');
        }
    });
    // navbar sticky end
    $('#bar-icon').click(function(){
        $('.main-menu').toggleClass('show');
    });
    //   $(".black-overlay").toggleClass('active');
       // overlay
       $("#bar-icon").click(function(){
        $(".black-overlay").toggleClass("d-none");
      });
    //   
    $(".black-overlay").click(function(){
    $("ul").removeClass("show");
    $(this).addClass('d-none');
    });  
      //   
    $(".black-overlay").click(function(){
    $("ul").removeClass("show");
    $(this).addClass('d-none');
    });
      //   
      $(".body-wrapper").click(function(){
        $(".sub-menu-list").addClass("d-none");

        }); 
	// navbar end
});