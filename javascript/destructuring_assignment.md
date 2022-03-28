## Destructuring assignment 구조분해할당

- 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식이다.

- 배열 구조 분해
```javascript
    let [x,y] =[1,2];
    console.log(x); //1
    console.log(y); //2
```
```javascript

    let users = ["jj","riri","uu"];
    let [user1,user2,user3] = users;

    console.log(user1); //jj
    console.log(user2); //riri
    console.log(user3);// uu
```
```javascript
    //배열 구조 분해 : 기본값
    let [a,b,c] =[1,2]
    //c => undefined
    let [a=3,b=4,c=5] =[1,2]
    //만약 값이 undefined이라면 기본값을 사용해 에러를 막을 수 있음.
```
```javascript
    //배열 구조 분해 : 일부 반환값 무시
    let [user1,,user3] = ["jj","riri","uu"];
    
    console.log(user1); //jj
    console.log(user2); //uu
   
```
```javascript
    //배열 구조 분해 : 바꿔치기
    let a =1;
    let b =2; 
    //위의 a와 b의 값을 바꾸고 싶다면 ?
    let c= a;
    a = b;
    b = c;
    //위처럼 하면 굉장히 복잡, 구조분해할당은 간단함(c는 필요없음)
    [a,b] =[b,a];
   
```
- 객체 구조 분해
```javascript

    let user = {name: 'jj',age:30};
    let {name,age} = user;
    let {age,name} = user;

    console.log(name); //'jj'
    console.log(age); //30
```
```javascript

    let user = {name: 'jj',age:30};
    let {name,age,gender='male'} = user;
    

    console.log(gender); //'male'
```