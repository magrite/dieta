var $ = require('jquery');
var Backbone = require("backbone");
var RecipesView = require('./../../views/Recipes');


var RecipesController = {
    init: function(){
        var recipesView = new RecipesView();
        recipesView.render();
    }
};

module.exports = RecipesController;
