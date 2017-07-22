(function(){
    angular.module('myApp').controller("MainController",MainController);

    MainController.$inject = [];

    function MainController(){
        var vm = this;
        vm.title = "Angular and ADAL"
    }
})();