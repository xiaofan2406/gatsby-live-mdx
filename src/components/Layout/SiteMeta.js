import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function SiteMeta({ title }) {
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Gatsby live mdx starter template' },
        { name: 'keywords', content: 'gatsby, react-live, mdx' },
      ]}
    >
      <html lang="en" />
    </Helmet>
  );
}

SiteMeta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SiteMeta;
