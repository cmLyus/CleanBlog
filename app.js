const express = require('express');
const ejs = require('ejs');

const app = express();

// Middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    
    res.render('index');
});

app.get('/about', (req, res) => {
    
    res.render('about');
});

app.get('/post', (req, res) => {
    
    res.render('post');
});

app.get('/add_post', (req, res) => {
    
    res.render('add_post');
});



const port = 3000;
app.listen(port, () => {
    console.log(`Server ${port} portunda çalıştırıldı...`);
});