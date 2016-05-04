var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.sendfile('index.html');
});

app.post('/getuser', function(request, response) {
  console.log('--=-=-=-=');
  console.log(request.body);
  response.send(request.params.id);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
