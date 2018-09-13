# react-live

You can configure `react-live` in `src/components/Layout/CodeDisplay`;

By default block code are not editable.

You can choose to render an editable block wrapping with `<Editable>` component, e.g.

````jsx
import Editable from '../components/Editable';

#### Editable

<Editable>

```jsx
// code here will be editable
```

</Editable>
````
