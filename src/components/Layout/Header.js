import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

function Header({ title }) {
  return (
    <header className="fixed top-0 z-20 h-16 w-screen shadow px-6 py-1 flex justify-between items-center bg-white">
      <Link to="/" className="text-purple-500 text-3xl">
        {title}
      </Link>
      <a
        href="https://github.com/xiaofan2406/gatsby-live-mdx"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-500"
      >
        Github
      </a>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
