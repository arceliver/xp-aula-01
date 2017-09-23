(function(angular) {
  'use strict';

var myApp = angular.module('xpAula01', []);

myApp.controller('MainCtrl', ['$scope', function($scope) {
      
	$scope.data = {};
	$scope.data.name = "";
	$scope.data.email = "";	

	

}]);
})(window.angular);
