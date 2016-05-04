var app = angular.module('app', ['ngMaterial'])

angular.element(document).ready(function(){
	angular.bootstrap(document, ["app"]);
})

app.controller('appCtrl', function ($scope, $http) {

  $scope.user = undefined;
  $scope.loading = false;

  $scope.getData = function(){
    if ($scope.userid){
      $scope.loading = true;
      $http.post("https://evening-citadel-38451.herokuapp.com/getuser", {id: $scope.userid}).then(function(data){
        $scope.user = data.data[0];
        console.log($scope.user);
        $scope.loading = false;
      }, function(){
        $scope.loading = false;
        alert("Ошибка");
      })
    }

  }

})
