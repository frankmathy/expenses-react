import React, { useState, useEffect } from 'react';
import './UserList.css';
import axios from '../api/axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/users');
      setUsers(req.data);
    }
    fetchData();
  });

  return (
    <div>
      <h1>Userlist</h1>
      {users.map(user => (
        <p>
          {user.firstName} {user.lastName}
        </p>
      ))}
    </div>
  );
}

export default UserList;
