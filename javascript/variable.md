## 변수

## 변수의 생성과정
1. 선언단계
2. 초기화 단계
3. 할당 단계

## var
- 한번 선언된 변수를 다시 선언할 수 있다.
- 선언하기 전에 사용할 수 있다.
- 선언및 초기화 단계 => 할당 단계
- 함수 스코프
- 현재 사용권장 ❌
```
var name ="yurim";
console.log(name); //yurim
var name ="riri";
console.log(name); //riri
```

## let
- 호이스팅은 되지만, var처럼 동작하지는 않는다. 왜? Temporal Dead Zone때문 !
- 값을 변경할 수 있다.
- 선언단계 => 초기화 단계 => 할당 단계
- 블록 스코프
```
let name ="yurim";
console.log(name); //yurim
let name ="riri";
console.log(name); //error
```

## const 
- 선언 + 초기화 + 할당단계 한번에 생성됨.
- 값을 변경할 수 없다.
- 블록 스코프

