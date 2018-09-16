import React from 'react';
import PropTypes from 'prop-types';

function Editor({ children, disableEdit }) {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    children: {
      ...child.props.children,
      // All the props there will be received by CodeDisplay
      props: {
        ...child.props.children.props,
        showEditor: !disableEdit,
        ehllo: 'tru',
      },
    },
  });
}

Editor.propTypes = {
  children: PropTypes.node.isRequired,
  disableEdit: PropTypes.bool,
};

Editor.defaultProps = {
  disableEdit: false,
};

export default Editor;
