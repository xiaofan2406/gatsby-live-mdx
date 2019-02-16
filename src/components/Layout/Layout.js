import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXProvider } from '@mdx-js/tag';

import SiteMeta from './SiteMeta';
import Header from './Header';
import GlobalStyles from './GlobalStyles';
import Sidebar from './Sidebar';
import PreComponent from './PreComponent';
import { cssPageWidth, headerHeight, sidebarWidth } from '../../styles';

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
          <GlobalStyles />
          <SiteMeta {...siteMetadata} />
          <div
            css={css`
              min-height: calc(100vh - 18px);
              min-width: 480px;
              display: flex;
              flex-direction: column;
            `}
          >
            <Header title={siteMetadata.title} />
            <div
              css={css`
                ${cssPageWidth};
                margin: ${headerHeight}px 0 0 ${sidebarWidth}px;
                flex: 1;
                display: flex;
              `}
            >
              <Sidebar />
              <section
                css={css`
                  flex: 1;
                  padding: 24px;
                `}
              >
                <main
                  css={css`
                    width: 960px;
                    min-width: 960px;
                    margin: auto;
                  `}
                >
                  <MDXProvider components={{ pre: PreComponent }}>
                    {/* remove the extra div wrapping */}
                    <>{children.props.children}</>
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
