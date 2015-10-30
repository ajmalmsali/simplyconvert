angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider 
    .state('convert', {
      url: '/home',
      templateUrl: 'templates/convert.html',
      controller: 'convertCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');

});