import React from 'react';
import { UserConsumer } from './UserContext';

import './UserMenu.css';

class UserMenu extends React.Component {
  state = {
    menuVisible: false
  };

  avatarRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.hideMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.hideMenu);
  }

  hideMenu = e => {
    // Ignore clicks on the avatar
    // so that the menu can open
    if (e.target !== this.avatarRef.current) {
      this.setState({ menuVisible: false });
    }
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuVisible: !state.menuVisible
    }));
  };

  render() {
    return (
      <UserConsumer>
        {({ onLogout, user }) => (
          <div>
            {user && (
              <div className="user-menu">
                <span>Do-list</span>
                <img
                  className="avatar"
                  alt="User avatar"
                  src={user.avatar}
                  onClick={this.toggleMenu}
                  ref={this.avatarRef}
                />
                {this.state.menuVisible && (
                  <ul>
                    <li onClick={onLogout}>Logout</li>
                  </ul>
                )}
              </div>
            )}
          </div>
        )}

      </UserConsumer>
    )
  };
}

export default UserMenu;