import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { css } from 'react-emotion';
import { MDXProvider } from '@mdx-js/tag';

import { cssPageWidth, headerHeight, sidebarWidth } from '../styles';
import Header from './Header';
import Sidebar from './Sidebar';
import PreComponent from './PreComponent';

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
              min-width: 480px;
              display: flex;
              flex-direction: column;
            `}
          >
            <Header title={siteMetadata.title} />
            <div
              className={css`
                ${cssPageWidth};
                margin: ${headerHeight}px 0 0 ${sidebarWidth}px;
                flex: 1;
                display: flex;
              `}
            >
              <Sidebar />
              <section
                className={css`
                  flex: 1;
                  padding: 24px;
                `}
              >
                <main
                  className={css`
                    width: 960px;
                    min-width: 960px;
                    margin: auto;
                  `}
                >
                  <MDXProvider components={{ pre: PreComponent }}>
                    {children}
                  </MDXProvider>
                </main>
              </section>
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
