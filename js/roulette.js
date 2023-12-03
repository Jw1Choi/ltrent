

$(document).ready(function() {
    inter = setInterval(function() {
       var blink = document.getElementById("light");
       blink.style.visibility = blink.style.visibility == "" ? "hidden" : ""
   }, 500);
})	



   $(function(){
   
       $('.click_btn ,.click_btn2').click(function(){
           
               $('.roulette_inner').animateRotate(678, 2000, -40, '');	
               clearInterval(inter);
               document.getElementById("light").style.visibility = "visible";
       
       });
       
       
       $.fn.animateRotate = function(angle, duration, timeout, easing){
               var elem = $(this);
               var checkIE8 = function(){
                   if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
                       var ieversion=new Number(RegExp.$1)
                       if (ieversion ==8)
                           return true;
                   }
               }
               var checkIE7 = function(){
                   if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
                       var ieversion=new Number(RegExp.$1)
                       if (ieversion ==7)
                           return true;
                   }
               }

               var rotation = function(){
                   $("#spin-img").rotate({
                       angle:angle,
                       animateTo:1035 + 1080,
                       duration: duration,
                       easing: easing,
                       complete: function(){
                           alert("A");
                       }
                   });
               }

               if(checkIE8()){
                   rotation();
                   setTimeout(function(){
                       elem.animateRotate2(668, 1800, -12, '');
                   }, duration);
               }
               else if(checkIE7()){
                   rotation();
                   setTimeout(function(){
                       elem.animateRotate2(668, 1800, -12, '');
                   }, duration);
               }
               else{
                   elem.animate(
                       { deg: angle },
                       {
                           duration: duration,
                           easing: easing,
                           step: function(now){
                               var ms  = Math.floor(now/90) % 3;
                               elem.css({
                                   '-moz-transform':'rotate('+now+'deg)',
                                   '-webkit-transform':'rotate('+now+'deg)',
                                   '-o-transform':'rotate('+now+'deg)',
                                   '-ms-transform':'rotate('+now+'deg)',
                                   'transform':'rotate('+now+'deg)'
                               });
                           },
                           complete: function(){
                               setTimeout(function(){
                                   elem.animateRotate2(618, 1800, -12, '');
                               }, timeout);
                           }
                   });
               }
       };

       $.fn.animateRotate2 = function(angle, duration, timeout, easing){
               var elem = $(this);

               var checkIE8 = function(){
                   if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
                       var ieversion=new Number(RegExp.$1)
                       if (ieversion ==8)
                           return true;
                   }
               }

               var checkIE7 = function(){
                   if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
                       var ieversion=new Number(RegExp.$1)
                       if (ieversion ==7)
                           return true;
                   }
               }

               var rotation = function(){
                   if(timeout > 0) {
                       var angle1= angle+360 ;
                   }else{
                       var angle1= angle-360 ;
                   }


                   $('.roulette_inner').rotate({
                       angle:angle,
                       animateTo:angle1,
                       duration: duration,
                       easing: easing,
                       complete: function(){
                           alert("A");
                       }
                   });
               }

               if(checkIE8()){
                   rotation();
                   setTimeout(function(){
                       elem.animateRotate3(668, 2000, 500, '');
                   }, duration);
               }
               else if(checkIE7()){
                   rotation();
                   setTimeout(function(){
                       elem.animateRotate3(668, 2000, 500, '');
                   }, duration);
               }
               else{
                   elem.animate(
                       { deg: angle },
                       {
                           duration: duration,
                           easing: easing,
                           step: function(now){
                               var ms  = Math.floor(now/90) % 3;
                               elem.css({
                                   '-moz-transform':'rotate('+now+'deg)',
                                   '-webkit-transform':'rotate('+now+'deg)',
                                   '-o-transform':'rotate('+now+'deg)',
                                   '-ms-transform':'rotate('+now+'deg)',
                                   'transform':'rotate('+now+'deg)'
                               });
                           },
                           complete: function(){
                               setTimeout(function(){
                               
                                   elem.animateRotate3(675, 2000, 700, '');
                               }, timeout);
                           }
                   });
               }
       };


       $.fn.animateRotate3 = function(angle, duration, timeout, easing){
               var elem = $(this);

               var checkIE8 = function(){
                   if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
                       var ieversion=new Number(RegExp.$1)
                       if (ieversion ==8)
                           return true;
                   }
               }

               var checkIE7 = function(){
                   if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
                       var ieversion=new Number(RegExp.$1)
                       if (ieversion ==7)
                           return true;
                   }
               }

               var rotation = function(){
                   if(timeout > 0) {
                       var angle1= angle+360 ;
                   }else{
                       var angle1= angle-360 ;
                   }


                   $('.roulette_inner').rotate({
                       angle:angle,
                       animateTo:angle1,
                       duration: duration,
                       easing: easing,
                       complete: function(){
                           alert("A");
                       }
                   });
               }

               if(checkIE8()){
                   rotation();
                   setTimeout(function(){
                        openLayer();
                   }, duration);
               }
               else if(checkIE7()){
                   rotation();
                   setTimeout(function(){
                       if(timeout > 0) openLayer();
                   }, duration);
               }
               else{
                   elem.animate(
                       { deg: angle },
                       {
                           duration: duration,
                           easing: easing,
                           step: function(now){
                               var ms  = Math.floor(now/90) % 3;
                               elem.css({
                                   '-moz-transform':'rotate('+now+'deg)',
                                   '-webkit-transform':'rotate('+now+'deg)',
                                   '-o-transform':'rotate('+now+'deg)',
                                   '-ms-transform':'rotate('+now+'deg)',
                                   'transform':'rotate('+now+'deg)'
                               });
                           },
                           complete: function(){
                               setTimeout(function(){

                                   if(timeout > 0) openLayer();
                               }, timeout);
                           }
                   });
               }
       };

       function openLayer(){
           alert("축하합니다! 이벤트에 당첨되셨습니다!\n비교 견적 신청하고 혜택을 받으세요!");
           $('.roulette_inner').stop();
           $('.wrap_roulette').fadeOut()
           $('body').css('background-color', '#fff');;
           $(".apply_wrap").fadeIn();
       }

       
   })