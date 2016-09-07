var Backbone = require("backbone");
var $ = require('jquery');
var _ = require('underscore');
var Router = require('./router');

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

new Router();
Backbone.history.start();




var template = _.template("Hello {{ name }}!");


console.log(template({name: "Mustache"}));
