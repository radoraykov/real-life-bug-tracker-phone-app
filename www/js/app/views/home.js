define(function(require) {

    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        homeTemplate = require('text!templates/home.html'),

        template = _.template(homeTemplate);

    return Backbone.View.extend({
        panel: '#home',

        initialize: function () {
            //this.render();
        },

        render: function () {
            $.ui.updatePanel(this.panel, template());

            return this;
        },

        load: function() {
            this.render();
        }
    });

});