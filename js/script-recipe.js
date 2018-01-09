$(document).ready( function(){

  //ocultar boton menu (ETAPA 1)
  $(".js-menu").hide();

  //ETAPA 7
  console.log("Listo :-)");

  //ETAPA 10
  $(".js-back").click(function() {
    $("#back").attr("href", "index.html")
  });

});

// ETAPA 8 y ETAPA 9 navegacion con pestañas/boton active
$(".js-show-make").click(function() {
  $("#pestañas").addClass("make");
  $(".js-show-make").addClass("active");
  $(".js-show-recipe").removeClass("active");
});

$(".js-show-recipe").click(function() {
  $("#pestañas").removeClass("make");
  $(".js-show-make").removeClass("active");
  $(".js-show-recipe").addClass("active");
});


