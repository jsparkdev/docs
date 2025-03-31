---
title: 안드로이드 개발 자료
---

## 컴포저블

- `@Composable` 주석
- 파스칼 케이스 사용
- 값을 반환하지 않음
- 인수가 변경되면 UI 자동 업데이트

## 콘텐츠 컴포저블

- [Text](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Text(androidx.compose.ui.text.AnnotatedString,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Color,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.font.FontStyle,androidx.compose.ui.text.font.FontWeight,androidx.compose.ui.text.font.FontFamily,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.style.TextDecoration,androidx.compose.ui.text.style.TextAlign,androidx.compose.ui.unit.TextUnit,androidx.compose.ui.text.style.TextOverflow,kotlin.Boolean,kotlin.Int,kotlin.Int,kotlin.collections.Map,kotlin.Function1,androidx.compose.ui.text.TextStyle)): 텍스트 렌더링
- [Image](https://developer.android.com/reference/kotlin/androidx/compose/foundation/package-summary#Image(androidx.compose.ui.graphics.painter.Painter,kotlin.String,androidx.compose.ui.Modifier,androidx.compose.ui.Alignment,androidx.compose.ui.layout.ContentScale,kotlin.Float,androidx.compose.ui.graphics.ColorFilter)): 이미지 렌더링
  - [painterResource](https://developer.android.com/reference/kotlin/androidx/compose/ui/res/package-summary#painterResource(kotlin.Int)): `Image` 컴포저블에 전달하는 `Painter` 생성


## 레이아웃 컴포저블

- [Row](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Row(androidx.compose.ui.Modifier,androidx.compose.foundation.layout.Arrangement.Horizontal,androidx.compose.ui.Alignment.Vertical,kotlin.Function1)): 컴포저블을 가로로 배치
- [Column](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Column(androidx.compose.ui.Modifier,androidx.compose.foundation.layout.Arrangement.Vertical,androidx.compose.ui.Alignment.Horizontal,kotlin.Function1)): 컴포저블을 세로로 배치
- [Box](https://developer.android.com/reference/kotlin/androidx/compose/foundation/layout/package-summary#Box(androidx.compose.ui.Modifier)): 컴포저블을 겹치도록 배치 (Z축)

## 컨테이너 컴포저블

- [Surface](https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#Surface(androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.foundation.BorderStroke,androidx.compose.ui.unit.Dp,kotlin.Function0)): 배경 색 설정할 때 사용

## 팁

- `import`는 찾기 쉽도록 정렬하기 (Ctrl + Alt + O)
- 이미지, 문자열 등은 [리소스](https://developer.android.com/guide/topics/resources/available-resources?hl=ko)로 관리하여 `R` 클래스를 통해 가져와 사용
