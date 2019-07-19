# Gatsby Live MDX

This gatsby template allows you to

- create website with live code editing and

- code syntax highlighting.

## Install

Make sure that you have the Gatsby CLI program installed:

```
yarn global add gatsby-cli
```

And run from your terminal:

```bash
gatsby new gatsby-live-mdx-example https://github.com/xiaofan2406/gatsby-live-mdx
```

## Demo

<Editor>

```jsx
() => {
  const message = 'Start typing!';

  return (
    <div>
      <span>{message}</span>
    </div>
  );
};
```

</Editor>
