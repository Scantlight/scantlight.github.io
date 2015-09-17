var app = angular.module('rootApp', []);

// do what was already advised to change from {{}} to //// when using jekyll
app.config(['$interpolateProvider',
    function ($interpolateProvider) {
        $interpolateProvider.startSymbol('//');
        $interpolateProvider.endSymbol('//');
    }]);