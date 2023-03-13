$(document).ready(function(){

    $(".buyer-margin").hide();
  
    $(".caret-drop").on('click',function(){
  
        $(this).next().slideToggle('slow');
  
        $(this).parent().toggleClass('active');
  
  
        $(".caret-drop").not(this).next().slideUp('slow');
  
        $(".caret-drop").not(this).parent().removeClass('active');         
    })
  })   