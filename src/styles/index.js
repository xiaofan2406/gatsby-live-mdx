import { css, injectGlobal } from 'react-emotion';

export const themeColor = '#663399';
export const textColor = 'rgba(0, 0, 0, 0.88)';

export const cssPageWidth = css`
  min-width: 480px;
`;

export const sidebarWidth = 240;
export const headerHeight = 72;

export const cssBorder = css`
  border: 1px solid #e8e8e8;
`;

export const cssCode = css`
  font-family: monospace;
  font-size: 14px;
  line-height: 1.4;
`;

// eslint-disable-next-line
injectGlobal`
  html {
    overflow-y: scroll;
  }

  h1 {
    margin-top: 0;
  }

  body {
    color: ${textColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  pre,
  code {
    margin: 0;
    background-color: #e8e8e8;
  }

  code {
    padding: 2px 4px;
  }
`;
