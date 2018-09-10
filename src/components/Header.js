import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import { cssPageWidth, headerHeight } from '../styles';

function Header({ title }) {
  return (
    <header
      className={css`
        box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
        position: fixed;
        top: 0;
        background-color: rgba(255, 255, 255, 0.975);
        height: ${headerHeight}px;
        width: 100%;
      `}
    >
      <div
        className={css`
          ${cssPageWidth};
          height: 100%;
          display: flex;
          align-items: center;
        `}
      >
        <h1
          className={css`
            margin: 0;
          `}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            {title}
          </Link>
        </h1>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
