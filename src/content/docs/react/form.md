---
title: React
---

요청 보내기

```tsx
<form action="/api/users">
  <label htmlFor="name">Name:</label>
  <input type="text" name="name" id="name" />
  <button type="submit">Submit</button>
</form>
```
- `<input>`에 `name`이 있는지 반드시 확인하고, 라벨을 위한 `id` 추가하기

데이터를 전송하기 위해서는 `POST` 요청 사용. 데이터가 URL 대신 네트워크 요청 페이로드에 추가됨

```tsx "method="POST""
<form action="/api/users" method="POST">
  // ...
</form>
```

파일 전송하려면 `enctype="multipart/form-data"` 추가하기

```tsx "enctype="multipart/form-data""
<form action="/api/users" method="POST" enctype="multipart/form-data">
  // ...
</form>
```

그런데 사실, 리액트에선 네트워크 요청을 직접 보내지 않고 `formData`를 가져와 사용한다.

```tsx
<form
  action="/api/users"
  method="POST"
  enctype="multipart/form-data"
  onSubmit={event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData));
}}>
  // ...
</form>
````

19 버전에선 form actions라는게 생김. 위 과정을 단순화시킴.

```tsx
function logFormData(formData: FormData) {
  console.log(Object.fromEntries(formData));
}

<form action={logFormData}>
  // ...
</form>
````
