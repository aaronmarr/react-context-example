import React from 'react';

import './Profile.css';

const Profile = ({ currentUser }) => (
  <div class="profile">
    <h3>{currentUser.firstName} {currentUser.lastName}</h3>
    <p>{currentUser.bio}</p>
  </div>
);

export default Profile;