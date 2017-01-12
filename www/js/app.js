angular.module('starter', ['ionic', 'starter.controllers', 'principal', 'autenticacao'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'modulos/autenticacao/login/login.html',
                        controller: 'LoginCtrl'
                    })
                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html',
                        controller: 'AppCtrl'
                    })
                    .state('cadastroUser', {
                        url: '/cadastroUser',
                        templateUrl: 'modulos/autenticacao/registro/registerUserView.html',
                        controller: 'CadastroLoginCtrl'
                    })
                    
                    
                     .state('app.login', {
                        url: '/applogin',
                         views: {
                            'menuContent': {
                                 templateUrl: 'modulos/autenticacao/login/login.html',
                                 controller: 'LoginCtrl'
                            }
                        }
                        
                    })
                    .state('app.browse', {
                        url: '/browse',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/browse.html'
                            }
                        }
                    })
                    .state('app.principal', {
                        url: '/principal',
                        views: {
                            'menuContent': {
                                templateUrl: 'modulos/principal/principal.view.html',
                                controller: 'PrincipalCtrl'
                            }
                        }
                    })

                    .state('app.single', {
                        url: '/playlists/:playlistId',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/playlist.html',
                                controller: 'PlaylistCtrl'
                            }
                        }
                    });

            $urlRouterProvider.otherwise('/login');
        });
