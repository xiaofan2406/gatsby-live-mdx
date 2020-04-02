import React from 'react';
import { Link } from 'gatsby';

const linkClassName =
  'w-full block border-solid hover:text-purple-400 hover:border-r-2 hover:border-purple-400';

function Sidebar() {
  return (
    <aside className="fixed top-0 border w-48 h-screen py-16 z-10 bg-white">
      <nav className="top-16 flex flex-col py-6 w-full">
        <ol>
          <li className="mb-4 pl-6">
            <Link
              to="/"
              className={linkClassName}
              activeClassName="text-purple-400"
            >
              Home
            </Link>
          </li>

          <li className="mb-4 pl-6">
            <Link
              to="/live-editing"
              className={linkClassName}
              activeClassName="text-purple-400"
            >
              Live Editing
            </Link>
          </li>

          <li className="mb-4 pl-6">
            <Link
              to="/references"
              className={linkClassName}
              activeClassName="text-purple-400"
            >
              References
            </Link>
          </li>
        </ol>
      </nav>
    </aside>
  );
}

export default Sidebar;
