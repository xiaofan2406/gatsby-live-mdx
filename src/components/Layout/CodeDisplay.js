import React from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'react-emotion';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { cssCode, cssBorder } from '../../styles';

const cssLive = css`
  margin-bottom: 24px;
  ${cssBorder};

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const cssEditable = css`
  ${cssCode};
  outline: 0;
  flex: 1;
  border-top: none;
  border-left: none;
  border-bottom: none;
`;

const cssEditor = css`
  ${cssCode};
  padding: 12px;
  ${cssBorder};
  border-radius: 2px;
  overflow: auto;
`;

const cssDisplay = css`
  flex: 1;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

const cssError = css`
  ${cssCode};
  color: #ff1717;
  font-size: 12px;
  padding: 12px;
`;

function CodeDisplay({ code, showEditor, previewAddon }) {
  return (
    <LiveProvider
      code={code}
      mountStylesheet={false}
      className={cx({ [cssLive]: showEditor })}
    >
      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
        `}
      >
        <LiveEditor
          contentEditable={showEditor}
          className={cx(cssEditor, { [cssEditable]: showEditor })}
        />
        {showEditor ? (
          <div className={cssDisplay}>
            <LivePreview />
            {previewAddon}
          </div>
        ) : null}
      </div>
      {showEditor ? <LiveError className={cssError} /> : null}
    </LiveProvider>
  );
}

CodeDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  showEditor: PropTypes.bool,
  previewAddon: PropTypes.node,
};

CodeDisplay.defaultProps = {
  showEditor: false,
  previewAddon: null,
};

export default CodeDisplay;
