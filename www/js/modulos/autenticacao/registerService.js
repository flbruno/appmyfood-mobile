angular.module('autenticacao').service('CadastroLoginService', [
    '$http',  
    function CadastroLoginService($http, $state, $ionicPopup) {

        CadastroLoginService.recuperaDadosServidor = function () {
            var URL_BASE = "http://localhost:8088";
            $http({
                method: 'GET',
                url: URL_BASE + '/cadastro/food',
                contentType: 'application/json; charset=utf-8'

            }).then(function success(response) {
                return response.data;
            }, function error(response) {
                console.log(response);
            });
        };

        CadastroLoginService.inputRegisterUser = function (user){
            var URL_BASE = "http://localhost:8088";
            $http({
                method: 'POST',
                url: URL_BASE + '/autenticacao/cadastro/usuario',
                contentType: 'application/json; charset=utf-8',
                data: user
            }).then(function success(response) {

                return response.data;
            }, function error(response,$scope) {
                $scope.showAlert();
                console.log(response);
            });
        };
        return CadastroLoginService;
    }]);




