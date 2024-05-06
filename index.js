const express = require('express');
let ejs = require('ejs');

app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('EJS and Request Parameters');
})

const USERS = [
    {
        username: 'george',
        firstName: 'George',
        lastName: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        email: 'george.bluth@gmail.com'
    },
    {
        username: 'tracey',
        firstName: 'Tracey',
        lastName: 'Ramos',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        email: 'tracey.ramos@gmail.com'
    },
    {
        username: 'emma',
        firstName: 'Emma',
        lastName: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
        email: 'emma.wong@gmail.com'
    }
]

app.get('/users/:username', (req, res) => {
    const { username } = req.params
    const userDetails = USERS.find(user => user.username === username)

    if(userDetails){
        res.render('user', userDetails);
    } else {
        res.sendFile(__dirname + '/pages/not-found.html');
    }  
})

app.listen(3000, () => {
    console.log('Server is up :)');
})









/*
    # View engine/Template engine
    - EJS: Embedded JavaScript templating

    app.get('/resume/george', (req, res) => {
        res.render('resume', {
            firstName: 'George',
            lastName: 'Bluth',
            title: 'MERN Stack Developer',
            isGraduated: true,
            hobbies: ['Reading', 'Dancing', 'Swimming']
        });
    })

    app.get('/resume/charles', (req, res) => {
        res.render('resume', {
            firstName: 'Charles',
            lastName: 'Morris',
            title: 'Developer',
            isGraduated: false,
            hobbies: ['Coding']
        });
    })

    # Request Parameters: URL variables

    # Status Codes:
    - 404: Not Found
*/