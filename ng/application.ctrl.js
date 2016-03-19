angular.module('app')
.controller('ApplicationCtrl', function ($scope, UserSvc) {
	$scope.$on('login', function (_, user) {
		$scope.currentUser = user
	})

   $scope.remove = function(currentUser) {
            $scope.currentUser = '';
            UserSvc.logout();
        }
        	})