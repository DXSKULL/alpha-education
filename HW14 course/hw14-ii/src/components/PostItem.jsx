import React from "react";
import LikeButton from "./LikeButton";

const PostItem = ({ post }) => {
  return (
    <div style={styles.post}>
      <div style={styles.header}>
        <img src={post.profilePicture} alt="Avatar" style={styles.avatar} />
        <strong>{post.author}</strong>
      </div>
      <img src={post.imageUrl} alt="Post" style={styles.image} />
      <p>{post.text}</p>
      <LikeButton />
      <div>
        {post.tags.map((tag, index) => (
          <span key={index} style={styles.tag}>#{tag} </span>
        ))}
      </div>
    </div>
  );
};

const styles = {
  post: { border: "1px solid #ccc", padding: "10px", marginBottom: "10px" },
  header: { display: "flex", alignItems: "center", gap: "10px" },
  avatar: { width: "40px", height: "40px", borderRadius: "50%" },
  image: { width: "100%", borderRadius: "5px" },
  tag: { color: "blue", marginRight: "5px" },
};

export default PostItem;
