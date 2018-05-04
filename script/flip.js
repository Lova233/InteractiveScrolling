$(document).ready(function() {
    
    var i=0;
    var prClass = 'faa-wrench animated';
    
    var animationCl=[
        'faa-ring animated','faa-shake animated','faa-bounce animated', 'faa-wrench animated'
    ]
    
$('.right').click(function(){
        i++;
        $(this).closest('.card').addClass('flipped');
     
          
        
        if (i>1){
            
        console.log("continue")
        i=1;

        $('.button2').toggleClass('nonActive')


        
        } else {
        console.log(" can not continue")

       }
        
        
    });
    
    
    $('.reset').click(function(){
        
        

    $('.card').toggleClass('flipped');
    $('.card').addClass('flip');
    $('.button2').addClass('nonActive');

        
        
    console.log(i,'sono ok')
        
    i=0;
        
 
});
    
     
    $('.check').click(function(){
        console.log('yes babe I am on fire');
     $('.button2').toggleClass('nonActive')
        });
    
    
    
    $("#lana").on('click', function(){
        
        console.log("lana ahyyyyy");
        
        
        $(this).toggleClass(prClass);
        var num = animationCl.indexOf(prClass)+1;
        if (num==4) num=0;
        $(this).toggleClass(animationCl[num]);
        prClass=animationCl[num];
        
        
        
    });
        
    
    
    
});