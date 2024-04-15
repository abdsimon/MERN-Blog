import React, { useState, useEffect } from 'react';
import axios from 'axios';
const PostList= () => {
    const [posts, setPosts] = useState([]); 


return(
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );



export default PostList;