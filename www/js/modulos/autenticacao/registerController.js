angular.module('autenticacao').controller('CadastroLoginCtrl', function ($scope, $http, $state, CadastroLoginService) {

    $scope.usuario = {};
    $scope.usuario.nameUser = "";
    $scope.usuario.emailUser = "";
    $scope.usuario.senhaUser = "";

    //Cadastrando o usuario no sistema
    $scope.registerUser = function () {
        CadastroLoginService.inputRegisterUser($scope.usuario);
    };
});


