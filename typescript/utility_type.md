## Utility Types
- 유틸리티 타입은 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입 문법입니다. 유틸리티 타입을 꼭 쓰지 않더라도 기존의 인터페이스, 제네릭 등의 기본 문법으로 충분히 타입을 변환할 수 있지만, 유틸리티 타입을 쓰면 훨씬 더 간결한 문법으로 타입을 정의할 수 있습니다.

## Partial(파셜)
- 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있습니다.
```typescript
interface User{
    id:number;
    name:string;
    age:number;
    gender: "m" | "f";
}

let admin:Partial<User> ={
    id:1,
    name:"riri",
}
```

## Pick(픽)
- 특정 타입에서 몇 개의 속성을 선택하여 타입을 정의할 수 있습니다.
```typescript
interface User{
    id:number;
    name:string;
    age:number;
    gender: "m" | "f";
}

let admin:Pick<User, "id" | "name"> ={
    id:1,
    name:"riri",
}
```

## Omit(오밋)
- 특정 타입에서 지정된 속성만 제거한 타입을 정의해 줍니다.
```typescript
interface User{
    id:number;
    name:string;
    age:number;
    gender: "m" | "f";
}

let admin:Omit<User, "age" | "gender"> ={
    id:1,
    name:"riri",
}
```
## Exclude`<T1,T2>`
- 오밋과 다른점 오밋은 프로퍼티들를 제거하고, Exclude는 타입을 제거한다.
- T1 타입과 T2타입이 겹치면 제거
```typescript
type T1 =string | number | boolean;
type T2 =Exclude<T1, number | string>;
//type T2는 boolean만 남게 됩니다.
```

## Required`<T>`
- Required를 사용하면 ?:인 옵셔널한 속성들도 반드시 써줘야 됩니다. 

## Readonly`<T>`
- 속성 수정 불가능

## Record`<K,T>`
- K: 키값, T: 타입
```typescript
type Grade = "1" |"2" |"3" |"4" ;
type Score = "A" |"B" |"C" |"D" ;

const score: Record<Grade,Score> ={
    1:"A",
    2:"B",
    3:"C",
    4:"D",
};
```

## NonNullable`<Type>`

- null / undefined 타입 제거

```typescript
type T1 =string | null | undefined | boolean;
type T2 =NonNullable<T1>;
//type T2는 string과 boolean만 남게 됩니다.
```