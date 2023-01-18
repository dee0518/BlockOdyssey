# BlockOdyssey - doeun

블록 오디세이 과젤 레포입니다.
아래 명령어로 실행해 주세요.

```bash
npm start
```

<br>

# 고민한 부분

1. pagination

- 고민 : 예시에 총 10개일 때만 고려되어있어 10개보다 적을 경우 어떻게 구현할 것인가.
- 해결 : 7개 미만일 경우 모든 페이지를 보여주고 이상일 경우에는 예시와 같이 '...'을 표기.

2. 최적화

- memo, useMemo, useCallback을 사용한 최적화
- 모든 state가 바뀔 때마다 영향을 받는 부분에는 적용하지 않도록 하고 state에 한정적으로 영향을 받는 부분은 해당 state가 바뀔 때마다 렌더링될 수 있도록 최적화 적용하려고 했다.

<br>

# Commit Convention

- 이모지를 통해 커밋의 의도나 목적을 금방 파악할 수 있도록 gitmoji를 사용했다.

| 아이콘                                       | 코드       | 설명                     | 원문                                                 |
| -------------------------------------------- | ---------- | ------------------------ | ---------------------------------------------------- |
| 💄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | :lipstick: | UI/스타일 파일 추가/수정 | Add or update the UI and style files.                |
| 🎨                                           | :art:      | 코드의 구조/형태 개선    | Improve structure / format of the code.              |
| ✨                                           | :sparkles: | 새 기능                  | Introduce new features.                              |
| ♻️                                           | :recycle:  | 코드 리팩토링            | Refactor code.                                       |
| 🔥                                           | :fire:     | 코드/파일 삭제           | Remove code or files.                                |
| 🐛                                           | :bug:      | 버그 수정                | Fix a bug.                                           |
| 🚚                                           | :truck:    | 리소스 이동, 이름 변경   | Move or rename resources (e.g.: files paths routes). |
| 📝                                           | :memo:     | 문서 추가/수정           | Add or update documentation.                         |
| 🎉                                           | :tada:     | 프로젝트 시작            | Begin a project.                                     |
| 🔧                                           | :wrench:   | 구성 파일 추가/삭제      | Add or update configuration files.                   |
| 📦                                           | :package:  | 컴파일된 파일 추가/수정  | Add or update compiled files or packages.            |
