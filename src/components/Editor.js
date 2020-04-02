import React from 'react';
import PropTypes from 'prop-types';

function Editor({ children, noEdit, noInline }) {
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    children: {
      ...child.props.children,
      // All the props there will be received by CodeDisplay
      props: {
        ...child.props.children.props,
        editable: !noEdit,
        noInline,
      },
    },
  });
}

Editor.propTypes = {
  children: PropTypes.node.isRequired,

  /* Disable live editing and preview. Used for syntax highlighting */
  noEdit: PropTypes.bool,

  /* react-live `noInline` prop. Use when render is complex with multiple components */
  noInline: PropTypes.bool,
};

Editor.defaultProps = {
  noEdit: false,
  noInline: false,
};

export default Editor;
