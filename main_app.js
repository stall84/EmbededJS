
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen('3000', () => {
    console.log('Hello_World server running on port 3000');
});

app.get('/', (req,res) => {
    res.render('helloWorld', {
        pageTitle: 'Hello WORLD!'
    });
});

app.get('/cats', (req,res) => {
    res.render('Animals', {
        animalSound: 'MEOW!!'
    });
});

app.get('/dogs', (req,res) => {
    res.render('Animals', {
        animalSound: 'WOOOOF!'
    });
});

app.get('/cats_and_dogs', (req,res) => {
    res.render('Animals', {
        animalSound: 'Living Together'
    });
});