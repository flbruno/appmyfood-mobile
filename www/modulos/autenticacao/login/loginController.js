angular.module('autenticacao').controller('LoginCtrl', function ($scope, $http, $state, LoginService, CadastroLoginService) {

    $scope.usuario = {};
    $scope.init = function () {
        
        //Apos registro de conta já traz dados do login
        var usuario = CadastroLoginService.data;
        if (usuario !== null && usuario !== undefined) {
            $scope.usuario.emailUser = usuario.emailUser;
        }
    };
    
    $scope.init();
    
     $scope.authentication = function () {
        LoginService.authentication($scope.usuario).then(function () {
           
            if (LoginService.status === 200) {   
                $state.go('app.principal');
               
            }else{
                 $scope.showAlertAutenticationError();
            }
        });
    };

    $scope.showAlertAutenticationError = function () {
        $ionicPopup.alert({
            title: 'Login Inválido!',
            template: 'Por favor, tente novamente',
            buttons: [
                {
                    text: '<b>Ok</b>',
                    type: 'button-assertive'
                }
            ]
        });

        alertPopup.then(function (res) {
        });
    };
});


 