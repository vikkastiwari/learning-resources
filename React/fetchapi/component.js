import React, { useState, useEffect } from 'react';
import { fetchUser } from '../services/api';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUserData() {
      try {
        const userData = await fetchUser(userId);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    }
    getUserData();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Display other user details */}
    </div>
  );
}

export default UserProfile;
