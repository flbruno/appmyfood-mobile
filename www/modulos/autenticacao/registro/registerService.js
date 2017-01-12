angular.module('autenticacao').service('CadastroLoginService', [
    '$http',
    function CadastroLoginService($http) {

        var URL_BASE = "http://localhost:8088";

        CadastroLoginService.recuperaDadosServidor = function () {

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


        CadastroLoginService.   inputRegisterUser = function (user) {
            return $http({
                method: 'POST',
                url: URL_BASE + '/autenticacao/cadastro/usuario',
                contentType: 'application/json; charset=utf-8',
                data: user
            }).success(function (data, status) {
                CadastroLoginService.data = data;
                CadastroLoginService.status = status;

            }).error(function (data, status) {
                CadastroLoginService.status = status;
            });
        };



        return CadastroLoginService;
    }]);




