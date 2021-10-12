const express = require('express');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req,res){
    res.sendFile('index.html', {root: __dirname});
})

app.post('/user',function(req,res){
    console.log('req.body',req.body);
    res.end(JSON.stringify(req.body))
})

//del method
// update method

app.listen(app.get('port'), function () {
    console.log(`Express Started on: http://localhost:${app.get('port')}`);
});