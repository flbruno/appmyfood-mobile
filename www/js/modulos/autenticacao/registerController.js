angular.module('autenticacao').controller('CadastroLoginCtrl', function ($scope, $http, $state, CadastroLoginService, $stateParams) {

    $scope.usuario = {};
    $scope.usuario.nameUser = "";
    $scope.usuario.emailUser = "";
    $scope.usuario.senhaUser = "";

    //Cadastrando o usuario no sistema
    $scope.registerUser = function () {
        CadastroLoginService.inputRegisterUser($scope.usuario).then(function () {

            $scope.usuario = CadastroLoginService.data;
            if(CadastroLoginService.status === 200){
                $state.go("login");
            }
        });


    };
});


