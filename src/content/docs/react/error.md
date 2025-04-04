---
title: 에러바운더리
---

최상위 컴포넌트에 에러바운더리 씌우는거 권장

## 기본적으로 렌더링에러 처리방법

```tsx
import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';

function ErrorFallback(props: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{props.error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MyApp />
    </ErrorBoundary>
  );
}
```

## 기타 에러 처리 방법 (런타임 등)

기본적으로 에러바운더리는 렌더링 에러밖에 못잡음.

런타임 오류를 잡으려면 try, catch를 사용한다.

그리고 `showBoundary` 메서드를 사용해서 에러를 에러바운더리로 가져간다.

```tsx
import { 
  ErrorBoundary,
  useErrorBoundary,
  type FallbackProps 
} from 'react-error-boundary';

function MyApp() {
  const { showBoundary } = useErrorBoundary();
  
  return (
    <form
      onSubmit={(event) => {
        try {
          // ...
        } catch (error) {
          showBoundary(error);
        }
      }}
    >
      // ...
    </form>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MyApp />
    </ErrorBoundary>
  );
}
```

## 오류 발생 시 렌더링 다시 시도

resetErrorBoundary 메서드 사용

```tsx
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
```
