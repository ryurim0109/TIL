## 생성자 함수

- 생성자 함수는 new 연산자를 이용해 객체를 생성한다.
- 보통 첫글자를 대문자로 함수를 작성한다.

```
let user ={
    name:"yurim",
    age:28,
}
```

```
function User(name,age){
    //this ={} 코드 작성하지 않아도, 알고리즘이 실행해준다.
    this.name =name;
    this.age =age;
    //return this
}

let user1=new User('yurim',28)
let user2=new User('JH',38)
let user3=new User('riri',1)
```
