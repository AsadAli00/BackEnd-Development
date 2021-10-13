const express = require('express');

const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/', (req,res)=>{
    res.cookie('myFirstCookie', 'looks Good');
    res.send('cookies.....!')
})
app.get('/clearCookie', function (req, res) {
    res.clearCookie('myFirstCookie');
    res.send('Cookies Removed');
});

app.listen(3000, function () {
    console.log(`Express Server Started on: http://localhost:3000`);
});