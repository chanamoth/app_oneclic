var app = angular.module('myApp', ['ngRoute']);

app_opherton.config(['$httpProvider', function ($httpProvider, $rootScope) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
}]);

app_opherton.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/home.html', reloadOnSearch: false });
    $routeProvider.when('/home', { templateUrl: 'views/home.html', reloadOnSearch: false });
    $routeProvider.when('/oficial-stores', { templateUrl: 'views/oficial-stores.html', reloadOnSearch: false });
    $routeProvider.when('/categories', { templateUrl: 'views/categories.html', reloadOnSearch: false });
    $routeProvider.when('/marketplace', { templateUrl: 'views/marketplace.html', reloadOnSearch: false });
    $routeProvider.when('/register', { templateUrl: 'views/register.html', reloadOnSearch: false });
    $routeProvider.when('/register/:id', { templateUrl: 'views/register.html', reloadOnSearch: false });
    $routeProvider.when('/login', { templateUrl: 'views/login.html', reloadOnSearch: false });
    $routeProvider.when('/login/:id', { templateUrl: 'views/login.html', reloadOnSearch: false });
    $routeProvider.when('/reset', { templateUrl: 'views/reset.html', reloadOnSearch: false });
    $routeProvider.when('/profile/:id', { templateUrl: 'views/profile.html', reloadOnSearch: false });
    $routeProvider.when('/profile/', { templateUrl: 'views/profile.html', reloadOnSearch: false });
    $routeProvider.when('/profile_img/', { templateUrl: 'views/profile_img.html', reloadOnSearch: false });
    $routeProvider.when('/no-conexion', { templateUrl: 'views/no-conexion.html', reloadOnSearch: false });
    $routeProvider.when('/rubros-list/:id/:pais', { templateUrl: 'views/rubros-list.html', reloadOnSearch: false });
    $routeProvider.when('/store/:id', { templateUrl: 'views/store.html', reloadOnSearch: false });
}]);