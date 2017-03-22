angular.module('principal').controller('PrincipalCtrl', function ($scope, $http, $state, CadastroLoginService) {

    $scope.doFavorites = function () {
        $state.go('app.favorites');

    };


});


