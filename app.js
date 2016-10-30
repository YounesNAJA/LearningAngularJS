var myApp = angular.module('myApp', ['ngMessages']);
myApp.controller('mainController', ["$scope", "$timeout", function ($scope, $timeout) {
    $scope.name = "Younes";
    $scope.username = ""
    $timeout(function(){
        $scope.name = "NAJA";
    }, 3000);
}]);