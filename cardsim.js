const express = require('express');
const hbs = require('hbs');
const hbsutils = require('hbs-utils')(hbs);

var app = express();
app.set('view engine', 'hbs');
hbsutils.registerPartials(__dirname + '/views/partials_static');
hbsutils.registerWatchedPartials(__dirname + '/views/partials_watched');

app.get('/',(req,res)=>{
    var date = new Date();
    res.render('index',{
        title: 'MyAwesomeGameToSim',
        year: date.getFullYear(),
        hasStyles: false,
        styles: [],
        hasScripts: false,
        scripts: []
    });
});

//Routes
require('./routes/war.js')(app);

app.listen(3000, function(){
    console.log('Server is listening!');
});