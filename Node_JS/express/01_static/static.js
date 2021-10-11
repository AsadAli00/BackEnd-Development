const express = require('express');

const app = express();


app.use('port', process.env.PORT || 3000);


//static folder

app.use('/public',express.static(__dirname+ '/public'));


app.get('/', function (req, res) {
    // res.send('Express Works');
    res.sendFile(__dirname+'/public/index.html');
});