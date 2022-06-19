## 🍄 함수

- 자바스크립트의 함수는 일급 객체다
- 일급객체의 정의는 다음과 같다.
    - 모든 요소는 함수의 실제 매개변수가 될 수 있다.
    - 모든 요소는 함수의 반환 값이 될 수 있다.
    - 모든 요소는 할당 명령문의 대상이 될 수 있다.
    - 모든 요소는 동일 비교의 대상이 될 수 있다.
    - 자바스크립트에서 함수는, 다음 모두를 충족 시키므로 일급 객체라고 볼 수 있다.


### 🍄 함수를 선언하는 6가지 방법

1️⃣ named function declaration (명명 함수 선언)
```javascript
function hello() {
  // ...
}
```
- 가장 대중적인 방법이다. 함수의 이름이 hello가 된다. 
- 호이스팅 되기 때문에 이 함수는 어느 스코프에서든 호출 할 수 있는 함수가 된다.

2️⃣ anonymous function expression (익명 함수 표현)
```javascript
const hello = function () {
  //...
}
```
- 이름이 없는 함수를 변수에 담은 방식이다. 이름이 없는 함수긴 한데, 자바스크립트 엔진이 이름을 변수명으로 추정하여 넣는다.
- 변수 할당은 호이스팅 되지 않으므로, 할당 된 이후에만 실행 가능하다.

3️⃣ named function expression (명명 함수 표현)
```javascript
const hello = function originalName() {
  // ...
}
```
- 함수 이름이 명확하게 선언되어 있으므로 JS 엔진에 의해 추론되지 않는다.

4️⃣ Immediately-invoked expression (즉시 실행 표현)
```javascript
const hello = (function () {
  //...
})()
```
- 즉시 실행 함수로, 클로져를 활용할 수 있다. 
- 내부 함수는 변수나 다른 함수등을 쓸 수 있지만,이 함수 밖에서는 완전히 캡슐화되어 접근 할 수 없다. 
- 가장 흔해 빠진 예제 중 하나로는 카운터가 있다.
```javascript
var myCounter = (function (initialValue = 0) {
  let count = initialValue
  return function () {
    count++
    return count
  }
})(1)

myCounter() // 2
myCounter() // 3
myCounter() // 4
```
- 외부 함수에서 넘겨준 1을 가지고, 내부에서 처리를 하여 리턴하고 있다.

5️⃣ function constructor (생성자 함수)
```javascript
const adder = new Function('a', 'b', 'return a + b')
adder(2, 6)
// 8
```
- 이는 eval()을 사용하는 것과 같기 때문에 굉장히 위험하다. 
- 이 생성자는 전역 범위로 한정된 함수만 생성할 수 있다.

6️⃣ arrow function (화살표 함수)
```javascript
const hello = () => {
  //...
}
```
- this나 super에 대한 바인딩이 없고, methods 로 사용될 수 없습니다.
- new.target키워드가 없습니다.
- 일반적으로 스코프를 지정할 때 사용하는 call, apply, bind methods를 이용할 수 없습니다.
- 생성자(Constructor)로 사용할 수 없습니다.
- yield를 화살표 함수 내부에서 사용할 수 없습니다.
- 익명 함수로 참조할 이름이 필요하다면 함수를 변수에 할당하면 됩니다.

### 🍄 화살표 함수에서 this키워드

- 화살표 함수내부에서 this 키워드를 사용할 때는 일반 함수와 다르게 동작하므로 주의해야됩니다.
- 화살표 함수를 사용할 때 this 키워드는 상위 스코프에서 상속됩니다.
#### 🌱 HTML
```HTML
<div class="box open">
    This is box
</div>
```
#### 🌱 CSS
```css
.opening{
    background-color:red;
}
```
#### 🌱 JS
```javascript
const box =document.querySelector(".box");
//box클래스를 가진 div를 가져옵니다.
box.addEventListener("click", function(){
//click 이벤트 핸들러를 등록
    this.classList.toggle("opening");
    //div에 opening클래스를 토글
    setTimeout(function(){
        this.classList.toggle("opening");
        //클래스를 다시 토글
    },500);
});
```
- 위의 코드의 문제는 첫 번째 this가 const box에 할당되었지만 setTimeout내부의 두 번째 this는 Window객체로 설정되어 "Uncaught TypeError" 오류가  발생합니다.

```javascript
const box =document.querySelector(".box");
//box클래스를 가진 div를 가져옵니다.
box.addEventListener("click", function(){
//click 이벤트 핸들러를 등록
    this.classList.toggle("opening");
    //div에 opening클래스를 토글
    setTimeout(()=>{
        this.classList.toggle("opening");
        //클래스를 다시 토글
    },500);
});
```
- 위와 같이 일반 함수를 화살표 함수로 바꿔주면, 두 번째 this는 부모로부터 상속되며 const box로 설정됩니다. 

#### 🍄 arguments객체에 대한 접근방식
- 일반 함수와 화살표 함수의 또 다른 차이점은 arguments객체에 대한 접근방식 입니다.
- arguments객체는 함수 내부에서 접근할 수 있는 배열 객체이며 해당 함수에 전달된 인수의 값을 담고 있습니다.

```javascript
const showWinner=()=>{
    const winner =arguments[0];
    console.log(`${winner} was the winner`);
};
showWinner("riri","uu","H");
```
-  이 코드는 ReferenceError : arguments is not defined.라는 오류를 반환합니다. 
- 함수에 전달된 모든 인수에 접근하려면, 기존 함수 표기법이나 스프레드 문법을 사용하면 됩니다.

```javascript
const showWinner=(...arg)=>{
    const winner =arg[0];
    console.log(`${winner} was the winner`);
};
showWinner("riri","uu","H");
//riri was the winner
```
- 위와 같은 코드로 해결할 수 있습니다.