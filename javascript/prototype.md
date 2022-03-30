## 상속, 프로토타입 prototype

- 콘솔창에 있는👉__proto__ 이것을 프로토타입이라고 한다.
- proto 는 생성된 객체(new) 또는 json 객체에 존재한다. 즉, 상위 객체를 나타내는 속성이다.
- prototype(__proto__의 type)은 자바스크립트 생성자함수(클래스)에 속성 또는 메소드를 추가할때 사용하는 속성이다. 객체생성시 prototype을 통해 정의된 속성 또는 메소드는 new 를 통해 객체생성시 공유한다.
```javascript
    const user={
        name:"riri"
    }
    user.name // "riri"
    user.hasOwnProperty('name'); // true
    user.hasOwnProperty('age'); // false


```