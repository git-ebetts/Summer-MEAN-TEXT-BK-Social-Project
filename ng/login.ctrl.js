angular.module('app')
.controller('LoginCtrl', function ($scope, UserSvc, $location) {
	$scope.login = function (username, password) {
		UserSvc.login(username,password)
		.then(function (response) {
			$scope.$emit('login', response.data)
		})

		document.getElementById("loginform").reset();
		// $location.path('/')
		
	}
})