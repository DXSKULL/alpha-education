import { useState } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import "./styles/styles.css"
function App() {  
  const [isLiked, setIsLiked] = useState(false)
 
  return (
    <div className="App">
      <Header/>
      <PostList
        isLiked={isLiked}
        setIsLiked={setIsLiked}
      />
    </div>
  );
}

export default App;
