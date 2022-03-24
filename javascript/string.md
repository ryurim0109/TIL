## 문자열 메소드

- ' , `, "
```
let desc ='오늘은 맑고 화창한\n날씨가 계속 되겠습니다.';

let desc =`오늘은 맑고 화창한
날씨가 계속 되겠습니다.
내일은 비소식이 있습니다.`;

let desc ='오늘은 맑고 화창한 //error !
날씨가 계속 되겠습니다.';
```

- length 문자열 길이
- 특정 위치에 접근
```
let desc ='안녕하세요.';
desc.length //6
desc[2] //'하'
```
- toUpperCase() 대문자로 변환 / toLowerCase() 소문자로 변환
```
 let desc = "Hi there";
 desc.toUpperCase(); // "HI THERE"
 desc.toLowerCase(); // "hi there"
```
- str.indexOf(text) 문자를 인수로 받아 몇번째 위치에 있는지 알려준다.
```
 let desc = "Hi there. Nice to meet you";
 desc.indexOf('to'); //14
 desc.indexOf('man'); //-1 만약 찾는 문자가 없으면 -1을 반환한다.

 if (desc.indexOf('Hi') > -1){
     console.log('Hi가 포함된 문장입니다.')
 }
```
- str.substring(n,m) n과 m사이의 문자열을 반환한다.
    - n과 m을 바꿔도 동작한다.
    - 음수 허용❌ 음수는 0으로 인식
```
let desc ="abcdefg";
desc.substring(2,5) // "cde"
desc.substring(5,2) // "cde"
```
- str.substr(n,m) 
    - n부터 시작
    - m개를 가져옴
```
let desc ="abcdefg";
desc.substr(2,4) // "cdef"
desc.substr(-4,2) // "de"
```
- str.trim() 앞 뒤 공백 제거
```
let desc ="  yurim       ";
desc.trim() // "yurim"
```
- 문자열 비교 / 대문자보다 소문자가 더 크다.
```
1 < 3 ; //true
"a" < "b" ; //true
"a".codePointAt(0); // 97
String.fromCodePoint(97); // "a"
```