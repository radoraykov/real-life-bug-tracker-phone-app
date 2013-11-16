define(function(require) {

    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone'),
        GeoLocation = require('extensions/GeoLocation'),
        homeTemplate = require('text!templates/home.html'),

        template = _.template(homeTemplate);

    return Backbone.View.extend({
        panel: '#home',

        initialize: function () {
            //this.render();
            /*** Load GeoLocation ***/
            var geoLocation = new GeoLocation();
            geoLocation.update();
            console.log(geoLocation.get('coords'));
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