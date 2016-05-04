var app = angular.module('app', ['ngMaterial'])

angular.element(document).ready(function(){
	angular.bootstrap(document, ["app"]);
})

app.controller('appCtrl', function ($scope, $http) {

  $scope.getData = function(){
    $http.post("https://evening-citadel-38451.herokuapp.com/getuser", {id: 100500}).then(function(data){
      console.log(data);
    })
  }

})
