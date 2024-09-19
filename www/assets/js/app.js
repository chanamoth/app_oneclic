var app_opherton = angular.module('app_opherton', ['ngRoute']);

app_opherton.run(['$window', '$rootScope', '$http', '$location', function ($window, $rootScope, $http, $location) { }

]);

// Definición del interceptor
app_opherton.factory('httpRequestInterceptor', ['$q', function ($q) {
    return {
        request: function (config) {
            // Por ejemplo, agregar un token de autenticación
            config.headers = config.headers || {};
            // config.headers.Authorization = 'Bearer token';
            return config;
        },
        requestError: function (rejection) {
            // Manejar errores de solicitud
            return $q.reject(rejection);
        },
        response: function (response) {
            // Procesar la respuesta si es necesario
            return response;
        },
        responseError: function (rejection) {
            // Manejar errores de respuesta
            return $q.reject(rejection);
        }
    };
}]);

// Rutas
app_opherton.config(['$httpProvider', function ($httpProvider) {
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