angular.module("app",["ngRoute"]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(t,o){t.login=function(t,e){o.login(t,e).then(function(t){console.log(t)})}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,o){t.addPost=function(){t.postBody&&o.create({username:"dickeyxxx",body:t.postBody}).success(function(o){t.posts.unshift(o),t.postBody=null})},o.fetch().success(function(o){t.posts=o})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(o){return t.post("/api/posts",o)},console.log("Error!")}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var o=this;o.getUser=function(){return t.get("/api/users",{headers:{"X-Auth":this.token}})},o.login=function(e,n){return t.post("/api/sessions",{username:e,password:n}).then(function(t){return o.token=t.data,o.getUser()})}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImxvZ2luLmN0cmwuanMiLCJwb3N0cy5jdHJsLmpzIiwicG9zdHMuc3ZjLmpzIiwicm91dGVzLmpzIiwidXNlci5zdmMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJVc2VyU3ZjIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGhlbiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5Iiwic3VjY2VzcyIsInBvc3QiLCJwb3N0cyIsInVuc2hpZnQiLCJmZXRjaCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsInN2YyIsImdldFVzZXIiLCJoZWFkZXJzIiwiWC1BdXRoIiwidG9rZW4iLCJ2YWwiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBQUMsT0FBQSxPQUNBLFlDREFELFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUFBLFNBQUEsVUFBQSxTQUFBQyxFQUFBQyxHQUNBRCxFQUFBRSxNQUFBLFNBQUFDLEVBQUFDLEdBQ0FILEVBQUFDLE1BQUFDLEVBQUFDLEdBQ0FDLEtBQUEsU0FBQUMsR0FDQUMsUUFBQUMsSUFBQUYsU0NMQVQsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFTLEdBQ0FULEVBQUFVLFFBQUEsV0FDQVYsRUFBQVcsVUFDQUYsRUFBQUcsUUFDQVQsU0FBQSxZQUNBVSxLQUFBYixFQUFBVyxXQUNBRyxRQUFBLFNBQUFDLEdBQ0FmLEVBQUFnQixNQUFBQyxRQUFBRixHQUNBZixFQUFBVyxTQUFBLFFBS0FGLEVBQUFTLFFBQ0FKLFFBQUEsU0FBQUUsR0FDQWhCLEVBQUFnQixNQUFBQSxPQ2ZBbkIsUUFBQUMsT0FBQSxPQUNBcUIsUUFBQSxZQUFBLFFBQUEsU0FBQUMsR0FDQUMsS0FBQUgsTUFBQSxXQUNBLE1BQUFFLEdBQUFFLElBQUEsZUFHQUQsS0FBQVQsT0FBQSxTQUFBRyxHQUNBLE1BQUFLLEdBQUFMLEtBQUEsYUFBQUEsSUFHQVIsUUFBQUMsSUFBQSxhQ1hBWCxRQUFBQyxPQUFBLE9BQ0F5QixRQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsS0FBQTFCLFdBQUEsWUFBQTJCLFlBQUEsZUFDQUQsS0FBQSxhQUFBMUIsV0FBQSxlQUFBMkIsWUFBQSxrQkFDQUQsS0FBQSxVQUFBMUIsV0FBQSxZQUFBMkIsWUFBQSxrQkNKQTdCLFFBQUFDLE9BQUEsT0FDQXFCLFFBQUEsV0FBQSxRQUFBLFNBQUFDLEdBQ0EsR0FBQU8sR0FBQU4sSUFDQU0sR0FBQUMsUUFBQSxXQUNBLE1BQUFSLEdBQUFFLElBQUEsY0FDQU8sU0FBQUMsU0FBQVQsS0FBQVUsVUFJQUosRUFBQXpCLE1BQUEsU0FBQUMsRUFBQUMsR0FDQSxNQUFBZ0IsR0FBQUwsS0FBQSxpQkFDQVosU0FBQUEsRUFBQUMsU0FBQUEsSUFDQUMsS0FBQSxTQUFBMkIsR0FFQSxNQURBTCxHQUFBSSxNQUFBQyxFQUFBQyxLQUNBTixFQUFBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuXHQnbmdSb3V0ZSdcblxuXHRdKSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcblx0JHNjb3BlLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuXHRcdFVzZXJTdmMubG9naW4odXNlcm5hbWUscGFzc3dvcmQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcblx0XHRcdGNvbnNvbGUubG9nKHVzZXIpXG5cdFx0fSlcblx0fVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBQb3N0c1N2Yykge1xuXHQkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHR1c2VybmFtZTogJ2RpY2tleXh4eCcsXG5cdFx0XHRcdGJvZHk6ICRzY29wZS5wb3N0Qm9keVxuXHRcdFx0fSkuc3VjY2VzcyhmdW5jdGlvbiAocG9zdCkge1xuXHRcdFx0XHQkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KVxuXHRcdFx0XHQkc2NvcGUucG9zdEJvZHkgPSBudWxsXG5cdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFBvc3RzU3ZjLmZldGNoKClcblx0XHQuc3VjY2VzcyhmdW5jdGlvbiAocG9zdHMpIHtcblx0XHRcdCRzY29wZS5wb3N0cyA9IHBvc3RzXG5cdFx0fSlcblx0XHR9KSIsIlxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0dGhpcy5mZXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuXG5cdH1cblx0dGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcblx0fVxuXG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IhJylcblx0XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0LndoZW4oJy8nLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnfSlcblx0LndoZW4oJy9yZWdpc3RlcicsIHsgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ3RybCcsIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuaHRtbCd9KVxuXHQud2hlbignL2xvZ2luJywgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJ30pXG5cbn0pIiwiXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCAnVXNlclN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR2YXIgc3ZjID0gdGhpc1xuXHRzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJywge1xuXHRcdFx0aGVhZGVycyA6IHsnWC1BdXRoJyA6IHRoaXMudG9rZW59XG5cdFx0fSlcblx0fVxuXG5zdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG5cdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xuXHRcdHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIFxuXHR9KS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRzdmMudG9rZW4gPSB2YWwuZGF0YVxuXHRcdHJldHVybiBzdmMuZ2V0VXNlcigpXG5cdH0pXG59XG59KSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
