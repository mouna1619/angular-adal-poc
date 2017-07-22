(function(){
    'use strict';

    angular.module('loginModule').controller("LoginController",LoginController);

    LoginController.$inject = ['authService'];

    function LoginController(authService){
        var vm = this;

        
    }
})();