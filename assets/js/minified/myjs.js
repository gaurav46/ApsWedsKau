$(document).ready(function(){function t(t){for(var a=0;a<t.length;a++)o=new Image,o.src="/assets/images/bg-images/"+t[a]}function a(){var a=["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"];t(a);var o=1;setInterval(function(){o==a.length&&(o=0);var t=a[o];$(".cover-image").css({"background-image":"url('/assets/images/bg-images/"+t+"')"}),o++},7e3)}var o;$(window).scroll(function(){$(".hideme").each(function(t){var a=$(this).offset().top+$(this).outerHeight(),o=$(window).scrollTop()+$(window).height();o>a/10*5&&$(this).animate({opacity:"1"},700)})}),$(".navbar-collapse a").click(function(){$(".navbar-collapse").collapse("hide")}),$("a").on("click",function(t){if(""!==this.hash){t.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top},800,function(){window.location.hash=a})}}),$.preloadImages=function(){for(var t=0;t<arguments.length;t++)$("").attr("src","/assets/images/bg-images/"+arguments[t]+"'")},$("#cover-buttons").css({display:"block"}),$("#cover-buttons").addClass("animated flipInX"),window.onload=a();var e=function(){var t=document.querySelectorAll(".pswp")[0],a=[{src:"https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg",w:964,h:1024},{src:"https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg",w:1024,h:683}],o={history:!1,focus:!1,showAnimationDuration:0,hideAnimationDuration:0},e=new PhotoSwipe(t,PhotoSwipeUI_Default,a,o);e.init()};e(),document.getElementById("gallery-btn").onclick=e});