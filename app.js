var myApp = angular.module('myApp', ['ngMessages']);
myApp.controller('mainController', ["$scope", "$timeout", "$filter", "$log", function ($scope, $timeout, $filter, $log) {
    $scope.name = "Younes";
    $scope.username = "";
    $scope.lowerusername = function() {
        return $filter('lowercase')($scope.username);
    };
    
    $timeout(function(){
        $scope.name = "NAJA";
    }, 3000);
    
    $scope.$watch("name",function(newV, oldV){
        $log.info("Old: " + oldV);
        $log.info("New: " + newV);
    });
}]);