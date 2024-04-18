// eslint-disable-next-line no-unused-vars
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

// Pages

// Home ==>  PostList

// Admin ==> PostForm

const NotFound = () => <div>Not found 404</div>;

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/admin" element={<PostForm />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
