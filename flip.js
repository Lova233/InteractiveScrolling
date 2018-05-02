$(document).ready(function() {
    
    var i=0;
    
    
    
$('.right').click(function(){
        i++;
        $(this).closest('.card').addClass('flipped');
     
          
        
        if (i>1){
            
        console.log("continue")
        i=0;

        $('.button2').toggleClass('nonActive')


        
        } else {
        console.log(" can not continue")

       }
        
        
    });
    
    
    $('.reset').click(function(){
        
        

    $('.card').toggleClass('flipped');
    $('.card').addClass('flip');
    $('.button2').addClass('nonActive')   
        
        
    console.log(i,'sono ok')
        
    i=0;
        
 
});
    
     
    $('.check').click(function(){
        console.log('yes babe I am on fire');
     $('.button2').toggleClass('nonActive')
        });
    
        
    
    
    
});