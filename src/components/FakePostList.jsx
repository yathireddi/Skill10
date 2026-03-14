import { useState, useEffect } from "react";
import axios from "axios";

function FakePostList() {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("");

  const loadPosts = () => {
    axios.get("https://dummyjson.com/posts")
      .then((res) => {
        setPosts(res.data.posts);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const filteredPosts = filter
    ? posts.filter((p) => p.userId == filter)
    : posts;

  return (
    <div>
      <h2>Fake API Posts</h2>

      <button onClick={loadPosts}>Refresh</button>

      <br /><br />

      <label>Filter by User ID:</label>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>

      <ul>
        {filteredPosts.map((p) => (
          <li key={p.id}>
            <b>{p.title}</b>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakePostList;