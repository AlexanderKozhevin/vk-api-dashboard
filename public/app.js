
// Объявление приложения
var app = angular.module('app', ['ngMaterial'])


//Запустить приложения когда страница прогрузиться
angular.element(document).ready(function(){
	angular.bootstrap(document, ["app"]);
})


//Наш единственный контроллер который привязан к body (ng-controller="appCtrl")
app.controller('appCtrl', function ($scope, $http) {


	//$http стандартный модуль с помощью которого посылаются запросы на сервер

	//Переменная для хранение данных пользователя
  $scope.user = undefined;

	// Переменная для статуса загрузки - благодаря ему появляется крутилка на кнопке после нажатия.
  $scope.loading = false;


	//Функция получения данных
  $scope.getData = function(){
		// Проверяем что id пользователя заполнено
    if ($scope.userid){
			//Указываем что начался процесс загрузки
      $scope.loading = true;

			// Выполняем запрос на нашу серверную часть которая уже в свою очередь и делает запрос на VK.
			//"https://evening-citadel-38451.herokuapp.com/getuser" Адрес запроса. Можешь заменить на localhost:5000/getuser. 
			//Тоже будет работать. Сейчас это адрес моего сервера на heroku.

			//{id: $scope.userid} - Передаем параметры - в нашем случае просто id пользователя
      $http.post("https://evening-citadel-38451.herokuapp.com/getuser", {id: $scope.userid}).then(function(data){

				//Здесь мы получаем ответ от сервера когда запрос успешно обработан

				//Данные нашего пользователя - id которого мы вбили
        $scope.user = data.data[0];
				//Выводим для удобства еще и в консоль браузера (ПКМ -> просмотреть элемент -> Консоль)
        console.log($scope.user);
				//Указываем что процесс загрузки окончен
        $scope.loading = false;
      }, function(){

				//А это выполниться в случае, если сервер выдаст ошибку на наш запрос
        $scope.loading = false;
        alert("Ошибка");
      })
    }

  }

})
