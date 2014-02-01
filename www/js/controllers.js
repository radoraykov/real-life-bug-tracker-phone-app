angular.module('starter.controllers', [])

.controller('WelcomeCtrl', function($scope, UserLocation, $location) {

    $scope.fbLogin = function() {
        alert("facebook login");
    }

    $scope.deviceInfo = function() {
        alert('device info');
        console.log(device);
    }

    $scope.getGeoLocation = function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            UserLocation.set({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
            $location.path('pick-image-source')
            // position.coords.accuracy
            // position.timestamp
        }, function(error) {
            alert('code: ' + error.code + '\n message: ' + error.message);
        });
    }
})

.controller('PickImageSourceCtrl', function($scope, Photo, $location) {
    var cameraOptions = {
        quality : 75,
        destinationType : Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 800,
        targetHeight: 600,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $scope.useCamera = function() {
        cameraOptions.sourceType = Camera.PictureSourceType.CAMERA;
        navigator.camera.getPicture(function(data) {
            Photo.set(data)
        }, function(err) {
            alert(err);
        }, cameraOptions );
        $location.path('/select-category');
    };

    $scope.useFolder = function() {
        cameraOptions.sourceType = Camera.PictureSourceType.PHOTOLIBRARY,
        navigator.camera.getPicture(function(data) {
            Photo.set(data)
        }, function(err) {
            alert(err);
        }, cameraOptions );
        $location.path('/select-category');
    };

})

.controller('SelectCategoryCtrl', function($scope) {

})

.controller('NewReportPreviewCtrl', function($scope, Photo, UserLocation) {
    $scope.photo = Photo.generate()
    var loc = UserLocation.get()
    console.log(loc)

    //42.693413, &quot;lng&quot;: 23.322601
    $scope.map = {
        center: {
            latitude: loc.lat,
            longitude: loc.lng
        },
        options: {
            disableDoubleClickZoom: true,
            disableDefaultUI: true,
            streetViewControl: false,
            scrollwheel: false,
            draggable: false,
            zoomControl: false
        },
        zoom: 13
    };

})

.controller('ReportsListCtrl', function($scope) {

})

.controller('ReportReviewCtrl', function($scope) {

})

.controller('ReportSendCtrl', function($scope) {

});
