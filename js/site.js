/*
$(document).ready(function() {
//Preloader
$(window).load(function() {
preloaderFadeOutTime = 500;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});
});*/

$(".read").click(function(){
  location.href="team.html";
})

$(".more").click(function(){
  location.href="about.html";
})

var images=new Array('img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('.home')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(1000,function(){
        setTimeout(doSlideshow,3000);
    });
}
/*
$(window).resize(function() {
    if( $(this).width() < 675 ) {
        // code

    }
});*/

if (matchMedia('only screen and (max-width: 675px)').matches) {
  $(".burger").click(function(){
  //  toggle(".nav");
 // $(".nav").css("background-color","black")
    $("nav").toggle();
    $(".main").toggle();
    $("div.burger").toggleClass("hide")
    $("footer").toggle();
  })

  $(".navlink").click(function(){
    $("nav").toggle();
    $(".main").show();
    $("div.burger").toggleClass("hide");
    $("footer").toggle();
  })
  // smartphone/iphone... maybe run some small-screen related dom scripting?
}
