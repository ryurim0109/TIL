## 클로저(Closure) 

- 자바스크립트는 어휘적 환경을 갖는다. (Lexical Environment)
```javascript
/********************************
* one : 초기화 X 사용불가
* addOne : function 사용가능
*********************************/

     let one;
     one = 1;

     function addOne(num){
         console.log(one+num);
     };

     addOne(5)
```
- 함수와 렉시컬 환경의 조합이다.
- 함수가 생성될 당시의 외부 변수를 기억한다.
- 함수 생성 이후에도 계속 접근이 가능하다.