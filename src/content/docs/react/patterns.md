---
title: Patterns
---

## 컴포지션

여러 컴포넌트 합쳐서 새 컴포넌트 만드는거.

하나의 컴포넌트에 데이터를 props로 몰아서 전달하고, 그걸 이용해 모든 로직을 그 컴포넌트에서만 구현하려고 하면 컴포넌트가 너무 복잡해짐.

차라리 데이터 대신 컴포넌트를 받아서 그걸 바로 렌더링하면 코드가 깔끔해짐.

그리고 역할도 확실하게 분리되는 걸 알 수 있음.

컴파운드 컴포넌트는 컴포지션의 한 형태입니다. (여러 컴포넌트를 조합하여 새로운 컴포넌트를 만드는 것)
