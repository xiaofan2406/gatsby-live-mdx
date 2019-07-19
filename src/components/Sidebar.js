import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import { sidebarWidth, textColor, themeColor } from '../styles';

export const cssNavLink = css`
  font-size: 18px;
  text-decoration: none;
  margin: 6px 0;
  padding: 6px 24px;
  color: ${textColor};
  position: relative;
  z-index: 2;

  &:hover {
    color: ${themeColor};
    border-right: 4px solid ${themeColor};
  }

  &.active {
    color: ${themeColor};
    border-right: 4px solid ${themeColor};
  }
`;

export const cssActiveNavLink = css``;

function Sidebar() {
  return (
    <aside
      css={css`
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
        css={css`
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-top: 12px;
        `}
      >
        <Link to="/" css={cssNavLink} activeClassName="active">
          Home
        </Link>
        <Link to="/live-editing" css={cssNavLink} activeClassName="active">
          Live Editing
        </Link>
        <Link to="/references" css={cssNavLink} activeClassName="active">
          References
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
