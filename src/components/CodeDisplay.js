import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// eslint-disable-next-line import/no-extraneous-dependencies
import theme from 'prism-react-renderer/themes/oceanicNext'; // included by react-live

function clearSelection() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}

function safeCopy(textarea) {
  const { disabled } = textarea;
  textarea.disabled = false;
  textarea.focus();
  textarea.select();

  try {
    const successful = document.execCommand('copy');
    console.log(`Copying was ${successful ? 'successful' : 'unsuccessful'}`);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  textarea.disabled = disabled;
  clearSelection();
}

const cssWrapper = css`
  display: flex;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  margin-top: 1em;
  margin-bottom: 1em;

  &:hover {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.3s ease-in-out;
  }
`;

const cssEditorPane = css`
  flex: 1;
  position: relative;
`;

const cssLiveEditor = css`
  flex: 1;
  font-size: 14px;
  line-height: 1.4;

  & > textarea,
  pre {
    outline: 0;
    padding: 1em;
  }
`;

const cssCopyAction = css`
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 10px;
  padding: 0.4em;
  color: #fff;
  outline: 0;
  cursor: pointer;
`;

const cssPreviewPane = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const cssError = css`
  margin: 0;
  color: #ff1717;
  font-size: 12px;
  padding: 1em 2em;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.85);
`;

function CodeDisplay({ code, editable, className, noInline }) {
  const language = className.replace('language-', '');
  const textareaId = 'live-editor-textarea';
  const editorPaneRef = React.useRef();

  const handleCopy = () => {
    if (editorPaneRef.current) {
      const textarea = editorPaneRef.current.querySelector(`#${textareaId}`);
      safeCopy(textarea);
    }
  };

  return (
    <LiveProvider code={code} disabled={!editable} noInline={noInline}>
      <div css={cssWrapper}>
        <div css={cssEditorPane} ref={editorPaneRef}>
          <LiveEditor
            css={cssLiveEditor}
            language={language}
            theme={theme}
            textareaId={textareaId}
          />
          <button css={cssCopyAction} type="button" onClick={handleCopy}>
            Copy
          </button>
        </div>
        {editable ? (
          <div css={cssPreviewPane}>
            <LivePreview />
            <LiveError css={cssError} />
          </div>
        ) : null}
      </div>
    </LiveProvider>
  );
}

CodeDisplay.propTypes = {
  code: PropTypes.string.isRequired,
  className: PropTypes.string,
  editable: PropTypes.bool,
  noInline: PropTypes.bool,
};

CodeDisplay.defaultProps = {
  className: '',
  editable: false,
  noInline: false,
};

export default CodeDisplay;
