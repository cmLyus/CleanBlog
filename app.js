const express = require('express');
const mongoose = require('mongoose');
var methodOverride = require('method-override');
const ejs = require('ejs');
const Post = require('./models/Post');
const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');

const app = express();

//connect db
mongoose.connect('mongodb://localhost/cleanblog-test-db')

// Middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

// Routes
app.get('/', postController.getAllPosts);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPost);
app.get('/posts/:id', pageController.getPost);
app.post('/posts', postController.createPost);
app.get('/posts/edit/:id', pageController.getEditPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

const port = 3000;
app.listen(port, () => {
    console.log(`Server ${port} portunda çalıştırıldı...`);
});