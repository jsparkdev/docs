---
title: Ref
---

ref 콜백의 인자는 해당 DOM 노드 또는 null임.

즉, 해당 노드의 존재 여부에 따라 여러 작업 가능.

그리고 해당 노드가 제거될때 수행할 클린업 함수도 리턴에 포함시킬 수 있음.

```tsx
<div
  ref={(node) => {
    if (!node) return;
    node.addEventListener('click', handleClick);
    return () => node.removeEventListener('click', handleClick);
  }}
></div>
```

디펜던시 배열에 따라 작동 여부를 설정하려면 `useRef` 훅을 사용할 수도 있음.

```tsx
function App() {
  const myRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const { current: node } = myRef;
    if (!node) return;
    
    node.addEventListener('click', handleClick);
    return () => node.removeEventListener('click', handleClick);
  }, [someOptions]);
  
  return (
    <div ref={myRef}>
      // ..
    </div>
  )
}
```
