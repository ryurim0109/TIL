## Array 메소드

- push(): 뒤에 삽입
- pop() : 뒤에 삭제
- unshift() : 앞에 삽입
- shift() : 앞에 삭제

- arr.splice(n,m,x) :특정 요소 지움
    - n은 시작 m은 개수 x은 추가요소

```javascript
let arr =[1,2,3,4,5]
arr.splice(1,2); // [1,4,5]
arr.splice(1,3,100,200); // [1,100,200,5]
let arr2 =["나는" ,"유림"]
arr2.splice(1,0,"28살","여자"); // ["나는","28살","여자","유림"]

```
- arr.splice() :삭제된 요소 반환

```javascript
let arr =[1,2,3,4,5];
let result = arr.splice(1,2); // [2,3]

```
- arr.slice(n,m) :n부터 m까지 반환

```javascript
let arr =[1,2,3,4,5];
arr.splice(1,4); // [2,3,4]

```
- arr.concat(arr1,arr3 ..) :합쳐서 새배열 반환

```javascript
let arr =[1,2];
arr.concat(3,4); // [1,2,3,4]

```
- arr.forEach(fn) :배열 반복

```javascript
let users =["riri", "JH", "yurim"];

users.forEach((item,index,arr)=> {
    console.log(`${index+1}`.${item});
    // 1. riri
    // 2. JH 
    //3. yurim
});

```
- arr.indexOf / arr.lastIndexOf
```javascript
let arr = [1,2,3,4,5,1,2,3];
arr.indexOf(3) //2
arr.indexOf(3,3) //7 3부터 시작
arr.lastIndexOf(3) //7
```
- arr.includes() : 포함하는지 확인
```javascript
let arr = [1,2,3];
arr.includes(2); //true
arr.includes(8); //false
```
- arr.find(fn) / arr.findIndex(fn) : 첫번째 true값만 반환하고 끝 만약 없으면 undefined를 반환
```javascript
let arr = [
    {name: "j", age: 20},
    {name: "Y", age: 18},
    {name: "r", age: 22}
];
const result=arr.find((item)=>{
    if(item.age < 19){
        return true;
    }
    return false;
});
console.log(result);
//{name: "Y", age: 18}
```
- arr.filter(fn) : 만족하는 모든 요소를 배열로 반환
```javascript
let arr = [1,2,3,4,5];
const result=arr.filter((item)=>{
    return item % 2 ===0;
});
console.log(result);
//[2,4]
```
- arr.reverse() : 역순으로 재정렬
```javascript
let arr = [1,2,3,4,5];
arr.reverse(); // [5,4,3,2,1]
```

- arr.map(fn) :함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
```javascript
let arr = [
    {name: "j", age: 20},
    {name: "Y", age: 18},
    {name: "r", age: 22}
];

let newUser = arr.map((user, idx)=>{
    return Object.assign({},user,{
        isAdult :user.age >19
    })
})

console.log(newUser);
//{name: "j", age: 20, isAdult: true},
//{name: "Y", age: 18, isAdult: false},
//{name: "r", age: 22, isAdult: true}
```
- Array.isArray() :배열인지 아닌지 확인해줌 false, true

- arr.sort() 배열 재정렬 (배열 자체가 변경되니 주의)
    - Lodash를 많이 사용한다고 함 ! 
    - [로데쉬 링크 click 🤪](https://lodash.com/)
```javascript
let  arr =[1,5,4,2,3];
arr.sort();
console.log(arr); // [1,2,3,4,5]

let  arr2 =[27, 8, 5, 13];
arr.sort();
console.log(arr2); // [13,27,5,8];
//이상하게 정렬됨. 아래와 같이 작성해줘야됨.

let  arr2 =[27, 8, 5, 13];

arr2.sort((a,b) => {
    return a - b;
});
console.log(arr2); // [5,8,13,27,];

```
- arr.reduce() 인수로 함수를 받음
    - (누적 계산값, 현재값) => { return 계산값}
```javascript
// 배열의 모든 수 합치기
let arr =[1,2,3,4,5]; 

let result = 0;
arr.forEach(num => {
    result +=num;
});
console.log(result); //15
//위의 작업을 한번에 처리 해줄 수 있는 것이 reduce이다.

let arr =[1,2,3,4,5]; 

let result = arr.reduce((prev, cur)=>{
    return prev + cur;
}, 0);
console.log(result); //15

```