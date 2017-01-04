angular.module('autenticacao').controller('LoginCtrl', function ($scope, $http, $state) {

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        $state.go('app.playlists');
    };

    recuperaDadosServidor();

    function recuperaDadosServidor() {
        var URL_BASE = "http://localhost:8088";
        $http({
            method: 'GET',
            url: URL_BASE + '/cadastro/food',
            contentType: 'application/json; charset=utf-8'

        }).then(function success(response) {

            $scope.returno = response.data;
        }, function error(response) {
            console.log(response);
        });

    }
});


