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
        .when("/second/:num", {
            templateUrl: "pages/second.html",
            controller: "secondController"
        })
});

myApp.service('myService', function () {
    var self = this;
    this.name = "Younes";
    this.nameLength = function () {
        return this.name.length;
    };
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

myApp.controller('mainController', ["$scope", "$log", "myService",
function ($scope, $log, myService) {
        $scope.myVar = "Main";
        $scope.name = myService.name;
        $scope.nameL = myService.nameLength();
        $log.log($scope.name + " " + $scope.nameL);

        $scope.$watch("name", function () {
            myService.name = $scope.name;
        });
}]);

myApp.controller('secondController', ["$scope", "$routeParams", "myService", "$log",
function ($scope, $routeParams, myService, $log) {
        $scope.myVar = "Second";
        $scope.num = $routeParams.num || 1;

        $scope.name = myService.name;
        $scope.nameL = myService.nameLength();
        $log.log($scope.name + " " + $scope.nameL);

        $scope.$watch("name", function () {
            myService.name = $scope.name;
        });
}]);