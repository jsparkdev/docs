---
title: Local Storage
---

배열 등 객체를 로컬스토리지에 저장하려면 stringify를 사용해야 합니다.

```tsx
function App() {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('data');
    if (!storedData) {
      return [];
    }
    
    try {
      return JSON.parse(storedData);
    } catch {
      console.error('Error parsing stored data');
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
}
```
