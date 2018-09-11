import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { cssHoverableBox, cssCode } from '../styles';

const cssLive = css`
  margin-bottom: 24px;
  ${cssHoverableBox};
`;

const cssEditor = css`
  ${cssCode};
  outline: 0;
  flex: 1;
  margin: 0;
  overflow: auto;
  padding: 12px;
  border-radius: 2px;
`;

const cssNonEditable = css`
  ${cssCode};
  padding: 12px;
  border: 1px solid #efefef;
  border-radius: 2px;
`;

const cssPreview = css`
  flex: 1;
  padding: 12px;
`;

const cssError = css`
  ${cssCode};
  color: #ff1717;
  font-size: 12px;
  padding: 12px;
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
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <LiveEditor
          contentEditable={showInteractive}
          className={showInteractive ? cssEditor : cssNonEditable}
        />
        {showInteractive ? <LivePreview className={cssPreview} /> : null}
      </div>
      {showInteractive ? <LiveError className={cssError} /> : null}
    </LiveProvider>
  );
}

PreComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PreComponent;
