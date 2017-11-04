myApp.controller('appCtrl', ['$scope', function($scope) {
  $scope.setActive = function (type) {
    $scope.homeActive = '';
    $scope.addStudentActive = '';
    $scope.manageClassActive = '';

    $scope[type + 'Active'] = 'active';
  }
$scope.webname = 'STU';
$scope.manage = false;
// $scope.listClasses = $scope.getClasses();

// console.log($scope.listClasses)
}])