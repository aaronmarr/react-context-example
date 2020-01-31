import React from 'react';
import UserMenu from './UserMenu';

const Header = ({ currentUser, onLogout }) => (
  <UserMenu currentUser={currentUser} onLogout={onLogout} />
);

export default Header;