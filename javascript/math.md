## 숫자와 수학


### 숫자

- toString() 10진수 -> 2진수/16진수
```javascript
let num =10
num.toString(); // "10"
num.toString(2); // "1010" 괄호안에 숫자를 쓰면, 숫자에 관한 진법으로 변환한다. 

let num2 =255
num2.toString(16); // "ff"
```
- isNaN() is not a number
```javascript
let x =Number('x'); //NaN
x == NaN // false
x === NaN // false
NaN == NaN // false
isNaN(x) //true
isNaN(3) //false
```
- parseInt() 숫자로 시작하지 않으면 NaN을 반환한다.
소숫점 이하는 무시하고, 정수만 반환한다.
```javascript
let margin ='10px';
Number(margin); //NaN
parseInt(margin); //10

let redColor ='f3';
parseInt(redColor); //NaN
parseInt(redColor,16); //243
parseInt('11',2); //3 이진수에서 십진수로 쉽게 바꿀 수 있다.
```
- parseFloat() 
```javascript
let padding ='18.5%'
parseInt(padding); //18
parseFloat(padding); //18.5
parseInt('11',2); //3 이진수에서 십진수로 쉽게 바꿀 수 있다.
```

### Math

- Math.PI; // 3.141592653589793
- Math.ceil() :올림
```javascript
let num1 = 5.1;
let num2 =5.7;
Math.ceil(num1); //6
Math.ceil(num2); //6 
```
- Math.floor() :내림
```javascript
let num1 = 5.1;
let num2 =5.7;
Math.floor(num1); //5
Math.floor(num2); //5 
```
- Math.round() :반올림
```javascript
let num1 = 5.1;
let num2 =5.7;
Math.round(num1); //5
Math.round(num2); //6
```
- 만약 소숫점 둘째자리까지 표현해야 된다면 ? (셋째자리에서 반올림) 
```javascript
let userRate = 30.1234;

1. (userRate) *100 //1. 숫자 백을 곱하고,
2. Math.round((userRate) *100) // 2. 라운드에 넣어주고
3. Math.round((userRate) *100)/100 //3. 백으로 나누어주면 된다. 30.12
```
- toFixed() : 소숫점 자릿수 주의사항은 문자열로 반환해주어서 Number() 혹은 parseInt()로 형변환을 시켜주어야 된다.
```javascript
let userRate = 30.1234;

userRate.toFixed(2); // "30.12"
Number(userRate.toFixed(2)); // 30.12
userRate.toFixed(0); // "30"
userRate.toFixed(2); // "30.123400"
```

- Math.random() 0~1사이 무작위 숫자 생성
```javascript
//1~100사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.ramdom()*100)+1
```

- Math.max()최댓값 / Math.min() 최솟값
```javascript
Math.max(1,2,4,-1,10,5.54,9); // 10
Math.min(1,2,4,-1,10,5.54,9); //-1
```
- Math.abs() :절대값
```javascript
Math.abs(-1) //1
```
- Math.pow(n,m) : 제곱
```javascript
Math.pow(2,10) //1024
```
- Math.sqrt() : 제곱근
```javascript
Math.pow(16) //4
```