/* eslint-disable no-unused-vars */
// EditPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const history = useHistory();
    const [post, setPost] = useState({ title: '', content: '' });

    useEffect(() => {
        fetch(`/api/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    const handleChange = event => {
        const { name, value } = event.target;
        setPost(prevPost => ({
            ...prevPost,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Send a PUT request to update the post
        fetch(`/api/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(() => {
            // Redirect to post list page after successful update
            history.push('/posts');
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h2>Edit Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={post.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea name="content" value={post.content} onChange={handleChange} />
                </div>
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default EditPost;
