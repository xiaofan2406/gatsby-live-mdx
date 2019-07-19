# react-live

You can configure `react-live` in `src/components/CodeDisplay`;

By default block code are not editable.

You can choose to render an editable block wrapping with `<Editor>` component, e.g.

````jsx
#### Some heading

<Editor>

```jsx
// code here will be editable
```

</Editor>
````

You can change the behavior or add new flags by editing `Editor` component.
