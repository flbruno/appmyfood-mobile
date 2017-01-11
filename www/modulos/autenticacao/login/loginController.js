angular.module('autenticacao').controller('LoginCtrl', function ($scope, $http, $state, CadastroLoginService) {


    $scope.doLogin = function () {
        
        $state.go('app.principal');
        
       
    };

    $scope.init = function init() {
        var usuario = CadastroLoginService.data;

        if (usuario !== null && usuario !== undefined) {
            $scope.usuario.username = usuario.emailUser;
        }

    };

    $scope.init();

//    $scope.showAlertRegisterError = function () {
//        var alertPopup = $ionicPopup.alert({
//            title: 'Login Inválido!',
//            template: 'Por favor, tente novamente',
//            buttons: [
//                {
//                    text: '<b>Ok</b>',
//                    type: 'button-assertive'
//                }
//            ]
//        });
//
//        alertPopup.then(function (res) {
//        });
//    };
});


 