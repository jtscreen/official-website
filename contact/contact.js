$(".drop").click(function(){
  $(".dropdown").toggle("fast");
});
$(".drop").mouseleave(function(){
  $(".dropdown").slideUp("fast");
});

$("#hamburger").click(function(){
  var text = $(".burger-symbol").text();

  $("#hamburger-links").toggle("fast");
  if(text == "X"){
    $(".burger-symbol").text("≡");
  }else{
    $(".burger-symbol").text("X");
  }

  if($(window).width()<920){
    $(".navName").toggle();
  }else if ($(window).width() > 920) {
    $(".navName").show();
  }
})