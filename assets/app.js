//create our app module
var app=angular.module("app", []) 
//create the PostsCtrl module
//dependency inject $scope


app.controller("PostsCtrl", function
($scope, PostsSvc) {

	//the function runs when the "add post" btn is clicked
	$scope.addPost = function() {
	//only add a post if there is a body

		if ($scope.postBody) {

			//unshift a new post into $scope.posts

PostsSvc.create({
		username: "Thisnamehere",
		body: $scope.postBody
	}).success(function(post) {
		$scope.posts.unshift(post)
		$scope.postBody = null
	})
	}
}

PostsSvc.fetch()
.success(function(posts) {
	$scope.posts = posts
})

})

app.service('PostsSvc', function($http) {
	this.fetch = function () {
		return $http.get('/api/posts')
	}
	this.create = function (post) {
		return $http.post('/api/posts', post)
	}
})
// })