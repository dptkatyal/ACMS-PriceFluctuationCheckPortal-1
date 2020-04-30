import React from 'react';

import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
    
      <div className="toolbar__logo">
        <h>XYZ COMPANY</h>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Logout</a>
          </li>
          <li>
            <a href="/">WishList</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar