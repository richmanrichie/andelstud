myApp.controller('commentsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    $scope.error = true;
	$scope.getComments = function(){
		$http.get('/api/comments').then(function(response){
            $scope.comments = response.data;
		});
    }
	$scope.addComment = function(){
        if($scope.comment === undefined){
            $scope.err = 'Please you cannot submit an empty form';
            $scope.error = false;
        }else{
            $http.post('/api/comments/', $scope.comment).then(function(response){
                $scope.error = true;
                $scope.comment = {};
                $scope.getComments();
                $scope.comment = undefined;
                window.location.href = ('#!/');

            });   
    }
    }
}])

