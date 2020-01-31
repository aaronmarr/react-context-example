import React from 'react';
import UserMenu from './UserMenu';

const Header = ({ onLogout }) => (
  <UserMenu onLogout={onLogout} />
);

export default Header;