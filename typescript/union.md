## Literal Types

- `var`또는 `let`으로 변수를 선언할 경우 이 변수의 값이 변경될 가능성이 있음을 컴파일러에게 알립니다. 
- `const`로 변수를 선언하게 되면 typescript에게 이 객체는 절대 변경되지 않음을 알립니다.
```javascript
const userName="riri"; //문자열이 아닌 "riri"로 타입을 정합니다.
let userName2: string | number ="rr"; //문자열로 타입을 정합니다.

userName2 = 3;
```

## Union Types (or)

- 식별가능한 유니온 타입 
```javascript

    interface Car {
        name: "car";
        color: string;
        start():void;
    }
    interface Mobile {
        name: "mobile";
        color: string;
        call():void;
    }
    const getGift=(gift: Car | Mobild)=>{
        if(gift.name==="car"){
            gift.start();
        }else{
            gift.call()
        }
    }
```

## Intersection Types (and)

```javascript

    interface Car {
        name: string;
        start():void;
    }
    interface Mobile {
        name: string;
        color: string;
        price: number;
    }
    const gift: Car & Mobild ={
       name: "타요",
       start() {},
       color:"blue",
       price:1000,
    }
```