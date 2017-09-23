(function(angular) {
  'use strict';

var myApp = angular.module('xpAula01', []);

myApp.controller('MainCtrl', ['$scope', '$window', function($scope, $window) {
      
	$scope.data = {};
	$scope.data.name = "";
	$scope.data.email = "";	

	$scope.goToThankYou = function(){
		console.log("00000")
		window.location.href = "/thank_you.html";
	}

}]);
})(window.angular);
