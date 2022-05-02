import { useEffect, useState } from "react";
const Post = () => {
  const [posts, setPosts] = useState([]);
  const [count, setCount] = useState(0);

  const getPosts = () => {
    console.log("calling Api");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };

  useEffect(() => {
    getPosts();
  }, [count]);

  const postList = posts.map((postItem, index) => <li key={postItem.id}>{postItem.title}</li>);

  return (
    <>
      {console.log("rendering ui")}
      <h1>POst Complete</h1>
      <h1> {count} </h1> <button onClick={() => setCount(count + 1)}>increment</button>
      {postList.length > 0 && postList}
    </>
  );
};

export default Post;
