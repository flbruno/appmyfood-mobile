angular.module('autenticacao').factory('LoginService', [
    '$http',
    function LoginService($http) {

        var URL_BASE = "http://localhost:8088";
        var usuario;

        LoginService.authentication = function (usuario) {

            return $http({
                method: 'POST',
                url: URL_BASE + '/autenticacao/login',
                contentType: 'application/json; charset=utf-8',
                data: usuario

            }).success(function (data, status) {
                LoginService.usuario = data;
                LoginService.status = status;

            }).error(function (status) {
                LoginService.status = status;
            });
        };

        LoginService.getUserLogged = function () {
            return usuario;
        };

        return LoginService;
    }]);




