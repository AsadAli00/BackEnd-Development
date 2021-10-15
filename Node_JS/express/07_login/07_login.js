const express = require('express');
const bodyParser = require('body-parser');
const sessions = require('express-session');


var session;


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use(sessions({
    secret: '&jh&B7H8^&^&*&^76FG&^f',
    esave: false,
    saveUninitialized: true
}));

// static folder
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile('index.html', {
        root: __dirname
    });
});



app.get('/login', (req,res)=>{
    session = req.session;
    if(session.uniqueID){
        res.redirect('redirects')
    }
    else{
        res.sendFile('login.html', {root: __dirname})
    }
});


app.post('/login',(req,res)=> {
    session = req.session;
    if(req.body.username == "admin" && req.body.password =="admin"){
        session.uniqueID = req.body.username;
    }
    else{
        res.redirect('/redirects')
    }
});

app.get('/redirects', (req,res)=>{
    session = req.session;
    if(session.uniqueID){
        res.redirect('/admin');
    
    }
    else{
        res.send('who are you??')
    }
});

app.get('/admin', function (req, res) {
    session = req.session;
    if (session.uniqueID) {
        res.send('Wow you are Admin.....!!  <a href="/logout">Logout</a>')
    } else {
        res.send('Who are you??');
    };
});
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        console.log('Err ', err);
        res.redirect('/login');
    });
});