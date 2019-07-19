import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function SiteMeta({ title }) {
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
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
