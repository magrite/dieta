var Backbone = require("backbone");
var $ = require('jquery');
var RecipesController = require('./controllers/collections/Recipes');
// var RecipeView = require('./recipeView');
// var Recipes = require('./recipeCollection');

var Router = Backbone.Router.extend({
    routes: {
        "": "recipe"
    },

    recipe: function(){
        RecipesController.init();
        // var view = new RecipeView();
        // var collection = new Recipes();
        //
        // collection.fetch();
        // console.log(collection);
    }
});

module.exports = Router;
