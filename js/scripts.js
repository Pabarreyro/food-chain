$(document).ready(function() {
  $(".clickable-polar-bear").click(function() {
    $("#apex-hidden").slideToggle("slow");
    $("#apex-hidden").toggleClass("showing");
  });

  $(".clickable-walrus").click(function() {
    $("#secondary-hidden").slideToggle("slow");
    $("#secondary-hidden").toggleClass("showing");
  });

  $(".clickable-clams").click(function() {
    $("#tertiary-hidden").slideToggle("slow");
    $("#tertiary-hidden").toggleClass("showing");
  });


});
