## 심볼 Symbol() 

```
const a = Symbol(); //new를 붙이지 않는다.
const b = Symbol(); 
console.log(a,b) // Symbol()
a === b; //false
a==b; //false
```
- 유일성이 보장된다.
- Object.getOwnPropertySymbols()메소드를 사용하면 숨겨진 심볼키를 볼 수 있다. 
- Reflect.ownKeys()메소드를 사용하면 숨겨진 심볼키와 객체를 모두 볼 수 있다.

### Symbol.for() 

- 전역 심볼이다.
- 하나의 심볼만 보장 받을 수 있다. (없으면, 만들고 있으면 가져오기 때문)
- Symbol 함수는 매번 다른 Symbol 값을 생성하지만, Symbol.for()메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유한다.

```
const id1 = Symbol.for(); //new를 붙이지 않는다.
const id2 = Symbol.for(); 
a === b; //true
```