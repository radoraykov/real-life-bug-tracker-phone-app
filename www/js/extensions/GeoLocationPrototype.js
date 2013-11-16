google.maps.event.addDomListener(window, 'load', function() {
	var geoLocationPrototype = new GeoLocationPrototype('geoLocation');

	// wait for PhoneGap to load
    navigator.geolocation.getCurrentPosition(function(position) {
    	geoLocationPrototype.updateLocation(position);
    	geoLocationPrototype.loadGoogleMap();
    }, function() { 
    	GeoLocationPrototype.getLocationError();
    });
});

var GeoLocationPrototype = function(elementId) {
	this.coords = {};
	this.latitude = 0;
	this.longitude = 0;
	this.elementId = elementId;
	this.userHasGeoLocation = false;
};

GeoLocationPrototype.prototype.updateLocation = function(position) {
	this.userHasGeoLocation = true;

	this.coords = position.coords;
	this.latitude = position.coords.latitude;
	this.longitude = position.coords.longitude;
};

GeoLocationPrototype.prototype.getLocationError = function() {
	alert('Нашата апликация има нужда от включен Интернет и GPS');
}; 

GeoLocationPrototype.prototype.loadGoogleMap = function() {
	if (this.userHasGeoLocation) {
		//var myLocation = new google.maps.LatLng(this.latitude, this.longitude);
		var myLocation = new google.maps.LatLng(-33.8665433,151.1956316);

		var map = new google.maps.Map(document.getElementById('geoLocation'), {
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			center: myLocation,
			zoom: 15
    	}); 

		var request = {
    		location: myLocation,
    		radius: '500',
    		types: ['store']
  		};

    	var service = new google.maps.places.PlacesService(map); 
		service.nearbySearch(request, function(results, status) {
			 if (status == google.maps.places.PlacesServiceStatus.OK) {
    			for (var i = 0; i < results.length; i++) {
      				var place = results[i];

      				var placeLoc = place.geometry.location;
    				var marker = new google.maps.Marker({
						map: map,
						position: place.geometry.location
    				}); 
    			}
  			}
		});

	} else {
		this.getLocationError();
	}
};