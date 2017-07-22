(function(){
    'use strict';

    angular.module('myApp').config(Config);

    Config.$inject = ['$stateProvider','$urlRouterProvider'];

    function Config($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('login',{
            url :'/',
            templateUrl:'app/login/login.html',
            controller : 'LoginController',
            controllerAs : 'vm'
        })
        .state('home',{
            url:'/home',
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'vm'
        });
    }
})();