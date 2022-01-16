$(document).ready(function(){
  $(".gnb h2").on("click", function(){
    $(".dep1").slideToggle();
  });
  $(".dep1").on("click", function(){
    $(".dep2 li").slideToggle();
  });
});

