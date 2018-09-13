import React from 'react';
import PropTypes from 'prop-types';

function Editable({ children }) {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    children: {
      ...child.props.children,
      props: {
        ...child.props.children.props,
        editable: true,
      },
    },
  });
}

Editable.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Editable;
