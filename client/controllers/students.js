myApp.controller('studentsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('studentsController loaded...');
	
	$scope.changeDetails = function(name, image){
		$scope.modalImage = image;
		$scope.modalName = name;
	};

	$scope.getStudents = function(){
		$http.get('/api/students').then(function(response){
			$scope.students = response.data;
		});
	}

	$scope.getStudent = function(){
		var id = $routeParams.id;
		$http.get('/api/students/'+id).then(function(response){
			$scope.student = response.data;
		});
	}

	$scope.addStudent = function(){
		$http.post('/api/students/', $scope.student).then(function(response){
			window.location.href = ('#!/students');
		});
	}

	$scope.updateStudent = function(){
		var id = $routeParams.id;
		$http.put('/api/students/'+id, $scope.student).then(function(response){
			window.location.href = ('#!/students');
		});
	}
	$scope.removeStudent = function(id){
		$http.delete('/api/students/'+id).then(function(response){
			window.location.href = ('#!/students');
		});
	}
}])