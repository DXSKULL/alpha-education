import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "20px",
        color: liked ? "red" : "gray",
      }}
    >
      <FaHeart />
    </button>
  );
};

export default LikeButton;
