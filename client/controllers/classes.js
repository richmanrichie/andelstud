myApp.controller('classesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('classesController loaded...');
	
	$scope.i = 1;

	$scope.getClasses = function(){
		$http.get('/api/classlists').then(function(response){
            $scope.classes = response.data;
            Classes = $scope.classes;
		});
    }
	$scope.addClass = function(){
		$http.post('/api/classlists/', $scope.class).then(function(response){
			$scope.class = {};
			$scope.getClasses();
			$scope.addBtn = false;
			window.location.href = ('#!/classes');
		});
    }
	$scope.updateClass = function(){
		var id = $routeParams.id;
		$http.put('/api/classlists/'+id, $scope.class).then(function(response){
			window.location.href = ('#!/classes');
		});
	}
	$scope.removeClass = function(id){
		$http.delete('/api/classlists/'+id).then(function(response){
			$scope.getClasses();
			window.location.href = ('#!/classes');
		});
	}
}])

