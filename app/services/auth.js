(function(){
    'use strict';

    angular.module('myApp').factory('authService', authService);

    authService.$inject = [];

    function authService(){
        return {
            login : login,
            logout: logout
        };

        function login(){}
        function logout(){}
    }
})();