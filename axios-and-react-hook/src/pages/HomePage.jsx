import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";
export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/blog-posts");

        setPosts(response.data.blogs);
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="title">React. Lesson 10: Additional tools</h1>
      <div className="grid">
        {posts.map((post) => (
          <p>{post.title}</p>
        ))}
      </div>
    </div>
  );
}
