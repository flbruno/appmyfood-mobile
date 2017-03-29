angular.module('autenticacao').service('CadastroLoginService', [
    '$http',
    function CadastroLoginService($http) {

        var URL_BASE = "http:/172.16.50.118:8088";
        
        CadastroLoginService.inputRegisterUser = function (user) {
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




