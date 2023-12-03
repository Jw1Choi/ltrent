
$(function(){
	
    //	$(window).on('scroll',function(){
    //		
    //		var $scrollTop_location = $('.pt2').offset().top
    //		var $scrollTop = $(window).scrollTop();
    //
    //		if($scrollTop > $scrollTop_location){
    //			
    //		setInterval(function() {
    //		  doFlip(3);
    //		}, 10000);
    //
    //		function doFlip(numberIndex) {
    //		  
    //		  var currentNumberElement = $(".number:eq(" + numberIndex + ")");
    //		  
    //		  var currentNumber = Number(currentNumberElement.attr("data-number"));    
    //
    //		  currentNumber--;
    //		  
    //		  if (currentNumber < 0) {
    //			currentNumber = 9;
    //			
    //			if (numberIndex > 0) {
    //			  doFlip(--numberIndex);
    //			}
    //		  } 
    //		  
    //		  currentNumberElement.addClass("flip");
    //		  
    //		  setTimeout(function() {
    //			currentNumberElement.attr("data-number", currentNumber);
    //			
    //			currentNumberElement.removeClass("flip");
    //		  }, 1000);
    //		}
    //		
    //		}else{}
    //	});
        
    
        var isVisible = false;
    
        $(window).on('scroll',function() {
    
            if (checkVisible($('#db_wrap'))&&!isVisible) {
    
            setInterval(function() {
              doFlip(3);
            }, 18000);
    
            function doFlip(numberIndex) {
              
              var currentNumberElement = $(".number:eq(" + numberIndex + ")");
              
              var currentNumber = Number(currentNumberElement.attr("data-number"));    
    
              currentNumber--;
              
              if (currentNumber < 0) {
                currentNumber = 9;
                
                if (numberIndex > 0) {
                  doFlip(--numberIndex);
                }
              } 
              
              currentNumberElement.addClass("flip");
              
              setTimeout(function() {
                currentNumberElement.attr("data-number", currentNumber);
                
                currentNumberElement.removeClass("flip");
              }, 1000);
            }
    
                isVisible=true;
            }
    
        });
    
        function checkVisible( elm, eval ) {
            eval = eval || "object visible";
            var viewportHeight = $(window).height(), // Viewport Height
                scrolltop = $(window).scrollTop(), // Scroll Top
                y = $(elm).offset().top,
                elementHeight = $(elm).height();   
            
            if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
            if (eval == "above") return ((y < (viewportHeight + scrolltop)));
        }
    
    });