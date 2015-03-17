'use strict';

/**
 * @ngdoc function
 * @name patientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the patientApp
 */
angular.module('patientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
