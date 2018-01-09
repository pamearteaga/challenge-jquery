$(document).ready( function(){

  //ETAPA 7
  console.log("Listo :-)");

  //ocultar boton menu (ETAPA 1)
  $(".js-menu").hide();

});

// ETAPA 8 navegacion con pestañas
$(".js-show-make").click(function() {
  $("#pestañas").addClass("make");
});

$(".js-show-recipe").click(function() {
  $("#pestañas").removeClass("make");
});