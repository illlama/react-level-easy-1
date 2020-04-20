# Todoist 만들기

keywords: `react`, `javascipt`

|이름|언어|난이도|브랜치 갯수|
|:-:|:-:|:-:|:-:|
|Todoist 만들기|`react`|EASY|4|

## 과제 설명

이 과제는 react를 이용한 간단한 Todoist 만들기입니다. 각 Step 별로 브랜치를 만들어 작업하고 풀리퀘를 생성하여 correctcode에 리뷰를 맡겨보세요!

[correctcode 바로가기](https://correctcode.dev)

### Step1

생성할 브랜치: `feature/react`

`create-react-app` 을 사용하여 React 개발환경을 준비합니다. `create-react-app` 으로 생성되는 파일 중 현재 과제에 불필요하다고 생각되는 파일들은 제거해주세요. `typescript`를 사용하셔도 좋습니다.

- [create-react-app](https://create-react-app.dev/docs/getting-started): React 환경 준비

완성 후 풀리퀘스트를 만들어 코드리뷰를 요청해 보세요

### Step2

생성할 브랜치: `feature/todo`

Todo 를 생성할 수 있고, 목록을 볼 수 있는 화면을 생성합니다.
Todo 는 다음과 같은 속성을 필수적으로 가지고 있어야 합니다.
```js
id: 고유 식별자
description: Todo 내용
createdAt: `YYYY-MM-DD` 형식
```
스타일은 `css`, `scss`, `css-in-js` 등 자유롭게 사용해주세요.

완성 후 풀리퀘스트를 만들어 코드리뷰를 요청해 보세요

### Step3

생성할 브랜치: `feature/todo-crud`

Todo 목록에서 각각 Todo들에 대한 수정/삭제가 가능하도록 만들어봅니다. 형식은 자유롭게 만들어주세요.

완성 후 풀리퀘스트를 만들어 코드리뷰를 요청해 보세요

### Step4(final)

생성할 브랜치: `feature/todo-persist`

`localStorage` 를 이용하여 브라우저를 닫은 후에 다시 열어도 기존 Todo 데이터가 유지되도록 만들어봅니다.

완성 후 풀리퀘스트를 만들어 코드리뷰를 요청해 보세요
