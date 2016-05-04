
//Библиотеки

//Либа для обслуживания страницы index.html
var express = require('express');

//Штука для обработки запросов со стороны клиента
var bodyParser = require('body-parser');

// Объявление создания приложия
var app = express();

// Либа для работы с VK
var vk_api = require('vk-api');


//Штука что бы делать кросс-доменные запросы.
var cors = require('cors');


// Указание порта обслуживания - 5000. "localhost:5000". Можешь указать любой другой.
app.set('port', (process.env.PORT || 5000));

// Использование cors - что бы любые запросы присланные не с текущего домена были обработаны.
app.use(cors());

//Штука для использования body parse. Что бы можно было данные использовать в JSON виде
app.use(bodyParser.json());

// Штука для обслуживания статики - файлы стилей, js файлы
app.use(express.static(__dirname + '/public'));

// Когда заходим по адресу localhost:5000 сервер отдает index.html страницу
app.get('/', function(request, response) {
  response.sendfile('index.html');
});
// Когда посылаем post запрос на localhost:5000/getuser - Он посылает запрос на VK и отдает ответ на index.html
app.post('/getuser', function(request, response) {


  var body = request.body;
  //body.id - id вбитого  нами пользователя на страницу
  if (body.id){

    //Данные для vk
    var VK = new vk_api({appID: 'appid', appSecret: 'app secret'});

    //Запрос на VK с указанием параметров. Что бы понять как это работает, тебе нужно будет пролистать
    //документацию VK API. Прям так и загугли
    VK.api('users.get', {user_ids: body.id, fields: "nickname,screen_name,sex,bdate,city,country,photo,photo_medium,photo_big,contacts,education,online,counters"}, function(err,result) {
      response.json(result.response);
    });
  } else{
    //Если не вбили user id  - отправиь ошибку
    response.send('id error');
  }


});


//Это указывает приложение слушать 5000 порт.
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
