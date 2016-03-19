angular.module("app",["ngRoute"]),angular.module("app").controller("ApplicationCtrl",["$scope","UserSvc",function(t,e){t.$on("login",function(e,o){t.currentUser=o}),t.remove=function(o){t.currentUser="",e.logout()}}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc","$location",function(t,e,o){t.login=function(o,n){e.login(o,n).then(function(e){t.$emit("login",e.data)}),document.getElementById("loginform").reset()}}]),angular.module("app").controller("PostsCtrl",["$scope","PostsSvc",function(t,e){t.addPost=function(){t.postBody&&e.create({username:"dickeyxxx",body:t.postBody}).success(function(e){t.posts.unshift(e),t.postBody=null})},e.fetch().success(function(e){t.posts=e})}]),angular.module("app").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts")},this.create=function(e){return t.post("/api/posts",e)},console.log("Error!")}]),angular.module("app").controller("RegisterCtrl",["$scope","UserSvc",function(t,e){t.register=function(o,n){e.register(o,n).then(function(e){t.$emit("login",e.data)})}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"}).when("/logout",{controller:"ApplicationCtrl",templateUrl:"posts.html"})}]),angular.module("app").service("UserSvc",["$http",function(t){var e=this;e.getUser=function(){return t.get("/api/users")},e.login=function(o,n){return t.post("/api/sessions",{username:o,password:n}).then(function(o){return e.token=o.data,t.defaults.headers.common["X-Auth"]=o.data,e.getUser()})},e.register=function(o,n){return t.post("/api/users",{username:o,password:n}).then(function(){return e.login(o,n)})},e.logout=function(){delete t.defaults.headers.common["X-Auth"],e.getUser()}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJlZ2lzdGVyLmN0cmwuanMiLCJyb3V0ZXMuanMiLCJ1c2VyLnN2Yy5qcyJdLCJuYW1lcyI6WyJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIlVzZXJTdmMiLCIkb24iLCJfIiwidXNlciIsImN1cnJlbnRVc2VyIiwicmVtb3ZlIiwibG9nb3V0IiwiJGxvY2F0aW9uIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiJGVtaXQiLCJkYXRhIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlc2V0IiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5Iiwic3VjY2VzcyIsInBvc3QiLCJwb3N0cyIsInVuc2hpZnQiLCJmZXRjaCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwicmVnaXN0ZXIiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsInN2YyIsImdldFVzZXIiLCJ2YWwiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiJdLCJtYXBwaW5ncyI6IkFBQUFBLFFBQUFDLE9BQUEsT0FDQSxZQ0RBRCxRQUFBQyxPQUFBLE9BQ0FDLFdBQUEsbUJBQUEsU0FBQSxVQUFBLFNBQUFDLEVBQUFDLEdBQ0FELEVBQUFFLElBQUEsUUFBQSxTQUFBQyxFQUFBQyxHQUNBSixFQUFBSyxZQUFBRCxJQUdBSixFQUFBTSxPQUFBLFNBQUFELEdBQ0FMLEVBQUFLLFlBQUEsR0FDQUosRUFBQU0sYUNSQVYsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxVQUFBLFlBQUEsU0FBQUMsRUFBQUMsRUFBQU8sR0FDQVIsRUFBQVMsTUFBQSxTQUFBQyxFQUFBQyxHQUNBVixFQUFBUSxNQUFBQyxFQUFBQyxHQUNBQyxLQUFBLFNBQUFDLEdBQ0FiLEVBQUFjLE1BQUEsUUFBQUQsRUFBQUUsUUFHQUMsU0FBQUMsZUFBQSxhQUFBQyxZQ1JBckIsUUFBQUMsT0FBQSxPQUNBQyxXQUFBLGFBQUEsU0FBQSxXQUFBLFNBQUFDLEVBQUFtQixHQUNBbkIsRUFBQW9CLFFBQUEsV0FDQXBCLEVBQUFxQixVQUNBRixFQUFBRyxRQUNBWixTQUFBLFlBQ0FhLEtBQUF2QixFQUFBcUIsV0FDQUcsUUFBQSxTQUFBQyxHQUNBekIsRUFBQTBCLE1BQUFDLFFBQUFGLEdBQ0F6QixFQUFBcUIsU0FBQSxRQUtBRixFQUFBUyxRQUNBSixRQUFBLFNBQUFFLEdBQ0ExQixFQUFBMEIsTUFBQUEsT0NmQTdCLFFBQUFDLE9BQUEsT0FDQStCLFFBQUEsWUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFILE1BQUEsV0FDQSxNQUFBRSxHQUFBRSxJQUFBLGVBR0FELEtBQUFULE9BQUEsU0FBQUcsR0FDQSxNQUFBSyxHQUFBTCxLQUFBLGFBQUFBLElBR0FRLFFBQUFDLElBQUEsYUNYQXJDLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxnQkFBQSxTQUFBLFVBQUEsU0FBQUMsRUFBQUMsR0FDQUQsRUFBQW1DLFNBQUEsU0FBQXpCLEVBQUFDLEdBQ0FWLEVBQUFrQyxTQUFBekIsRUFBQUMsR0FDQUMsS0FBQSxTQUFBQyxHQUNBYixFQUFBYyxNQUFBLFFBQUFELEVBQUFFLFlDTEFsQixRQUFBQyxPQUFBLE9BQ0FzQyxRQUFBLGlCQUFBLFNBQUFDLEdBQ0FBLEVBQ0FDLEtBQUEsS0FBQXZDLFdBQUEsWUFBQXdDLFlBQUEsZUFDQUQsS0FBQSxhQUFBdkMsV0FBQSxlQUFBd0MsWUFBQSxrQkFDQUQsS0FBQSxVQUFBdkMsV0FBQSxZQUFBd0MsWUFBQSxlQUNBRCxLQUFBLFdBQUF2QyxXQUFBLGtCQUFBd0MsWUFBQSxrQkNMQTFDLFFBQUFDLE9BQUEsT0FDQStCLFFBQUEsV0FBQSxRQUFBLFNBQUFDLEdBQ0EsR0FBQVUsR0FBQVQsSUFDQVMsR0FBQUMsUUFBQSxXQUNBLE1BQUFYLEdBQUFFLElBQUEsZUFHQVEsRUFBQS9CLE1BQUEsU0FBQUMsRUFBQUMsR0FDQSxNQUFBbUIsR0FBQUwsS0FBQSxpQkFDQWYsU0FBQUEsRUFBQUMsU0FBQUEsSUFDQUMsS0FBQSxTQUFBOEIsR0FHQSxNQUZBRixHQUFBRyxNQUFBRCxFQUFBM0IsS0FDQWUsRUFBQWMsU0FBQUMsUUFBQUMsT0FBQSxVQUFBSixFQUFBM0IsS0FDQXlCLEVBQUFDLGFBSUFELEVBQUFMLFNBQUEsU0FBQXpCLEVBQUFDLEdBQ0EsTUFBQW1CLEdBQUFMLEtBQUEsY0FDQWYsU0FBQUEsRUFBQUMsU0FBQUEsSUFDQUMsS0FBQSxXQUNBLE1BQUE0QixHQUFBL0IsTUFBQUMsRUFBQUMsTUFJQTZCLEVBQUFqQyxPQUFBLGlCQUNBdUIsR0FBQWMsU0FBQUMsUUFBQUMsT0FBQSxVQUNBTixFQUFBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuXHQnbmdSb3V0ZSdcblxuXHRdKSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0FwcGxpY2F0aW9uQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcblx0JHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbiAoXywgdXNlcikge1xuXHRcdCRzY29wZS5jdXJyZW50VXNlciA9IHVzZXJcblx0fSlcblxuICAgJHNjb3BlLnJlbW92ZSA9IGZ1bmN0aW9uKGN1cnJlbnRVc2VyKSB7XG4gICAgICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSAnJztcbiAgICAgICAgICAgIFVzZXJTdmMubG9nb3V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgXHR9KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMsICRsb2NhdGlvbikge1xuXHQkc2NvcGUubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG5cdFx0VXNlclN2Yy5sb2dpbih1c2VybmFtZSxwYXNzd29yZClcblx0XHQudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdCRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKVxuXHRcdH0pXG5cblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luZm9ybVwiKS5yZXNldCgpO1xuXHRcdC8vICRsb2NhdGlvbi5wYXRoKCcvJylcblx0XHRcblx0fVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBQb3N0c1N2Yykge1xuXHQkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG5cdFx0XHRQb3N0c1N2Yy5jcmVhdGUoe1xuXHRcdFx0XHR1c2VybmFtZTogJ2RpY2tleXh4eCcsXG5cdFx0XHRcdGJvZHk6ICRzY29wZS5wb3N0Qm9keVxuXHRcdFx0fSkuc3VjY2VzcyhmdW5jdGlvbiAocG9zdCkge1xuXHRcdFx0XHQkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KVxuXHRcdFx0XHQkc2NvcGUucG9zdEJvZHkgPSBudWxsXG5cdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdFBvc3RzU3ZjLmZldGNoKClcblx0XHQuc3VjY2VzcyhmdW5jdGlvbiAocG9zdHMpIHtcblx0XHRcdCRzY29wZS5wb3N0cyA9IHBvc3RzXG5cdFx0fSlcblx0XHR9KSIsIlxuYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0dGhpcy5mZXRjaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKVxuXG5cdH1cblx0dGhpcy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xuXHRcdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcblx0fVxuXG5cdFx0XHRjb25zb2xlLmxvZygnRXJyb3IhJylcblx0XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIFVzZXJTdmMpIHtcblx0JHNjb3BlLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuXHRcdFVzZXJTdmMucmVnaXN0ZXIodXNlcm5hbWUscGFzc3dvcmQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHQkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSlcblx0XHR9KVxuXHR9XG59KSIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuLmNvbmZpZyhmdW5jdGlvbiAoJHJvdXRlUHJvdmlkZXIpIHtcblx0JHJvdXRlUHJvdmlkZXJcblx0LndoZW4oJy8nLCB7IGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLCB0ZW1wbGF0ZVVybDogJ3Bvc3RzLmh0bWwnfSlcblx0LndoZW4oJy9yZWdpc3RlcicsIHsgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ3RybCcsIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIuaHRtbCd9KVxuXHQud2hlbignL2xvZ2luJywgeyBjb250cm9sbGVyOiAnTG9naW5DdHJsJywgdGVtcGxhdGVVcmw6ICdsb2dpbi5odG1sJ30pXG5cdC53aGVuKCcvbG9nb3V0JywgeyBjb250cm9sbGVyOiAnQXBwbGljYXRpb25DdHJsJywgdGVtcGxhdGVVcmw6ICdwb3N0cy5odG1sJ30pXG5cbn0pIiwiXG5hbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5zZXJ2aWNlKCAnVXNlclN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHR2YXIgc3ZjID0gdGhpc1xuXHRzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzJylcblx0fVxuXG5zdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG5cdHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Nlc3Npb25zJywge1xuXHRcdHVzZXJuYW1lOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIFxuXHR9KS50aGVuKGZ1bmN0aW9uICh2YWwpIHtcblx0XHRzdmMudG9rZW4gPSB2YWwuZGF0YVxuXHRcdCRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXSA9IHZhbC5kYXRhXG5cdFx0cmV0dXJuIHN2Yy5nZXRVc2VyKClcblx0fSlcbn1cblxuc3ZjLnJlZ2lzdGVyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuXHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VycycsIHtcblx0XHR1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCBcblx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpXG5cdH0pXG59XG5cbiAgICAgICAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGVsZXRlICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXTtcbiAgICAgICAgICAgIHN2Yy5nZXRVc2VyKCl9O1xufSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VXNlci51c2VybmFtZSlcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
