$(document).ready( function(){

// ocultar flecha (ETAPA 1)
  $(".js-back").hide();

// funcion para imprimir "NUEVAS RECETAS" (ETAPA 2)
  function printNews(){
    $("#nuevas-recetas").append('NUEVAS RECETAS');
  };
  printNews();

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);

//para llamar a la funcion render activities
  renderActivities(activitiesArray);

}); // ready


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/

//ETAPA 3
var recipe = [];
function renderHighlightedRecipes(recipesArray) {
  for (var i in recipesArray) {
    if (recipesArray[i].highlighted == true) {
      recipe.push(recipesArray[i]);
    }
  }
  renderRecipe(recipe);
};


/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
//ETAPA 4
function renderRecipe(recipe) {
  for (var i in recipe){
    var titleRecipe = recipe[i].title;
    var authorName = recipe[i].source.name;
    var image = recipe[i].name;
    $(".list-recipes").append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + 
    titleRecipe + '</span><span class="metadata-recipe"><span class="author-recipe">' + authorName + 
    '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="img/recipes/320x350/' + image + '.jpg' + '"/></a>');
  };
};



/*
* Función que se encarga de pintar todas las actividades
*/
//ETAPA 5
function renderActivities(activitiesArray) {
  for (var i in activitiesArray){
    if (activitiesArray.length > 0) {
      $(".wrapper-message").hide();
    }
  }
  renderActivity(activitiesArray);
  console.log('Activities: ', activitiesArray);
};

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
//ETAPA 6
function renderActivity(activitiesArray) {
  for (var i in activitiesArray){
    var avatar = activitiesArray[i].userAvatar;
    var autor = activitiesArray[i].userName;
    var texto = activitiesArray[i].text;
    var receta = activitiesArray[i].recipeName;
    var locacion = activitiesArray[i].place;
    var imagenRec = activitiesArray[i].image;
    $(".list-activities").append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="' + avatar + '" class="image-avatar"></span>' + 
      '<span class="meta"><span class="author">' + autor + '</span> made <span class="recipe">' + receta + '</span>' + 
      ': ' + texto + '<span class="location">&mdash;' + locacion + '</span></span></span>' + 
      '<div class="bg-image" style="background-image: url(' + imagenRec + ');"></div></a>');
  };
};


