'use strict';

/**
 * @ngdoc function
 * @name angularStoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStoreApp
 */
angular.module('angularStoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
