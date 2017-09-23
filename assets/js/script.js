(function(angular) {
  'use strict';

var myApp = angular.module('xpAula01', []);

myApp.controller('MainCtrl', ['$scope', '$window', function($scope, $window) {
      
	$scope.data = {};
	$scope.data.name = "";
	$scope.data.email = "";	

	$scope.goToThankYou = function(){
		//VUSH
		window.location.href = '../xp-aula-01/thank_you.html';
	}

}]);
})(window.angular);
