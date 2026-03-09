import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading API users...</p>;

  return (
    <div>
      <h2>Users API</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} | {u.email} | {u.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;