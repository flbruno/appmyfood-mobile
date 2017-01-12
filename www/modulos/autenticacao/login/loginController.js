angular.module('autenticacao').controller('LoginCtrl', function ($scope, $http, $state, LoginService, CadastroLoginService) {


    $scope.doLogin = function () {
        $scope.authentication($scope.usuario.emailUser, $scope.usuario.senhaUser);
       
    };

    $scope.init = function () {
        
        //Apos registro de conta já traz dados do login
        var usuario = CadastroLoginService.data;

        if (usuario !== null && usuario !== undefined) {
            $scope.usuario.username = usuario.emailUser;
        }
    };
    
    $scope.init();
    
     $scope.authentication = function (email, senha) {
        LoginService.authentication(email, senha).then(function () {
            var usuario = LoginService.usuario;
           
            if(usuario !== null && usuario !== undefined){
                console.log(usuario);
                $state.go('app.principal');
            } else{
                alert("Deu ruim chara!");
            }
           
        });
    };

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


 