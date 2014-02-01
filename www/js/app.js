// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array or 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngRoute', 'ngAnimate', 'starter.services', 'starter.controllers', 'google-maps'])

.config(function ($compileProvider){
  // Needed for routing to work
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/welcome', {
        templateUrl: 'templates/welcome.html',
        controller: 'WelcomeCtrl'
    });

    $routeProvider.when('/pick-image-source', {
        templateUrl: 'templates/pick-image-source.html',
        controller: 'PickImageSourceCtrl'
    });

    $routeProvider.when('/select-category', {
        templateUrl: 'templates/select-category.html',
        controller: 'SelectCategoryCtrl'
    });

    $routeProvider.when('/new-report-preview', {
        templateUrl: 'templates/new-report-preview.html',
        controller: 'NewReportPreviewCtrl'
    });

    $routeProvider.when('/reports', {
        templateUrl: 'templates/reports.html',
        controller: 'ReportsListCtrl'
    });

    $routeProvider.when('/report', {
        templateUrl: 'templates/report-preview.html',
        controller: 'ReportReviewCtrl'
    });

    $routeProvider.when('/report-send', {
        templateUrl: 'templates/report-send.html',
        controller: 'ReportSendCtrl'
    });

    $routeProvider.otherwise({
        redirectTo: '/welcome'
    });

});