$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });

//     $(window).scroll(function(){

//         if($(window).scrollTop() >0) {
//             $('header').removeClass('transparent');
//             $('header').addClass('scrolled');
//             $('header>hr').removeClass("header-hr");
//        } else {
//            $('header').removeClass('scrolled');
//            $('header').addClass('transparent');
//            $('header>hr').addClass("header-hr");

//        }

//         // $('header').toggleClass('scrolled', $(this).scrollTop() > 0);
//     });
 }); 