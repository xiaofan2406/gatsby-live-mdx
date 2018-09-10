import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';

import { sidebarWidth, headerHeight, textColor, themeColor } from '../styles';

export const cssNavLink = css`
  font-size: 18px;
  text-decoration: none;
  margin: 6px 0;
  padding: 6px 0;
  color: ${textColor};
  position: relative;

  &:hover {
    color: ${themeColor};
  }
`;

export const cssActiveNavLink = css`
  border-right: 4px solid ${themeColor};
`;

function Sidebar() {
  return (
    <aside
      className={css`
        min-width: ${sidebarWidth}px;
        width: ${sidebarWidth}px;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #e8e8e8;
      `}
    >
      <nav
        className={css`
          position: sticky;
          top: ${headerHeight}px;
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-top: 24px;
        `}
      >
        <Link to="/" className={cssNavLink} activeClassName={cssActiveNavLink}>
          Home
        </Link>
        <Link
          to="/page-2"
          className={cssNavLink}
          activeClassName={cssActiveNavLink}
        >
          Page 2
        </Link>
      </nav>
      <footer>footer</footer>
    </aside>
  );
}

export default Sidebar;
