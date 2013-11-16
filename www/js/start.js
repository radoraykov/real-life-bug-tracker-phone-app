require.config({
    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        templates: '../../templates',
        extensions: '../extensions'
    },

    shim: {
        'backbone': {
            deps: ['appframework/appframework', 'underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require([
    'backbone',

    'app/utils',
    'app/router'
],

function(Backbone, Utils, Router) {
    $(function() {
        function onDeviceReady() {
            $.app.userId = (!_.isUndefined(window.device)) ? device.model + '-' + device.platform + '-' + device.uuid : 'DesktopBrowser';

            Utils.initialize(function() {
                Router.initialize();
            });
        }

        if (navigator.userAgent.match(/(iPad|iPhone|Android)/)) {
            document.addEventListener('deviceready', onDeviceReady, false);
        } else {
            onDeviceReady();
        }
    });
});