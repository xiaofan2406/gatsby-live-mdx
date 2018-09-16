import React from 'react';
import PropTypes from 'prop-types';
import CodeDisplay from './CodeDisplay';

function PreComponent({ children }) {
  const { children: code, ...rest } = children.props;
  return <CodeDisplay code={code} {...rest} />;
}

PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreComponent;
