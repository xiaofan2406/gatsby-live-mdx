import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { css } from 'react-emotion'
import { MDXProvider } from '@mdx-js/tag'

import Header from './Header'
import PreComponent from './PreComponent'

const cssLayout = css``

const cssMain = css`
  margin-left: 240px;
`

const cssMainSection = css`
  margin: auto;
  width: 1020px;
  padding: 36px 72px 72px 72px;
`

const Layout = ({ children }) => (
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
        <div className={cssLayout}>
          <Header title={siteMetadata.title} />
          <main className={cssMain}>
            <MDXProvider components={{ pre: PreComponent }}>
              <section className={cssMainSection}>{children}</section>
            </MDXProvider>
          </main>
        </div>
      </>
    )}
  </StaticQuery>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
