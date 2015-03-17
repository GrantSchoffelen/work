'use strict';

/**
 * @ngdoc function
 * @name patientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the patientApp
 */
angular.module('patientApp')
	.controller('LoginCtrl', function($scope, ENV_DEFAULT, $http, $cookieStore, $location) {
		console.log(ENV_DEFAULT.apiUrl)

		$scope.user = {};


		$scope.login = function(user, success, error) {
			console.log(user)
			$http
				.post(ENV_DEFAULT.apiUrl + '/auth/login', user)
				.success(function(data, status, header, config) {
					console.log(data.data.token)
					$cookieStore.put('token', data.data.token);
					$location.path('/')
				})
				.error(function(data, status, header, config) {
					console.log(data)
						// $window.sessionStorage.removeItem('token');
						// if (angular.isFunction(error)) {
						// 	error(data, status, header, config);
						// }
				});
		}

		// login($scope.user)


	});