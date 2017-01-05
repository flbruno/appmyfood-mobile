angular.module('autenticacao').controller('LoginCtrl', function ($scope, $http, $state, CadastroLoginService) {

    
    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        $state.go('app.playlists');
    };

    $scope.init = function init() {
       var usuario = CadastroLoginService.data;
       
       if(usuario !== null && usuario !== undefined){
           $scope.loginData.username = usuario.emailUser;
       }

    };
    
    $scope.init();
});


