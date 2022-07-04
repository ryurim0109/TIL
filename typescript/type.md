## 기본 타입

 ```javascript
let age:number =30;
let isAdult:boolean = true;
let a:number[]=[1,2,3];
let a2:Array<number>=[1,2,3];

let week1:string[]=["mon","tue","wed"];
let week2:Array<string>=["mon","tue","wed"];

```

### 튜플(Tuple)
```javascript
let b:[string,number];

b= ["z",1]; //가능
b= [1,"z"]; //불가능
```

### void, never
```javascript
const sayHello=():void=>{
    console.log("hello")
}
```
```javascript
const showError=():never=>{
    throw new Error();
    //에러를 반환하거나
}
const infLoop=():never=>{
   while(true){
       //do something
       //무한반복할 때 never을 사용합니다.
   }
}
```
## enum
```javascript
enum OS {
    Window =3,
    Ios,
    Android
}
console.log(OS[3]); // Window
```

## null, undefined
```javascript
let a:null = null;
let b:undefined = undefined;
```