$(document).ready(function() {
  $(".clickable-polar-bear").click(function() {
    $("#apex-hidden").toggle();
    $("#apex-showing").toggle();
  });

  $(".clickable-walrus").click(function() {
    $("#secondary-hidden").toggle();
    $("#secondary-showing").toggle();
  });

  $(".clickable-clams").click(function() {
    $("#tertiary-hidden").toggle();
    $("#tertiary-showing").toggle();
  });


});
