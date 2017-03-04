module.exports = function(app){

    app.get('/war', (req,res)=>{
        var date = new Date();
        res.render('index.hbs',{
            title: 'War',
            year: date.getFullYear(),
            hasStyles: false,
            styles: [],
            hasScripts: false,
            scripts: [`<script type="text/javascript" src="/js/fun.js"></script>`]
        });
    });
}