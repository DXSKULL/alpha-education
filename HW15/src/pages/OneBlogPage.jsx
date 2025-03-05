import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import Error from "../components/shared/Error"

const OneBlogPage = () => {
  const [blogPost, setBlogPost] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
        );
        const data = await response.json();
        console.log(data.blog);
        setBlogPost(data.blog);
      } catch (error) {
        setError(true);
        console.log("Error: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogPost();
  }, [id]);

  return (
    <div className="one-blog">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <h2 className="one-blog__title">{blogPost.title}</h2>
          <img src={blogPost.photo_url} alt="" className="one-blog__img" />
          <div className="one-blog__content-text">{blogPost.content_text}</div>
          <p className="one-blog__category">#{blogPost.category}</p>
        </>
      )}
    </div>
  );
};

export default OneBlogPage;
