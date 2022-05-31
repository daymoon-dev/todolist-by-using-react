# Reactjs를 사용한 Todolist

### 프로젝트 목표

- 리액트 학습을 위한 Todolist 제작

### 기술 스택

- React
  - React Router v6
- Styled Components
- json-server
- json-server-auth

### Run locally

1. Install `npm install`
2. Run `npx json-server --watch ./src/db/todoItems.js --port 3001`
3. Run `npm start`
4. Go to [todolist](http//localhost:3000)

### TODO

- [ ] CSS 예쁘게...
  - [ ] Theme
  - [ ] Media Query
- [ ] Json Server 환경으로 변경
  - [x] Custom Hooks
    - input
    - fetch
  - [ ] 로그인 기능 추가
- [ ] JWT(JSON Web Token) 사용해보기
- [x] 라우터 적용
- [ ] Context API
- [ ] 리팩토링
  - [ ] Typescript
- [ ] .NET Core API 연결
- [ ] Test를 TEST...
- [ ] Apply Atomic Design
