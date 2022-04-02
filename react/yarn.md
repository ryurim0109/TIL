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

### <yarn 으로 로그인할 때 설치해야될 리덕스>
- 이건 리덕스와 리덕스 모듈 내에서 경로 이동까지 하게 해줄 히스토리, 
- 라우터와 히스토리를 엮어줄 모듈까지 한번에 설치.

```
yarn add redux react-redux redux-thunk redux-logger history@4.10.1 connected-react-router@6.8.0
```

```
yarn add immer redux-actions
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