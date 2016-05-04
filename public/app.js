var app = angular.module('app', ['ngMaterial'])

angular.element(document).ready(function(){
	angular.bootstrap(document, ["app"]);
})

app.controller('appCtrl', function ($scope, $http) {

  $scope.getData = function(){
    $http.post("https://evening-citadel-38451.herokuapp.com/getuser", {id: 'denis.izmaylov'}).then(function(data){
      console.log(data);
    })
  }

})
