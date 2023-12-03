$(function() {
  
    
    
    function upslide() {
        var h = $('#ticker').find('tbody > tr').outerHeight(); 
        
        var item = $('#ticker').find('tbody > tr:first-child'); 
        var itemClone = item.clone(); 
        $('#ticker > tbody').append(itemClone);
        
        $('#ticker_wrap').css({'top':0}).animate({'top': '-' + h +'px'}, function(){ 
            $('#ticker_wrap').css({'top': 0}); 
            item.remove(); 
        }); 
    }
    setInterval(function(){upslide()}, 1700);

})