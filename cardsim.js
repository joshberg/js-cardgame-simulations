const express = require('express');
const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);

var app = express();
app.set('view engine', 'hbs');
hbsutils.registerPartials(__dirname + '/views/partials_static');
hbsutils.registerWatchedPartials(__dirname + '/views/partials_watched');

app.get('/',(req,res)=>{
    res.render('index',{
        title: 'MyAwesomeGameToSim'
    });
});

app.listen(3000, function(){
    console.log('Server is listening!');
});