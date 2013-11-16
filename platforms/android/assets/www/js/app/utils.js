define(function(require) {

    'use strict';

    var _ = require('underscore');

    var Utils = {
        endpoint: '',
        apiEndpoint: '',

        initialize: function(done) {
            if (!this.isConnected()) return done();
            this.fetchApiEndpoint(done);
        },

        getApiEndpoint: function() {
            if (this.isConnected() && this.apiEndpoint) return this.apiEndpoint;
            else if (!this.apiEndpoint && this.isConnected()) this.fetchApiEndpoint();

            return false;
        },

        getPanelEl: function(panel) {
            return $($(panel).children().get(0));
        },

        fetchApiEndpoint: function(done) {
            done = done || function() {};
            if (!this.isConnected() || !this.endpoint) return done();

            var _this = this;
            $.ajax({
                url: _this.endpoint,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    if (data.api) _this.apiEndpoint = data.api;
                    done();
                },
                error: function() {
                    done();
                },
                timeout: 10000
            });
        },

        isConnected: function() {
            if (!_.isUndefined(navigator)) return false;
            var networkState = navigator.connection.type;
            return !(networkState == Connection.UNKNOWN || networkState == Connection.NONE);
        }
    };

    return Utils;
});