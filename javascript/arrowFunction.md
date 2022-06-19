## 🍄 화살표 함수 

```javascript
const a = () => {
    // ...
};
```
#### 👀 매개변수 지정 방법
```javascript

() => { ... }          // 매개변수가 없을 경우
x => { ... }           // 매개변수가 한 개인 경우, 소괄호를 생략 가능
(x, y) => { ... }      // 매개변수가 여러 개인 경우, 소괄호를 생략 불가
```
- 함수내부에서 this가 전역객체를 바라보는 문제를 보완하고자 나온 this를 바인딩하지 않는 함수입니다. 
- 실행 컨텍스트를 생성할 때 this 바인딩 과정 자체가 빠지게 되어 , 상위 스코프의 this를 그대로 활용할 수 있습니다. 
- 자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정됩니다. 
- 일반 함수와 달리 언제나 상위 스코프의 this를 가리킵니다. 이를 Lexical this라고 합니다.
- 다시 말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정됩니다.
- 콜백 함수 내부의 this는 전역 객체 window를 가리킵니다.
- 생성자로 사용할 수 없습니다.





## 👩🏻‍🏫 ES6에서 화살표 함수를 언제 쓰고 왜 쓰는지 설명해보세요.

1. 코드가 간결해집니다.

- 짧은 함수 작성시 중괄호, 대괄호를 생략할 수 있고 리턴이 한줄일 경우 리턴조차 생략할 수 있습니다.
- 짧으면 코드의 양 자체도 줄어들지만 개발자가 보기에 눈이 덜 아프면서 직관적이라는 장점도 있습니다. 
(코드를 읽고 파악하는데에 가독성은 중요한 요소입니다.)

2. 강제로 this를 바인딩할때 씁니다.

- 자바스크립트에서의 this는 위치나 생성방법에 따라서 값이 동적으로 바뀝니다. - 그치만 화살표함수는 일반 함수와 다르게 생성시의 환경을 기억하고 this의 값을 고정해버립니다.
-  this가 어디를 참조하는지 잘 모르겠는 경우에 화살표 함수를 쓰면 좋습니다.

3. 콜백함수 내에서 고차함수를 사용할 때 씁니다.

- es6이전까지는 고차함수 마지막에 바인딩을 고정할 수 있는 인자를 넣어 this의 값을 고정시켜야 했지만, 화살표함수의 등장으로 고민하지 않고 그냥 일반 함수 대신에 사용하면 자동으로 적용됩니다.




#### 👀 개념

1️⃣ 바인딩(Binding)
- 프로그램의 어떤 기본 단위가 가질 수 있는 구성요소의 구체적인 값, 성격을 확정하는 것을 말합니다.
- 식별자와 값을 연결하는 과정을 바인딩이라고 한다.

2️⃣ 고차함수
- 고차 함수(higher order function)는 함수를 인자(argument)로 받을 수 있고, 함수의 형태로 리턴할 수 있는 함수입니다.

👉고차함수 예시
- 다른 함수를 인자로 받는 경우
```javascript
function double(num) {
  return num * 2;
}
// doubleNum 함수는 고차 함수. (다른 함수를 인자로 받음)
// doubleNum 함수의 인자 func에 함수가 들어올 경우
// func은 doubleNum의 콜백 함수.
function doubleNum(func, num) {
  return func(num);
}
// 아래의 경우 double은 doubleNum의 콜백 함수.
doubleNum(double, 5);
```
- 함수를 리턴하는 경우
```javascript
// subtractor 함수는 고차 함수. (다른 함수를 리턴.)
function subtractor(subtract) {
  return function (num) {
    return num - subtract;
  }
}

// subtractor(5)는 함수이므로 호출 연산자 '()'를 사용 할 수 있다.
subtractor(5)(8) // --> 3

// subtractor 함수가 리턴하는 함수를 변수에 저장할 수 있다.
// 이는 자바스크립트에서 함수는 일급 객체이기 때문이다.
const subtract5 = subtractor(5);
subtract5(8) // -> 3
```
- 함수를 인자로 받고, 함수를 리턴하는 경우
```javascript
function double(num) {
  return num * 2;
}

// doubleSubtractor 함수는 고차 함수이다.
function doubleSubtractor(subtract, func) {
  const doubled = func(subtract);
  return function (num) {
    return num - doubled;
  }
}

// double 함수는 doubleSubtractor 함수의 콜백으로 전달되었다.
doubleSubtractor(5, double)(18); // --> 8
```