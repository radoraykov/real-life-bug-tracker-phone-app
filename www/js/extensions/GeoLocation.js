define(function(require) {

    'use strict';

    var _ = require('underscore'),
        Backbone = require('backbone');

	return Backbone.Model.extend({
		defaults: {
			coords: {},
			latitude: '43.465187',
			longitude: '-80.522372'
		},

		update : function () {
			navigator.geolocation.getCurrentPosition(
				$.proxy(this.onSuccess, this), 
				$.proxy(this.onError, this), 
				{
					maximumAge: 3000, 
					timeout: 5000, 
					enableHighAccuracy: true
				}
			);
		}, 

		/**
		* Updated GPS location 
		*/
		onSuccess: function(position) {
			this.set("coords", position.coords);
			this.set("latitude", position.coords.latitude);
			this.set("longitude", position.coords.longitude);

			console.log(this.get('coords'));
		},

		onError: function(error) {
			alert('Не валидна Гео локация');
		},

		getCoords: function () {
			return this.get('coords');
		},

		getLatitude: function () {
			return this.get('latitude');
		},

		getLongitude: function () {
			return this.get('longitude');
		}
	});

});