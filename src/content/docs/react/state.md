---
title: State
---

변하는 데이터는 state와 연동시켜 관리 가능

```tsx
import React, { useState } from 'react';

function StateExample() {
  const [query, setQuery] = useState(0);

  return (
    <div>
      <input
        name="query"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
    </div>
  );
}
```

## 상태초기화

URL 검색매개변수에서 값 가져와서 그걸 query의 초기값으로 설정. 없으면 빈 문자열

이러면 특정 URL로 접속시 query의 초깃값을 원하는대로 설정 가능.

```tsx
function App() {
  const params = new URLSearchParams(window.location.search);
  const [query, setQuery] = useState(params.get('query') ?? '');

  return (
    <div>
      <input
        name="query"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
    </div>
  );
}
```

## 레이지 이니셜라이징

상태의 초깃값이 함수 호출로 얻어오는 값이라면, 해당 함수만 넘겨주면 됨. (호출없이)

만약 호출을 하게되면 컴포넌트가 렌더링될 때마다 호출되어 성능 낭비

그냥 함수만 제공하면 (호출없이) 최초 컴포넌트 렌더링 시에만 호출됨.

```tsx
function getQueryParam()  {
  const params = new URLSearchParams(window.location.search);
  return params.get('query') ?? '';
};

function App() {
  const [query, setQuery] = useState(getQueryParam);

  return (
    <div>
      <input
        name="query"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
    </div>
  );
}
```

- 여러 하위 컴포넌트에서 사용되는 상태는 상위 컴포넌트로 올리기, 그리고 props로 뿌리기
