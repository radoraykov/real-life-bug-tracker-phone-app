define(function(require) {

    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone');

    var Views = {
        'home': require('app/views/home')
    };

    $.app.ui.home = new Views.home();

    var Router = Backbone.Router.extend({
        routes: {
            '': 'home',
            'home': 'home'
        },

        loadUi: function(view) {
            if (_(Views).has(view)) {
                if (!_($.app.ui).has(view)) {
                    $.app.ui[view] = new Views[view]();
                }

                $.app.ui[view].load();

                return $.app.ui[view];
            }

            return false;
        },

        home: function() {
            this.loadUi('home');
        }
    });

    var initialize = function(){
        $.app.router = new Router();
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});