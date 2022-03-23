## 객체 메소드 (Object methods) & 계산된 프로퍼티(Computed property)

### 계산된 프로퍼티 (Computed property)

```
let a ='age';
const user ={
    name: 'yurim',
    [a] :28 // age : 28
}
```
### 객체 메소드 (Object methods) 

- Object.assign()
    - 객체를 복제할 수 있다.
    ```
     const newUser = Object.assign({초기값},user)
    ```
- Object.keys()
    - 키 배열로 반환한다.
    ```
    const user ={
        name: 'JH',
        age: 38,
        gender: 'male'
    }
    Object.keys(user); // ["name","age","gender"]
    ```
- Object.values()
    - 값 배열로 반환한다.
        ```
        const user ={
            name: 'JH',
            age: 38,
            gender: 'male'
        }
        Object.values(user); // ["JH",38,"male"]
        ```
- Object.entries()
    - 키/값을 배열로 반환한다.
        ```
        const user ={
            name: 'JH',
            age: 38,
            gender: 'male'
        }
        Object.entries(user); 
        /* [
            ["name","JH"],
            ["age": 38],
            ["gender": "male"]
        ] */
        ```
- Object.fromEntries()
    - 키/값 배열을 객체로 반환한다.
        ```
        const arr =[
            ["name","JH"],
            ["age": 38],
            ["gender": "male"]
        ] 
        Object.fromEntries(arr); 
        /* {
            name: 'JH',
            age: 38,
            gender: 'male'
        }*/
        ```