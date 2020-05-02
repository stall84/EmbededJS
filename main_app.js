
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen('3000', () => {
    console.log('Hello_World server running on port 3000');
});

// Express Exercise 1
app.get('/', (req,res) => {
    res.render('helloWorld', {
        pageTitle: 'Hello WORLD!'
    });
});

// 2nd part of Exercise 1
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

// testing out accessing nested objects
app.get('/nested-doggo', (req,res) => {
    res.render('dog-info', {
        dog_breed: {
            schnauzer: {
                name1: 'Carl',
                name2: 'Von',
                name3: 'Clauswitz'
            },
            retriever: {
                name1: 'Sandy',
                name2: 'Goldie',
                name3: 'Getter'
            },
            chihuaua: {
                name1: 'Duncan',
                name2: 'Chicho',
                name3: 'Pedro'
            }

        }
    })
});

// Route parameters part of Exercise 1: Create a greeting for a URI specific user

app.get('/greet/Kennedy', (req,res) => {
    res.render('Users', {
        userName: 'Kennedy'
    })
});

app.get('/greet/Jamison', (req,res) => {
    res.render('Users', {
        userName: 'Jamison'
    })
});

app.get('/greet/Manny', (req,res) => {
    res.render('Users', {
        userName: 'Manny'
    })
})

// Query parameters: return year born when user inputs age in query param in url
// this is actually fkn awesome
app.get('/hello', (req,res) => {
    let name = req.query.name;
    res.render('Users', {
        userName: name
    })
});

app.get('/year', (req,res) => {
    let yearsOld = req.query.age;
    let year = (2020 - yearsOld)
    res.render('Ager', {
        birthYear: year
    })
    
});

app.get('/profile/:name', (req,res) => {
    res.send('You are looking at the profile of: ' + req.params.name);
});

app.get('/home', (req,res) => {
    res.render('landing');
});

app.get('/home/user', (req,res) => {
    res.render('landing', {
        userName: req.query.name
    })
});

// setting a template header 
app.get('/header', (req,res) => {
    res.render('header', {
        header: 'header'
    })
});