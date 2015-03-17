'use strict';

/**
 * @ngdoc function
 * @name patientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the patientApp
 */
angular.module('patientApp')
  .controller('MainCtrl', function ($scope, ENV_DEFAULT, $cookieStore, $location, $http) {
  	$scope.token = $cookieStore.get('token')
  	if(!$scope.token){
  		$location.path('/login')
  	}

var config = {headers:  {
        'Authorization': 'Bearer '+ $scope.token,
        'Content-Type': 'application/json'
    }
};

$http.get("/test", config);
  	
  	$scope.getCurrentUser = function(){
        $http.get(ENV_DEFAULT.apiUrl+"/me", config).then(function(data){
        	console.log(data)
        })
  	}

$scope.getCurrentUser(); 

  	console.log(ENV_DEFAULT.apiUrl)



    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
