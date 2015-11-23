app.controller('DataController',['$scope', 'concertData', function($scope, concertData) {
	concertData.success(function(data) {
		$scope.concertData = data;
		console.log($scope)
	});
}]);
