var myApp = angular.module('myApp', ['ngMessages', 'ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/main.html",
            controller: "mainController"
        })
        .when("/second", {
            templateUrl: "pages/second.html",
            controller: "secondController"
        })
});

myApp.controller('baseController', ["$scope", "$timeout", "$filter", "$log", "$http", function ($scope, $timeout, $filter, $log, $http) {
    $scope.name = "Younes";
    $scope.username = "";
    $scope.lowerusername = function () {
        return $filter('lowercase')($scope.username);
    };
    $scope.characters = 6;

    $timeout(function () {
        $scope.name = "NAJA";
    }, 3000);

    $scope.$watch("name", function (newV, oldV) {
        $log.info("Old: " + oldV);
        $log.info("New: " + newV);
    });


    $http.get("https://jsonplaceholder.typicode.com/users")
        .success(function (result) {
            $scope.offers = result;
        })
        .error(function (data, status) {
            $log.debug(data);
        });
}]);

myApp.controller('mainController', ["$scope", function($scope){
    $scope.myVar = "Main";
}]);

myApp.controller('secondController', ["$scope", function($scope){
    $scope.myVar = "Second";
}]);