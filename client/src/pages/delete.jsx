// DeletePost.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const DeletePost = () => {
    const { id } = useParams();
    const history = useHistory();

    const handleDelete = () => {
        // Send a DELETE request to delete the post
        fetch(`/api/posts/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            // Redirect to post list page after successful deletion
            history.push('/posts');
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h2>Delete Post</h2>
            <p>Are you sure you want to delete this post?</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeletePost;
