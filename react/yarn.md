## yarn 으로 패키지 설치

#### <yarn으로 리액트 프젝 만들기>

```
yarn create react-app week-1
```
- week-1은 폴더명입니다. 다른 것으로 바꾸어서 설치해줘도 됨.

#### <yarn으로 리액트 프젝 시작>

```
cd week-1
yarn start
```

#### <yarn으로 styled components 설치>

```
yarn add styled-components
```

#### <yarn으로 라우터 설치>

```
yarn add react-router-dom@5.2.1
```
- @뒤는 버전임. 최신 버전으로 라우터 공식페이지에서 보고 설치하면 됨.


#### <yarn으로 리덕스 설치>

```
yarn add redux react-redux
```

#### <yarn으로  Firebase 설치>

```
yarn add firebase
```

#### <yarn으로  redux-thunk 설치>

```
yarn add redux-thunk
```

#### <yarn으로  배포할 때>

```
yarn build
```
#### <파이어베이스로 배포할 때>

```
yarn add global firebase-tools
yarn firebase login
```
- Y입력 
```
yarn firebase init
```
- Firestore, Hosting 선택 후 엔터
```
yarn build
```
- 한번 더 빌드 시켜주기.
```
yarn firebase deploy
```
- 입력하면 배포 끝 ~