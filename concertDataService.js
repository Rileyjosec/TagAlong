app.factory('concertData', ['$http', function($http) {
	return $http.jsonp('http://api.bandsintown.com/events/search?&per_page=100&location=Salt+Lake+City,UT&radius=10&format=json&app_id=YOUR_APP_ID&callback=JSON_CALLBACK')
	.success(function(data) {
		return data;
	})
	.error(function(err) {
		return  err;
	});
}]);
