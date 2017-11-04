var myApp =  angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        controller:'studentsController',
        templateUrl: 'views/'
    })
    .when('/students', {
        controller:'studentsController',
        templateUrl:'views/students.html'
    })
    .when('/students/details/:id', {
        controller:'studentsController',
        templateUrl:'/views/student_detail.html'
    })
    .when('/students/add', {
        controller:'studentsController',
        templateUrl:'views/add_student.html'
    })
    .when('/students/edit/:id', {
        controller:'studentsController',
        templateUrl:'views/edit_student.html'
    })
    .when('/classes', {
        controller:'classesController',
        templateUrl:'views/classes.html'
    })
    .otherwise({
        redirectTo:'/'
    })

});