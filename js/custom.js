$(function(){
    // hide
$("#hide").click(function(){
$(".boxtwo").hide();
});
// hide

// show
$("#show").click(function(){
    $(".boxtwo").show();
    });
// show


// hide?show both
$("#h_s").click(function(){
$(".boxtwo").toggle();
});
// hide?show both

$("#fade").click(function(){
$(".boxtwo").fadeOut(2000);
});

$("#fadein").click(function(){
    $(".boxtwo").fadeIn(2000);
});

$("#fadeboth").click(function(){
    $(".boxtwo").fadeToggle(2000);
});

$("#slideup").click(function(){
    $(".boxtwo").slideUp();
});

$("#slidedown").click(function(){
    $(".boxtwo").slideDown();
});

$("#slideboth").click(function(){
    $(".boxtwo").slideToggle();
});

$("#addclass").click(function(){
    $(".boxtwo").addClass("boxthree");
});

$("#removeclass").click(function(){
$(".boxtwo").removeClass("boxthree");
});

$("#both").click(function(){
    $(".boxtwo").toggleClass("boxthree");
    });




    $("#normalyslideup").click(function(){
        $("#answera").slideDown(1000);
    });


   

    $("#normalslideboth").click(function(){
        $("#answera").slideToggle(1000);
    });


    
});