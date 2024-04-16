// routes/posts.js
const router = require('express').Router();
let Post = require('../models/post.model');

// Get all posts
router.get('/', (req, res) => {
    Post.find()
      .then(posts => res.json(posts))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Add a new post
router.route('/add').post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const newPost = new Post({ title, content });

  newPost.save()
    .then(() => res.json('Post added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
