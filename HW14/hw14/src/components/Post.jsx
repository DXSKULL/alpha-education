import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Post = ({postText, postImage, postAuthor, postAuthorPic, postTags, isLastPost}) => {

    const [isLiked, setIsLiked] = useState(false)

    function handleClick() {
        setIsLiked(!isLiked)
    }

  return (
    <div className="post">
      <div className="post__header">
        <img
          className="post__author-img"
          src={postAuthorPic}
          alt="profile-image"
        />
        <p className="post__author">{postAuthor}</p>
      </div>
      <div className="post__img-container">
        <img
          src={postImage}
          alt="post-image"
          className="post__img"
        />
      </div>
      <div className="post__like-container">
        {
            isLiked ? <FaHeart className="post-like post-liked" onClick={handleClick} /> : <FaRegHeart className="post-like" onClick={handleClick}/>
        }
        
        
      </div>
      <div className="post__text-container">
        <p className="post__text">
          <span className="post__text-author">{postAuthor}</span>{" "}
          {postText}
        </p>
        <div className="post__tags-container">
          <div className="post__tags">{postTags.map(postTag => `#${postTag} `)}</div>
        </div>
      </div>
      {!isLastPost && <hr />}
    </div>
  );
};

export default Post;
