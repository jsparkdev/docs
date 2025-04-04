---
title: React APIs
---

## createPortal

지정된 위치에 요소 렌더링

```tsx
createPortal(
  <div>Hello</div>,
  document.body
)
```

## flushSync

콜백을 인자로 받고, 그 콜백 (주로 상태 업데이트)를 동기적으로 실행합니다.

상태 업데이트 후, input에 포커스줄때 유용하게 사용 가능.

대부분 상태 업데이트 후, 업데이트된 DOM 요소에 접근할때 유용하게 사용 가능.

```tsx
function LogButtonClick() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    flushSync(() => {
      setCount(count + 1);
    });

    // 상태 업데이트 후 DOM에 접근
    if (inputRef.current) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Update and Focus</button>
      <input 
        ref={inputRef} 
        value={`Clicked ${count} times`} 
        readOnly 
      />
    </div>
  );
}
```
