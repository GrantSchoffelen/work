'use strict';

/**
 * @ngdoc function
 * @name patientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the patientApp
 */
angular.module('patientApp')
  .controller('MainCtrl', function ($scope, ENV_DEFAULT) {
  	console.log(ENV_DEFAULT.apiUrl)
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
