const express = require('express');
const exphlb = require('express-handlebars');
const items = require('./items');
const PORT = process.env.PORT || 8080;
const app = express();

app.engine('handlebars',exphlb({defaultLayout : 'main'}));
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
    res.render('home',{items});
});

app.get('/cards',(req,res)=>{
    res.render('card',{items});
});

app.get('/lists',(req,res)=>{
    res.render('list',{items});
});

app.listen(PORT , ()=>{ console.log(`Server is running on port ${PORT}`);
})
