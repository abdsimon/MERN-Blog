// eslint-disable-next-line no-unused-vars
import React, {useEffect , useState} from 'react'
import axios from "axios";
import baseUrl from "../config/api";
import {useParams} from 'react-router-dom'

export default function Blog() {

    const {blogId} = useParams()
    const [post, setPost] = useState()

    useEffect(()=> {
     // fetch a post with id 'blogId'

     axios
     .get(baseUrl + "/posts/"+blogId)
     .then((response) => {
       setPost(response.data);
     })
     .catch((error) => {
       console.error("Error fetching posts:", error);
     });

    },[])

    if(!post) return <div>Blog not found</div>

  return (
    <div className='blog'>
      {post?.image && <img src={post.image}/>}
        <h1>{post.title}</h1>
        <time>{post.date}</time>
        <p>{post.content}</p>
    </div>
  )
}
