import React from 'react';
import { css, Global } from '@emotion/core';
import { textColor } from '../styles';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          overflow-y: scroll;
        }
        h1 {
          margin-top: 0;
        }
        body {
          color: ${textColor};
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        pre,
        code {
          margin: 0;
          background-color: #e8e8e8;
        }
        code {
          padding: 2px 4px;
        }
      `}
    />
  );
}

export default GlobalStyles;
