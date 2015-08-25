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
            when('/students/groups', {
                templateUrl: 'views/partials/students.html',
                controller: 'StudentGroupsCtrl'
            })        
    }])
    .constant('baseUrl', 'http://localhost:63810');
