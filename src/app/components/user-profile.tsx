// src/components/UserProfile.tsx
import React from 'react';

const UserProfile: React.FC<{ username: string }> = ({ username }) => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      {/* Display additional user information here */}
    </div>
  );
};

export default UserProfile;
