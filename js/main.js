//smoothscroll & back2top
$("a").on("click",function(b){if(""!==this.hash){b.preventDefault();var a=this.hash;$("html, body").animate({scrollTop:$(a).offset().top},800,function(){window.location.hash=a})}});var amountScrolled=300;$(window).scroll(function(){$(window).scrollTop()>amountScrolled?$("a.back-to-top").fadeIn("slow"):$("a.back-to-top").fadeOut("slow")});$("a.back-to-top").click(function(){$("html, body").animate({scrollTop:0},700);return!1});