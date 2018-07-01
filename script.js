
var app = angular.module("myShoppingList", []); 

app.controller("myCtrl", function($scope) {

    //products in the shopping list
    $scope.products = ["Milk", "Bread", "Eggs"];

    // Add item to the shopping list
    $scope.addItem = function () {
        // handle errors in input text
        $scope.errortext = "";
        if (!$scope.addMe) {return;}        
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "The item is already in your shopping list.";
        }

        $scope.addMe = "";
    }

    // Remove this shopping list item
    $scope.removeItem = function (x) {
        $scope.errortext = "";    
        $scope.products.splice(x, 1);
    }

});
