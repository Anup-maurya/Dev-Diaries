import { useEffect, useState } from "react";
import Posts from "../Components/Posts";
import Title from "../Components/Title";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <main>
      <Title />
      {posts.length > 0 &&
        // posts.map((post) => <Posts key={post._id} post={post} />)}
        posts.map((post) => <Posts key={post._id} post={post} />)}
    </main>
  );
};

export default IndexPage;
