---
title: pnpm 모노레포 패키지의 종속성 일괄 업데이트
---

pnpm 워크스페이스가 다음과 같이 구성되어있다고 가정합니다.

```yaml title="pnpm-workspace.yaml"
packages:
  - "packages/**/*"
```

즉, `packages` 디렉터리가 패키지 디렉터리가 됩니다.

다음 명령을 수행하여 각 패키지의 `vite` 종속성을 최신 버전으로 업데이트할 수 있습니다.

```bash
pnpm -r --filter "./packages/**/*" update vite
```

이후, lock 파일에서 이전 종속성의 흔적을 제거합니다. ([링크](/tips/error-after-installing-latest-deps) 참조)
