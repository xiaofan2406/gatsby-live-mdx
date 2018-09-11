import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';

import { sidebarWidth, textColor, themeColor } from '../styles';

export const cssNavLink = css`
  font-size: 18px;
  text-decoration: none;
  margin: 6px 0;
  padding: 6px 24px;
  color: ${textColor};
  position: relative;

  &:hover {
    color: ${themeColor};
    border-right: 4px solid ${themeColor};
  }
`;

export const cssActiveNavLink = css`
  color: ${themeColor};
  border-right: 4px solid ${themeColor};
`;

function Sidebar() {
  return (
    <aside
      className={css`
        min-width: ${sidebarWidth}px;
        width: ${sidebarWidth}px;
        position: fixed;
        left: 0;
        height: 100%;
        background-color: #f8f8f8;
        border-right: 1px solid #e8e8e8;
      `}
    >
      <nav
        className={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-top: 12px;
        `}
      >
        <Link to="/" className={cssNavLink} activeClassName={cssActiveNavLink}>
          Home
        </Link>
        <Link
          to="/mdx"
          className={cssNavLink}
          activeClassName={cssActiveNavLink}
        >
          MDX
        </Link>
        <Link
          to="/react-live"
          className={cssNavLink}
          activeClassName={cssActiveNavLink}
        >
          React Live
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
