import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const cssLive = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const cssEditor = css`
  width: 480px;
  padding: 24px;
  position: relative;
  margin: 0;
`;

const cssPreview = css`
  padding: 24px;
  width: 396px;
  background-color: #fafafa;
`;

function PreComponent({ children }) {
  const showInteractive =
    children.props.props && !children.props.props.className.endsWith('-static');

  return (
    <LiveProvider
      code={children.props.children}
      mountStylesheet={false}
      className={showInteractive ? cssLive : ''}
    >
      <LiveEditor
        contentEditable={showInteractive}
        className={showInteractive ? cssEditor : ''}
      />
      {showInteractive ? <LiveError /> : null}
      {showInteractive ? <LivePreview className={cssPreview} /> : null}
    </LiveProvider>
  );
}

PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreComponent;
