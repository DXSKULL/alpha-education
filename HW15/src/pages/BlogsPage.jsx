import React from "react";
import BlogsList from "../components/blogs/BlogsList";

const BlogsPage = () => {
  return (
    <div className="blogs">
      <h1 className="title">Blogs</h1>

      <BlogsList/>
    </div>
  );
};

export default BlogsPage;
