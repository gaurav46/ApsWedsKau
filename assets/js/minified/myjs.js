$(document).ready(function(){function a(a){for(var o=0;o<a.length;o++)t=new Image,t.src="../assets/images/bg-images/"+a[o]}function o(){var o=["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg"];a(o);var t=1;setInterval(function(){t==o.length&&(t=0);var a=o[t];$(".cover-image").css({"background-image":"url('../assets/images/bg-images/"+a+"')"}),t++},7e3)}var t;$(window).scroll(function(){$(".hideme").each(function(a){var o=$(this).offset().top+$(this).outerHeight(),t=$(window).scrollTop()+$(window).height();t>o/10*5&&$(this).animate({opacity:"1"},700)})}),$(".navbar-collapse a").click(function(){$(".navbar-collapse").collapse("hide")}),$("a").on("click",function(a){if(""!==this.hash){a.preventDefault();var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},800,function(){window.location.hash=o})}}),$.preloadImages=function(){for(var a=0;a<arguments.length;a++)$("").attr("src","../assets/images/bg-images/"+arguments[a]+"'")},$("#cover-buttons").css({display:"block"}),$("#cover-buttons").addClass("animated flipInX"),window.onload=o()});