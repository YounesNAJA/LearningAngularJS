var myApp = angular.module('myApp', ['ngMessages']);
myApp.controller('mainController', ["$scope", "$timeout", "$filter", function ($scope, $timeout, $filter) {
    $scope.name = "Younes";
    $scope.username = "";
    $scope.lowerusername = function() {
        return $filter('lowercase')($scope.username);
    };
    
    $timeout(function(){
        $scope.name = "NAJA";
    }, 3000);
}]);