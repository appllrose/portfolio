$(function(){
  function skills_opt(){
    $(".skill_opt>div").each(function(i){
      var $this = $(this),
        location = $this.data('width');
      $this.css({'width':location+'%'}); 
    });
  }
  if($().appear){
    $('.skill_opt').appear().on('appear',function(){
      skills_opt();
    });
  } else{
    skills_opt();
  }
});