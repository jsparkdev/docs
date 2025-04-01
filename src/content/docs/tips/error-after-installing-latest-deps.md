---
title: 종속성 업데이트 후 CI 오류가 발생하는 경우
---

lock 파일에서 이전 종속성의 흔적을 모두 제거하면 됩니다.

pnpm을 사용하는 경우 [pnpm dedupe](https://pnpm.io/cli/dedupe) 명령을 사용하여 수행할 수 있습니다.

1. 루트 디렉터리에서 `pnpm dedupe` 명령을 실행합니다.
2. 변경 사항을 커밋 후 푸쉬합니다.
