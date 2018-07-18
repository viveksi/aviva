var app = angular.module("AvivaApp",['ngRoute','ui.bootstrap']);

app.controller("MainController", function($scope){
    
    
})

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('homeController', function($scope) {
    debugger;
});

app.config(function($routeProvider, $locationProvider){
    'ng-inject';
    debugger;
    $routeProvider.when("/home", {
        templateUrl : "html/home.html",
        controller: 'homeController'
    })
    $routeProvider.when("/about", {
        templateUrl : "html/about.html",
        controller: 'aboutController'
    })
    .otherwise({
        redirectTo: function() {
          return '/home' + location.search;
        }
    })

    $locationProvider.hashPrefix('');
});


