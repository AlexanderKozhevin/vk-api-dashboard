var app = angular.module('app', ['ngMaterial'])

angular.element(document).ready(function(){
	angular.bootstrap(document, ["app"]);
})

app.controller('appCtrl', function ($scope, $http) {

  $scope.user = undefined;

  $scope.getData = function(){
    if ($scope.userid){
      $http.post("https://evening-citadel-38451.herokuapp.com/getuser", {id: $scope.userid}).then(function(data){
        $scope.user = data[0];
      })
    }

  }

})
