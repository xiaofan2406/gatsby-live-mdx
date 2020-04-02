import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import SiteMeta from './SiteMeta';
import Header from './Header';
import Sidebar from './Sidebar';
import CodeDisplay from './CodeDisplay';

function PreComponent({ children }) {
  const { children: code, ...rest } = children.props;
  return <CodeDisplay code={code.trim()} {...rest} />;
}
PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const components = {
  pre: PreComponent,
};

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
          <SiteMeta {...siteMetadata} />
          <div className="flex flex-col min-h-screen">
            <Header title={siteMetadata.title} />
            <Sidebar />
            <section className="flex-1 pt-16 pl-48" style={{ minWidth: 1280 }}>
              <main className="pt-6 m-auto mb-16" style={{ width: 1028 }}>
                <MDXProvider components={components}>{children}</MDXProvider>
              </main>
            </section>
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
