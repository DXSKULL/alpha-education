import React, { useState, useEffect, use } from "react";
import BlogItem from "./BlogItem";
import Loader from "../shared/Loader";

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.slingacademy.com/v1/sample-data/blog-posts?limit=20"
        );
        const data = await response.json();
        setBlogs(data.blogs);
      } catch (error) {
        setError(true);
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <BlogItem
              key={blog.id}
              blogImg={blog.photo_url}
              blogTitle={blog.title}
              blogDesc={blog.description}
              linkId={blog.id}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogsList;
