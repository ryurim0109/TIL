## Generic

- 제네릭은 C#, java등의 언어에서 재사용성이 높은 컴포넌트를 만들 때 자주 활용되는 특징입니다. 특히, 한가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용됩니다.
 
```typescript
const getSize<T>(arr: T[]):number {
    return arr.length;
}

const arr1 =[1,2,3];
getSize<number>(arr1); //3

const arr2 =["a","b","c"];
getSize<string>(arr2); //3

const arr3 =[false,false,true];
getSize<boolean>(arr1); //3

```

```typescript

interface Mobile<T>{
    name: string;
    price:number;
    option:T;
}

const m1 : Mobile<object> ={
    name: "s21",
    price:1000,
    option:{
        color:"red",
        coupon: false,
    },
}

const m2 : Mobile<string> ={
    name: "s22",
    price:900,
    option:"good",
}
```
```typescript

interface User{
    name: string;
    age:number;
}
interface Car{
    name: string;
    color:string;
}

interface Book{
    price:number;
}

const user:User={name:"a",age:10};
const car:Car={name:"b",color:"blue"};
const book:Book={price: 3000};

function showName<T extends {name: string}>(data:T): string{
    return data.name;
};
showName(user);
showName(car);
// showName(book); => 타입에러
```