import React from 'react';
import { Link, NavLink } from 'react-router-dom';
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>RESTy</h1>
        <nav>
        <ul>
          <li>
            <Link to="/resty/">Home</Link>
          </li>
          <li>
            <NavLink to="/resty/history">History</NavLink>
          </li>
        </ul>
      </nav>
      </header>
    );
  }
}

export default Header;
