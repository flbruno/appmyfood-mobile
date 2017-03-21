angular.module('autenticacao').controller('LoginCtrl', function ($scope, $ionicPopup, $state, LoginService, CadastroLoginService) {

    $scope.usuario = {};
    var userLogin = CadastroLoginService.data;
    $scope.init = function () {
        //Apos registro de conta o name 
        //do usuario ja esta carregado
        if (userLogin !== null && userLogin !== undefined) {
            $scope.usuario.emailUser = userLogin.emailUser;
        }
    };
    $scope.init();

    $scope.authentication = function () {

        if ($scope.usuario.senhaUser !== undefined || $scope.usuario.emailUser !== undefined) {

            LoginService.authentication($scope.usuario).then(function () {

                if (LoginService.status === 200) {
                    $state.go('app.principal');

                } else {
                    $scope.showAlertAutenticationError();
                }
            });
        } else {
            $scope.showAlertAutenticationError();
        }
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


 