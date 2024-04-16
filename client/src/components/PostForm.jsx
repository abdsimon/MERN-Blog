// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';



const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to add a new post
    axios.post('http://localhost:6000/posts/add', { title, content })
      .then(response => {
        console.log(response.data);
        // Clear the form fields after successfully adding the post
        setTitle('');
        setContent('');
      })
      .catch(error => {
        console.error('Error adding post:', error);
      });
  };

  return (
    <div>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
