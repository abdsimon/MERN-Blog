// eslint-disable-next-line no-unused-vars
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AdminForm from "./pages/admin";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Blog from "./pages/blog";
// Pages

// Home ==>  PostList

// Admin ==> PostForm

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
