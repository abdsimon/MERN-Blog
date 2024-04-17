// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css'; 

const App = () => {
  return (
   
      <div>
         <PostList />
         <PostForm />
         <Navbar />
      </div>
  
  );
};

export default App;