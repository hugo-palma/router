var app = require('express')();
var http = require('http').Server(app);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});
app.get('/chat.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
app.get('/vue', function(req, res){
    res.sendFile(__dirname + '/vue.html')
});
http.listen(80, function(){
    console.log('listening on *:80')
})
