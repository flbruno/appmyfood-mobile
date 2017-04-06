angular.module('autenticacao').controller('CadastroLoginCtrl', function ($scope, $state, CadastroLoginService, $ionicPopup) {

    $scope.usuario = {};
    $scope.usuario.nameUser = "";
    $scope.usuario.emailUser = "";
    $scope.usuario.senhaUser = "";
    $scope.usuario.confirmarSenhaUser = "";

    //Cadastrando o usuario no sistema
    $scope.registerUser = function () {
        CadastroLoginService.inputRegisterUser($scope.usuario).then(function () {

            if ($scope.validationRegisterUser()) {
                $scope.usuario = CadastroLoginService.data;
                
                if (CadastroLoginService.status === 200) {
                    $scope.showAlertRegisterSucess();

                } else {
                    $scope.showAlertRegisterError();
                }

            } else {
                $scope.showAlertRegisterError();
            }
        });
    };

    $scope.showAlertRegisterSucess = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Usuario Cadastrado com sucesso!',
            buttons: [
                {
                    text: '<b>Ok</b>',
                    type: 'button-positive'
                }
            ]
        });

        alertPopup.then(function (res) {
            $state.go("login", {}, {reload: true, notify: true, inherit: false});
        });
    };

    $scope.showAlertRegisterError = function () {
        var alertPopup = $ionicPopup.alert({
            title: 'Problema ao cadastrar o usuario!',
            template: 'Favor realizar o cadastro novamente.',
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

    $scope.validationRegisterUser = function () {
        var name = $scope.usuario.nameUser;
        var email = $scope.usuario.emailUser;
        var passwd = $scope.usuario.senhaUser;
        var cfPasswd = $scope.usuario.confirmarSenhaUser;

        if ((name === undefined || name === undefined || name.trim() === "")
                || (email === undefined || email === undefined || email.trim() === "")
                || (passwd === undefined || passwd === undefined || passwd.trim() === "")
                || (cfPasswd === undefined || cfPasswd === undefined || cfPasswd.trim() === "")) {
            return false;

        } else {
            return true;
        }
    };
});


