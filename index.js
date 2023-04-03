$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });

    $(window).scroll(function(){

        if($(window).scrollTop() >0) {
            $('header').removeClass('transparent');
            $('header').addClass('scrolled');
       }
       else {
           $('header').removeClass('scrolled');
           $('header').addClass('transparent');
       }

        // $('header').toggleClass('scrolled', $(this).scrollTop() > 0);
    });
}); 