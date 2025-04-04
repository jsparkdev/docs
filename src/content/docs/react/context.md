---
title: Context
---

사용법

```tsx
import { createContext, use } from 'react';

const ThemeContext = createContext<Theme>('light');

function MyPage() {
  return (
    <ThemeContext value="dark">
      <Form />
    </ThemeContext>
  );
}

function useTheme() {
  const theme = use(ThemeContext);
  if (!theme) {
    throw new Error('ThemeContext is not provided');
  }
  return theme;
}

function Form() {
  const theme = useTheme();
  return <button className={theme} />;
}
```
