// JavaScript Document
$(document).ready(function () {


    //stick in the fixed 100% height behind the navbar but don't wrap it
    $('#slide-nav.navbar .container').append($('<div id="navbar-height-col"></div>'));

    // Enter your ids or classes
    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var menuwidth = '100%'; // the menu inside the slide menu itself
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';


    $("#slide-nav").on("click", toggler, function (e) {

        var selected = $(this).hasClass('slide-active');

        $('#slidemenu').stop().animate({
            left: selected ? menuneg : '0px'
        },0); //animate set 0 second

        $('#navbar-height-col').stop().animate({
            left: selected ? slideneg : '0px'
        },0);//animate set 0 second

        $(pagewrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        },0);//animate set 0 second

        $(navigationwrapper).stop().animate({
            left: selected ? '0px' : slidewidth
        },0);//animate set 0 second


        $(this).toggleClass('slide-active', !selected);
        $('#slidemenu').toggleClass('slide-active');


        $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');


    });


    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';


    $(window).on("resize", function () {

        if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
            $(selected).removeClass('slide-active');
        }


    });

    //opacity Mask
    // $(function(){ 
    //     $(".dropdown-toggle").click(function(){
    //         $(".opacityMask").toggle();
    //     });
    //     $(".opacityMask").click(function(){
    //         $(".opacityMask").css({"display":"none"});
    //     });
    // }); 
    // opacity Mask End
});


