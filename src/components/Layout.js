import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { css } from 'react-emotion';
import { MDXProvider } from '@mdx-js/tag';

import { cssPageWidth, headerHeight } from '../styles';
import Header from './Header';
import PreComponent from './PreComponent';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
    >
      {({ site: { siteMetadata } }) => (
        <>
          <Helmet
            title={siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <div
            className={css`
              min-height: calc(100vh - 18px);
              display: flex;
              flex-direction: column;
            `}
          >
            <Header title={siteMetadata.title} />
            <div
              className={css`
                ${cssPageWidth};
                margin-top: ${headerHeight}px;
                flex: 1;
                display: flex;
              `}
            >
              <Sidebar />
              <MDXProvider components={{ pre: PreComponent }}>
                <main
                  className={css`
                    flex: 1;
                    padding: 24px 48px;
                  `}
                >
                  {children}
                </main>
              </MDXProvider>
            </div>
          </div>
        </>
      )}
    </StaticQuery>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
