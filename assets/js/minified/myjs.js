$(document).ready(function(){function o(o){for(var a=0;a<o.length;a++)n=new Image,n.src="assets/images/bg-images/"+o[a]}function a(){var a=["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"];o(a);var n=1;setInterval(function(){n==a.length&&(n=0);var o=a[n];$(".cover-image").css({"background-image":"url('assets/images/bg-images/"+o+"')"}),n++},7e3)}var n;$(window).scroll(function(){$(".hideme").each(function(o){var a=$(this).offset().top+$(this).outerHeight(),n=$(window).scrollTop()+$(window).height();n>a/10*5&&$(this).animate({opacity:"1"},700)})}),$(".navbar-collapse a").click(function(){$(".navbar-collapse").collapse("hide")}),$("a").on("click",function(o){if(""!==this.hash){o.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top},800,function(){window.location.hash=a})}}),$.preloadImages=function(){for(var o=0;o<arguments.length;o++)$("").attr("src","../assets/images/bg-images/"+arguments[o]+"'")},$("#cover-buttons").css({display:"block"}),$("#cover-buttons").addClass("animated flipInX"),window.onload=a(),$("#bg-loop-btn2").click(function(){bg_loop.paused?bg_loop.play():bg_loop.pause()}),$("#bg-loop-btn").click(function(){bg_loop.paused?bg_loop.play():bg_loop.pause()})});