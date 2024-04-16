// eslint-disable-next-line no-unused-vars
import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css'; 

const App = () => {
  return (
   
      <div>
         <PostList />
         <PostForm />
      </div>
  
  );
};

export default App;