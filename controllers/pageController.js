const Post = require('../models/Post');

exports.getAboutPage = (req, res) => {
    
    res.render('about');
}

exports.getAddPost = (req, res) => {
    
    res.render('add_post');
}

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {
        post
    });
}

exports.getEditPost = async (req, res) => {
    const post = await Post.findOne({_id: req.params.id})
    res.render('edit_post', {
        post,
    });
}