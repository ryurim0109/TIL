## 인터페이스

```javascript
let user:object;

user ={
    name: "riri",
    age: 30
}
console.log(user.name) // err발생 object에는 name이 없기 때문
```

```javascript
type Score = 'A' | 'B' | 'C' | 'F';
interface User ={
    name: string;
    age: number;
    gender? : string; //옵셔널한 프로퍼티
    readonly birthYear : number; //수정 불가능한 프로퍼티
    [grade:number] : Score; 
}
let user : User ={
    name: "cc",
    age: 30,
    birthYear: 2000, 
    1 : 'A',
}
user.gender ="male";
console.log(user.name) // user에 어떤 프로퍼티가 있는지 코드 힌트가 나온다.
```

```javascript
interface Add {
    (num1: number,num2: number) : number;
}
const add : Add =(x,y)=>{
    return x + y;
}
```

```javascript
interface IsAdult {
    (age:number) : boolean;
}
const a : IsAdult =(age)=>{
    return age>19;
}
console.log(33); //true
```
