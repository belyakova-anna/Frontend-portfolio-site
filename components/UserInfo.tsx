import React from 'react';

const UserInfo: React.FC = () => {
  return (
    <div className="content" data-testid="user-info">
      <h1>Anna Belyakova</h1>
      <ul>
        <li>Full-stack developer</li>
        <li>Competitive programmer</li>
      </ul>
    </div>
  );
};

export default UserInfo;
