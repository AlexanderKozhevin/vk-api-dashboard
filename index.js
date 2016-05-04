var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var vk_api = require('vk-api');

app.set('port', (process.env.PORT || 5000));


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.sendfile('index.html');
});

app.post('/getuser', function(request, response) {

  var body = request.body;

  if (body.id){
    var VK = new vk_api({appID: '5447511', appSecret: 'tX3yFmPtgjHr27Td4UYJ'});
    VK.api('users.get', {user_ids: body.id, fields: "nickname,screen_name,sex,bdate,city,country,photo,photo_medium,photo_big,contacts,education,online,counters"}, function(err,result) {
      response.json(result.response);
    });
  } else{
    response.send('id error');
  }


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
