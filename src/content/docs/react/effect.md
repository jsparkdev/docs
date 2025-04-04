---
title: side effect
---

브라우저에서 앞, 뒤로 이동할 때마다 실행해야 하는 작업이 있을거임. 

이런건 어쩔수 없이 useEffect를 사용해야 함.

컴포넌트 렌더링 후 이벤트를 달아야 하기 때문

(다음 코드는 단순히 예시 코드입니다.)

```tsx
import { useEffect } from 'react';

function App() {
  const [query, setQuery] = useState(getQueryParam);
  
  function handlePopState() {
    setQuery(getQueryParam());
  }

  useEffect(() => {
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
}
```

근데 useEffect는 되도록이면 사용 ㄴㄴ

- ref 콜백 쓰던가 
- flushSync랑 이벤트리스너 조합하던가
- css로 해결하던가
- useSyncExternalStore 쓰던가
