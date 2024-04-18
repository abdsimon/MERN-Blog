const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const { title, content } = req.body;
    console.log(title, content);
    const newPost = new Post({ title, content });

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:blogId').get((req, res) => {
    const {blogId} = req.params;
    const blog = Post.findById(blogId)
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

