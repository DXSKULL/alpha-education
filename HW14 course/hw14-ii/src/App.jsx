import React from "react";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <h1>Лента постов</h1>
      <PostList />
    </div>
  );
};

export default App;
