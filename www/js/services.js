angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Pets', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Cats', description: 'Furry little creatures. Obsessed with plotting assassination, but never following through on it.' },
    { id: 1, title: 'Dogs', description: 'Lovable. Loyal almost to a fault. Smarter than they let on.' },
    { id: 2, title: 'Turtles', description: 'Everyone likes turtles.' },
    { id: 3, title: 'Sharks', description: 'An advanced pet. Needs millions of gallons of salt water. Will happily eat you.' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
})
.factory('Photo', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var photoData = '';

  return {
    set: function(data) {
      photoData = data;
    },
    get: function() {
        return photoData;
    },
    generate: function(id) {
        return '<img alt="preview" src="'+"data:image/jpeg;base64," + photoData+'" id="previewImage" width="100%"/>';
    }
  }
})
.factory('UserLocation', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var location = {
      lat: null,
      lng: null
  };

  return {
    set: function(loc) {
        location = loc
    },
    get: function() {
        return location;
    }
  }
});