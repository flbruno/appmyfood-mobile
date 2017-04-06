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

        if ($scope.validationAcessUserLogin()) {
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
        var msg = !$scope.validationAcessUserLogin() ? 'Login Inválido!' : 'Usuário ou Senha estão Inválidos!';
        var msgDet = 'Por favor, tente novamente';

        $ionicPopup.alert({
            title: msg,
            template: msgDet,
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

    $scope.validationAcessUserLogin = function () {
        var user = $scope.usuario.emailUser;
        var passwd = $scope.usuario.senhaUser;

        if ((user === undefined || user === undefined || user.trim() === "") ||
                (passwd === undefined || passwd === undefined || passwd.trim() === "")) {
            return false;

        } else {
            return true;
        }
    };

});


 