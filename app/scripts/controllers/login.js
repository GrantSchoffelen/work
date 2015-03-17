'use strict';

/**
 * @ngdoc function
 * @name patientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the patientApp
 */
angular.module('patientApp')
	.controller('LoginCtrl', function($scope, ENV_DEFAULT, $http, $cookieStore) {
		console.log(ENV_DEFAULT.apiUrl)

		$scope.user = {
  "email": "StevenEisenberg@org2.com.xyz", 
  "password": "userpass"
}; 


		function login(user, success, error) {
			$http
				.post(ENV_DEFAULT.apiUrl + '/auth/login', user)
				.success(function(data, status, header, config) {
					console.log(data.data.token)
					$cookieStore.put('token', data.data.token);
					// $window.sessionStorage.setItem('token', data.data.token);
					// if (angular.isFunction(success)) {
					// 	success(data, status, header, config);
					// }
				})
				.error(function(data, status, header, config) {
					console.log(data)
					// $window.sessionStorage.removeItem('token');
					// if (angular.isFunction(error)) {
					// 	error(data, status, header, config);
					// }
				});
		}

		login($scope.user)


	});