---
title: Key
---

배열 요소 뿐만 아니라 모든 요소에 key 줄 수 있음.

이 key에 새로운 값을 할당하면 (key를 변경하면) UI를 새로 렌더링함.

즉, 요소의 모든 상태를 초기화시킴.

이를 통해 input에 있는 텍스트를 초기화시킬 수 있음.

```tsx
function App() {
  const [key, setKey] = useState(0);
  
  return (
    <div>
      <input value={key} />
      <button onClick={() => setKey(key => key + 1)}>Reset</button>
    </div>
  )
}
````
