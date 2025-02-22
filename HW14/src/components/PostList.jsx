import React from "react";
import PostItem from "./PostItem";

const posts = [
  {
    text: "Путешествие во времени всегда было одной из самых завораживающих тем для фантастов и ученых...",
    imageUrl: "https://i.pinimg.com/originals/72/2d/84/722d842b898acda53af139526c68b949.jpg",
    author: "time.explorer",
    profilePicture: "https://api.slingacademy.com/public/sample-users/1.png",
    tags: ["наука", "футуризм", "технологии", "этика"],
  },
  {
    text: "Искусственный интеллект продолжает развиваться...",
    imageUrl: "https://moretraveler.com/wp-content/uploads/2023/06/sa2-16.jpg",
    author: "ai_dreamer",
    profilePicture: "https://api.slingacademy.com/public/sample-users/2.png",
    tags: ["ИИ", "технологии", "этика"],
  },
];

const PostList = () => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
