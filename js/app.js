"use strict"

var addressModule = angular.module('AddressBook', []);

addressModule.controller('AddressController', function($scope) {
    $scope.employees = pawneeEmployees;
    $scope.order = 'lastName';
    $scope.sortCol = 'lastName';
    $scope.sortBy = function(sortCol) {
        if ($scope.sortCol == sortCol) {
            $scope.sortReverse = !$scope.sortReverse;
        } else {
            $scope.sortReverse = false;
        }
        $scope.sortCol = sortCol;
    }
});