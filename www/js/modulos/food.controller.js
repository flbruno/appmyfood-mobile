angular.module('food', []).controller('FoodCtr', function ($scope, $http) {
    var URL_BASE = "http://localhost:8088";
    $http({
        method: 'GET',
        url: URL_BASE + '/cadastro/food',
        contentType: 'application/json; charset=utf-8'

    }).then(function success(response) {

        $scope.returno = response.data;
    }, function error(response) {
        console.log(response);
    });
});
