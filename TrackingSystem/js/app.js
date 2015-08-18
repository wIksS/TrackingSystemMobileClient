'use strict';

var app = angular.module('TrackingSystemApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider)
    {
        $routeProvider.
            when('/', {
                templateUrl: 'views/partials/home.html',
                controller: 'LoginCtrl'
            }).
            when('/register', {
                templateUrl: 'views/partials/register.html',
                controller: 'RegisterCtrl'
            }).        
            when('/Content/Login', {
                templateUrl: 'home/home',
                controller: 'LoginCtrl'
            }).           
            when('/Content/register', {
                templateUrl: 'user/register',
                controller: 'RegisterCtrl'
            }).
            when('/pesho', {
                templateUrl: '../views/partials/home.html',
                controller: 'LoginCtrl'
            })          
    }])
    .constant('baseUrl', 'http://localhost:63810/');
