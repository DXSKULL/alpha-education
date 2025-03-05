import React from "react";
import {Link} from "react-router-dom"

const BlogItem = ({blogImg, blogTitle, blogDesc, linkId}) => {
  return (
    <Link to={`/blog/${linkId}`} className="blog">
      <img src={blogImg} alt={blogTitle} className="blog-img" />
      <h3 className="blog-title">{blogTitle}</h3>
      <p className="blog-desc">{blogDesc}</p>
    </Link>
  );
};

export default BlogItem;
