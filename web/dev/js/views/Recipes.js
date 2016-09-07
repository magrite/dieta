var Backbone = require("backbone");
var $ = require('jquery');
var _ = require('underscore');

var RecipesView = Backbone.View.extend({
    el: '#container',

    template: _.template("Hello <%= name %>!"),

    render: function() {
        this.$el.html(this.template({name: "Dupa"}));
    },
});

module.exports = RecipesView;
