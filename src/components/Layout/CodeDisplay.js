import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
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

function CodeDisplay({ code, editable, className, noInline }) {
  const language = className.replace('language-', '');
  const textareaId = 'live-editor-textarea';
  const editorPaneRef = React.useRef();

  return (
    <LiveProvider code={code} disabled={!editable} noInline={noInline}>
      <div className="flex border w-full mb-4">
        <div className="flex-1 relative font-mono" ref={editorPaneRef}>
          <LiveEditor
            className="text-sm"
            language={language}
            theme={theme}
            textareaId={textareaId}
            padding="1.25rem"
            style={{ fontFamily: 'inherit' }}
          />
          <button
            className="absolute top-0 right-0 bg-gray-700 text-xs text-white p-1"
            type="button"
            onClick={() => {
              if (editorPaneRef.current) {
                const textarea = editorPaneRef.current.querySelector(
                  `#${textareaId}`
                );
                safeCopy(textarea);
              }
            }}
          >
            Copy
          </button>
        </div>
        {editable ? (
          <div className="relative flex-1 p-5">
            <LivePreview />
            <LiveError className="absolute top-0 left-0 p-5 m-0 bg-gray-900 text-red-600 h-full w-full text-xs font-mono overflow-auto" />
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
