const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen('3000', () => {
    console.log('Server listening on port 3000');
});

app.get('/ping', function(req,res) {
    res.send('pong');
});

app.get('/feedback', function (req,res) {
    res.render('feedback', {
        pageTitle: 'Coca Cola',
        pageID: 'Home',
        user: { 
            name: 'Michael'
        }
    })
});