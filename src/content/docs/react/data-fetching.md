---
title: Data Fetching
---

```tsx
function App() {
  return (
    <ErrorBoundary fallback={<div>Error...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <DataFetchingComponent />
      </Suspense>
    </ErrorBoundary>
  )
}

const getDataPromise = getData("users")

function DataFetchingComponent() {
  const data = use(getDataPromise)

  return (
    <div>
      // ...
    </div>
  );
}

```
