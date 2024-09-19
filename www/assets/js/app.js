var app = angular.module('myApp', ['ngRoute']);

// Asegurarse de que AngularJS está listo antes de ejecutar el código
angular.module('myApp').run(function ($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function () {
        $('#sidebarMenu').removeClass('active');
        $('#overlay').removeClass('active');
        $('.footerToogle').removeClass('active');
    });
});

// Configuración de las rutas
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })
        .when('/reset', {
            templateUrl: 'views/reset.html',
            controller: 'ResetController'
        })
        .when('/categories', {
            templateUrl: 'views/categories.html',
            controller: 'CategoriesController'
        })
        .when('/oficial-stores', {
            templateUrl: 'views/oficial-stores.html',
            controller: 'OficialStoresController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Controladores
app.controller('HomeController', function ($scope) {
    // Lógica para el controlador de la página principal
});

app.controller('CategoriesController', function ($scope) {
    // Lógica para el controlador de Categorías
});

app.controller('LoginController', function ($scope) {
    // Lógica para el controlador de Login
});

app.controller('RegisterController', function ($scope) {
    // Lógica para el controlador de Register
});

app.controller('ResetController', function ($scope) {
    // Lógica para el controlador de Reset
});

app.controller('OficialStoresController', function ($scope) {
    // Lógica para el controlador de Reset
});

// Manejo de la visibilidad del header y footer
app.run(function ($rootScope, $location) {
    $rootScope.isHeaderVisible = true;
    $rootScope.isFooterVisible = true;

    $rootScope.$on('$routeChangeSuccess', function () {
        var path = $location.path();
        if (path === '/login' || path === '/register' || path === '/reset') {
            $rootScope.isHeaderVisible = false;
            $rootScope.isFooterVisible = false;
        } else {
            $rootScope.isHeaderVisible = true;
            $rootScope.isFooterVisible = true;
        }
    });
});
