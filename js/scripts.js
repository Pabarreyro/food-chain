$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").toggle();
    $("#initially-showing").toggle();
  });

  $(".clickable2").click(function() {
    $("#initially-hidden2").slideToggle("slow");
    // $("#initially-hidden2").fadeOut("slow");
  });

});
