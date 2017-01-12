angular.module('autenticacao').factory('LoginService', [
    '$http',
    function LoginService($http) {

        var URL_BASE = "http://localhost:8088";
        var usuario;

        LoginService.authentication = function (email, senha) {

            return $http({
                method: 'POST',
                url: URL_BASE + '/autenticacao/cadastro/getdadosuser' ,
                contentType: 'application/json; charset=utf-8',
                data: {email: email, senha: senha}
                
            }).success(function (data, status) {
                LoginService.usuario = data[0];
                usuario = LoginService.usuario;

            }).error(function (data, status) {
                LoginService.status = status;
            });
        };
        
        LoginService.getUserLogged = function(){
            return usuario;
        };
        
       
        

        return LoginService;
    }]);




