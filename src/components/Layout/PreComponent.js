import React from 'react';
import PropTypes from 'prop-types';
import CodeDisplay from './CodeDisplay';

function PreComponent({ children }) {
  return (
    <CodeDisplay
      code={children.props.children}
      editable={children.props.editable}
    />
  );
}

PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreComponent;
